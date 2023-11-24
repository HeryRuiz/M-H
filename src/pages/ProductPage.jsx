import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import products from "../data/products";
import "../styles/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const foundProduct = products.find((product) => product.name === id);

  return (
    <>
      <section id="product">
        <div className="product__container">
          <div className="product__content">
            <div className="product__item">
              <div className="product__left"></div>
              <div className="product__right"></div>
            </div>
            <div className="product__specs">
              <div className="product__spec">
                <p>Texture:</p>
                <p>Smooth</p>
              </div>
              <div className="product__spec">
                <p>Weight:</p>
                <p>30 Pounds</p>
              </div>
              <div className="product__spec">
                <p>Size:</p>
                <p>Large</p>
              </div>
            </div>
            <div className="product__other">
              <h3>Related products</h3>
              <div className="product__grid">
                {products.slice(0, 4).map((product, index) => (
                  <div key={index} className="product__home">
                    <Link to={`/product/${product.name}`}>
                      <div className="product__img">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product__details">
                        <p>{product.name}</p>
                        <p>{`Price: $${product.price / 100}.00`}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
