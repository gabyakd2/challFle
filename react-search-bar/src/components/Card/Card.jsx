import React from "react";
import style from "./Card.module.css"

export default function Card({image, title, code, price}) {
  return (
    <div className={`max-w-sm w-full lg:max-w-full lg:flex p-4 ${style.divCard}`}>
      <div
        className={`lg:w-48 ${style.divImgCard}`}
      >
        <img src={image} alt={title} className="border-solid border-2 rounded-lg shadow-md" />
      </div>
      <div className="py-6 pl-6 pb-20 flex flex-col justify-center leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-semibold text-lg mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">
            {code}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Precio: <span className="font-bold">${price}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
