import React from "react";
import { Card, Container, Col } from "react-bootstrap";
import style from "./Card.module.css";

export default function CardProduct({ image, title, code, price }) {
  return (
    <Card className={`border-0 ${style.cardProduct}`}>
      <div className="row">
        <Col md={6}>
          <Card.Img src={image} alt={title} className={style.imgCard}/>
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{code}</Card.Text>
            <Card.Text>
              <small>
                Precio: <span className="fw-bold">${price}</span>
              </small>
            </Card.Text>
          </Card.Body>
        </Col>
      </div>
    </Card>
  );
}
