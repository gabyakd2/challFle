import React, { useState } from "react";
import { products } from "../../mock/products.json"
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Container, Form } from "react-bootstrap";
import style from "./SearchBar.module.css"

export default function SearchBar({ productsList, setProductList, setIsLoading }) {
  const [input, setInput] = useState("");
  const auxProduct = products

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleCloseInput = () => {
    setProductList(auxProduct)
    setInput('')
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const filteredProducts = productsList.filter(({ title }) =>
        title.toLowerCase().includes(input.toLowerCase())
      );
      if (input && (!filteredProducts || !filteredProducts.length)) {
        alert("El articulo ingresado no existe");
      } else if (!input) {
        alert("Para poder buscar ingrese el nombre del producto");
      } else {
        setProductList(filteredProducts);
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Container className="pt-3">
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Form.Control
            type="text"
            value={input}
            placeholder="Buscar un articulo..."
            onChange={(e) => handleInputChange(e)}
          />
          <Button variant="dark" size="lg" type="submit" className="pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span className="fs-6 ms-2">Buscar</span>
          </Button>
        </InputGroup>
      </Form>
      {input.length ? (
        <Button variant="dark" className="mt-2" onClick={handleCloseInput}>
          {input}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </Button>
      ) : null}
    </Container>
  );
}
