import "../styles/Products.css";
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  return (
    <>
      <section id="products">
        <div className="products__content">
          <div className="products__container">
            <h2>M&H Favorties</h2>
            <div className="products__grid">
              {products.map((product, index) => (
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
      </section>
    </>
  );
}

export default Products;
