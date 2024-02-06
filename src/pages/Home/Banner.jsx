import { Link } from "react-router-dom";
import "./styles/Banner.css";

function Banner({ title, des, img, reverse }) {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className={ `banner__content ${reverse ? 'banner__reverse' : ''}`}>
          <div className="text__side">
            <div className="text">
              <h2>{title}</h2>
              <p>{des}
               
              </p>
              <Link to="/products">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img
              src={img}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
