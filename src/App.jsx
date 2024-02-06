import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import ProductPage from "./pages/ProductPage//ProductPage.jsx";
import { CartProvider } from "./cart/cartContext.jsx";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
