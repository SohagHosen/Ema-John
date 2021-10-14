import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { addToDb } from "../../utilities/fakedb";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Shop = () => {
  const { products, displayProducts, setDisplayProducts } = useAuth();
  const history = useHistory();
  useEffect(() => {
    setDisplayProducts(products.slice(0, 16));
  }, [displayProducts]);

  const productDetails = (key) => {
    history.push(`/product/details/${key}`);
  };
  return (
    <>
      <header className="header text-center">
        <h1 className="text-white text-5xl pt-36 font-bold">
          Shop Computers & Accessories
        </h1>
        <p className="text-white text-xl mt-2">
          We ship over 45 million products around the world
        </p>
      </header>
      <div className=" -mt-72 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gay-2">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              productDetails={productDetails}
            ></Product>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
