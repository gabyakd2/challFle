import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({productsList}) {
  return (
    <div className={style.products}>
      <ul className={`${style.divCards}`}>
        {productsList?.map(({ id, title, code, price, image }) => (
          <li className={style.liCards} key={id}>
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
