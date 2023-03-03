import React, { useState } from "react";
import Cards from "../components/Cards/Cards";
import { products } from "../mock/products.json";
import SearchBar from "../components/SearchBar/SearchBar";
import { Container } from "react-bootstrap";
import style from "../components/Cards/Cards.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function Home() {
  const [productsList, setProductList] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div>
      <SearchBar
        productsList={productsList}
        setProductList={setProductList}
        setIsLoading={setIsLoading}
      />
      <Cards productsList={productsList} isLoading={isLoading} />
      <Container>
        <hr className="border-top mt-5 w-100" />
        <p className="">{!isLoading && productsList.length} resultados</p>
      </Container>
    </div>
  );
}
