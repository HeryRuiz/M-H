import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from './pages/Layout.jsx'
import Catalog from "./pages/Catalog.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

