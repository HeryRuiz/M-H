import React from "react";
import { useParams } from "react-router";
import products from "../data/products";
import "../styles/ProductPage.css";


function ProductPage() {
  const { id } = useParams();
  const foundProduct = products.find((product) => product.name === id);

  return (
<></>
  );
}

export default ProductPage;
