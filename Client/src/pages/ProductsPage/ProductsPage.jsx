import React, { useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useProductsList } from "../../Hooks/useProductsList";
import { Link } from "react-router-dom";

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
              <Link to={`/${product.id}`}>
                <Cards key={product.id} product={product} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
