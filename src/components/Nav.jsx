import "../styles/Nav.css";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav() {
  const [mobile, setMobile] = useState(false);
  const openMobile = () => {
    setMobile(!mobile);
  };
  const toSection = (name) => {
    document.querySelector(`.${name}`).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="sticky-nav">
        <div className="navbar">
          <div className="navbar__logo">
            <Link to="/">M&H</Link>
          </div>
          <ul className="navbar__menu">
            <li  className="nav__menu__text">
              <Link to="/">Home</Link>
            </li>
            <li
              className="nav__menu__text"
            >
              <Link to="/catalog">Catalog</Link>
            </li>
            <li
              className="nav__menu__text"
            >
              <Link to="/">Product Page</Link>
            </li>
            <Link to="/">
              <FaShoppingCart className="nav__cart" />
            </Link>
            <IconMenu2 onClick={openMobile} className="hamburger-menu" />
          </ul>

        </div>
      </nav>
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close-mobile" />
        <ul>
          <li onClick={openMobile}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/">Product Page</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
