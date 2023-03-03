import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { products } from "../../mock/products.json";
import Cards from "../Cards/Cards";

export default function SearchBar({ productsList, setProductList }) {
  const [input, setInput] = useState("");
  // console.log(productsList)

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setInput("");
    const filteredProducts = productsList.filter(({ title }) =>
      title.toLowerCase().includes(input.toLowerCase())
    );
    if (input && (!filteredProducts || !filteredProducts.length)) {
      alert("El articulo ingresado no existe");
    } else if (!input) {
      alert("Para poder buscar ingrese el nombre del producto");
    } else {
      setInput("");
      setProductList(filteredProducts);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center">
        <div className={`mb-3 ${style.divNav}`}>
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="text"
              className=" flex-auto rounded-l border border-solid border-neutral-300 bg-transparent px-3 py-1.5 font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 dark:text-neutral-200"
              placeholder="Buscar un articulo..."
              value={input}
              onChange={(e) => handleInputChange(e)}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 bg-neutral-900"
              type="submit"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
