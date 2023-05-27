import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState("");

  const fetchProductDetails = async () => {
    const response = await axios(`http://localhost:3006/api/products/${id}`);
    setProductDetails(response?.data);
  };

  useEffect(() => {
    try {
      fetchProductDetails();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const {
    title,
    category,
    description,
    price,
    discountPercentage,
    rating,
    images,
  } = productDetails;

  const discountedPrice = Math.ceil(price - (price * discountPercentage) / 100);

  return (
    <>
      <div className="product-details-container mt-36 flex gap-10 justify-center">
        <div className="image-container">
          <img className="object-contain" src={images[0]} alt="" />
        </div>
        <div className="details-container mt-4 text-black">
          <h3 className="mb-2 text-sm font-medium leading-tight text-neutral-400  dark:text-neutral-50">
            {category}
          </h3>
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
          <span className="inline-block  rounded-full py-1 text-sm font-semibold text-blue-950   mb-2 line-through">
            {`${price} AED`}
          </span>
          <span className="inline-block  rounded-full py-1 text-m font-semibold text-red-600  mx-2 mb-2">
            {`${discountedPrice} AED`}
          </span>
          <span className="flex gap-1 rounded-md justify-center my-3 text-m font-medium bg-yellow-500 w-16 p-1">
            <AiFillStar />
            {rating}
          </span>
          <div>
            <button className="bg-red-600 rounded-md p-2 mr-2">
              Add to cart
            </button>
            <button className="bg-green-600 rounded-md p-2">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
