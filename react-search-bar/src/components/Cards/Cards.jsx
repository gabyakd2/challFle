import React from "react";
import { products } from "../../mock/products.json";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards() {
  return (
    <div>
      <ul className={`flex flex-wrap justify-center ${style.divCards}`}>
        {products?.map(({ id, title, code, price, image }) => (
          <li key={id}>
            <Card
              title={title}
              code={code}
              price={price}
              image={image}
            />
          </li>
        ))}
      </ul>
      <div className="border-b border-solid flex justify-center"></div>
    </div>
  );
}
