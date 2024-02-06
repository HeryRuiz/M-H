import React, { useState } from "react";
import products from "../../data/products";
import electronics from "../../data/electronics";
import furniture from "../../data/furniture";
import lights from "../../data/lights";
import { Link } from "react-router-dom";
import "./styles/Catalog.css";
function Catalog() {
  const [title, setTitle] = useState("All");
  return (
    <>
      <section id="catalog">
        <div className="catalog__container">
          <div className="catalog__content">
            <div>
              <Link to="/" className="catalog__link">
                {"< Home"}
              </Link>
            </div>
            <div className="catalog__title">
              <h2>{title}</h2>
              <div className="catalog__selectors">
                <button
                  onClick={() => {
                    setTitle("All");
                  }}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setTitle("Furniture");
                  }}
                >
                  Furniture
                </button>
                <button
                  onClick={() => {
                    setTitle("Electronics");
                  }}
                >
                  Electronics
                </button>
                <button
                  onClick={() => {
                    setTitle("Lights");
                  }}
                >
                  Lights
                </button>
              </div>
            </div>

            <div className="catalog__grid">
              {title === "All" &&
                products.map((product, index) => (
                  <div key={index} className="catalog__home">
                    <Link to={`/product/${product.name}`}>
                      <div className="catalog__img">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="catalog__details">
                        <p>{product.name}</p>
                        <p>Price: ${product.price / 100}.00</p>
                      </div>
                    </Link>
                  </div>
                ))}
                {title === "Electronics" &&
                electronics.map((product, index) => (
                  <div key={index} className="catalog__home">
                    <Link to={`/product/${product.name}`}>
                      <div className="catalog__img">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="catalog__details">
                        <p>{product.name}</p>
                        <p>Price: ${product.price / 100}.00</p>
                      </div>
                    </Link>
                  </div>
                ))}
                {title === "Furniture" &&
                furniture.map((product, index) => (
                  <div key={index} className="catalog__home">
                    <Link to={`/product/${product.name}`}>
                      <div className="catalog__img">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="catalog__details">
                        <p>{product.name}</p>
                        <p>Price: ${product.price / 100}.00</p>
                      </div>
                    </Link>
                  </div>
                ))}
                {title === "Lights" &&
                lights.map((product, index) => (
                  <div key={index} className="catalog__home">
                    <Link to={`/product/${product.name}`}>
                      <div className="catalog__img">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="catalog__details">
                        <p>{product.name}</p>
                        <p>Price: ${product.price / 100}.00</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
