import React from "react";
import style from "./Card.module.css"

export default function Card({image, title, code, price}) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className={`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden ${style.divImgCard}`}
        // style="background-image: url('/img/card-left.jpg')"
        title="Woman holding a mug"
      >
        <img src={image} alt={title} />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">
            {code}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
