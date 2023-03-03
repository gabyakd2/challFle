import React, { useState } from "react";
import Cards from "../components/Cards/Cards";
import { products } from "../mock/products.json"
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  const [productsList, setProductList] = useState(products);
  return (
    <div>
      <SearchBar productsList={productsList} setProductList={setProductList} />
      <Cards productsList={productsList} />
    </div>
  );
}
