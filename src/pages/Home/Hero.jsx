import "./styles/Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <header>
      <section id="hero">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__text--title">M&H Luxury Furniture</h1>
            <p className="hero__text--des">2024 Newest Collection</p>
            <Link to="/products" className="hero__explore">
              Explore The Catalog
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
