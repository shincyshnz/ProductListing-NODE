import React, { useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useProductsList } from "../../Hooks/useProductsList";

export const ProductsPage = () => {
  const { productsList } = useProductsList();

  return (
    <>
      <div
        className="my-16 mx-52 flex justify-center gap-x-10 gap-y-5
       flex-wrap"
      >
        {productsList.map((product) => {
          return (
            <>
              <Cards product={product} />
            </>
          );
        })}
      </div>
    </>
  );
};
