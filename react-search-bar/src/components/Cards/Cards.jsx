import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "react-bootstrap/Spinner";
import style from "./Cards.module.css";

export default function Cards({ productsList, isLoading }) {
  return (
    <Container>
      <Row
        className={style.products}
      >
        {isLoading ? (
          <Spinner
            animation="border"
            role="status"
            className={style.spinnerPosition}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          productsList?.map(({ id, title, code, price, image }) => (
            <Col className={`${style.cardsList}`} key={id} md={6}>
              <CardProduct
                title={title}
                code={code}
                price={price}
                image={image}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
