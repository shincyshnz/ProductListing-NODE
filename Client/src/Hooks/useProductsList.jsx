import React, { useEffect, useState } from "react";
import axios from "axios";

export const useProductsList = () => {
  const [productsList, setProductsList] = useState([]);

  const fetchProducts = async () => {
    const response = await axios("http://localhost:3006/api/products");
    setProductsList(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { productsList };
};
