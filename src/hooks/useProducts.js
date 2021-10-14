import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffle = data.sort(() => 0.5 - Math.random());
        setProducts(shuffle);
      });
  }, []);
  return [products, setProducts];
};

export default useProducts;
