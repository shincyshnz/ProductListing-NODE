import React from "react";
// Initialization for ES Users
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

export const Cards = ({ product }) => {
  const { title, description, price, discountPercentage, category } = product;
  const discountedPrice = Math.ceil(price - (price * discountPercentage) / 100);

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-64 m-1">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <span className="absolute bg-red-600 p-2 my-3 text-xs">
          {`${discountPercentage}%`}
        </span>
        <img
          className="rounded-t-lg  w-64 h-52 object-contain"
          src={product.images[0]}
        />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <h3 className="mb-2 text-sm font-medium leading-tight text-neutral-400  dark:text-neutral-50">
          {category}
        </h3>
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
      <div className="px-6 pb-2">
        <span className="inline-block  rounded-full py-1 text-sm font-semibold text-blue-950   mb-2 line-through">
          {`${price} AED`}
        </span>
        <span className="inline-block  rounded-full py-1 text-m font-semibold text-red-600  mx-2 mb-2">
          {`${discountedPrice} AED`}
        </span>
      </div>
    </div>
  );
};
