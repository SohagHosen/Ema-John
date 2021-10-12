import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, star } = props.product;

  return (
    <section class="p-4">
      <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div class="relative pb-48 overflow-hidden">
          <img
            class="absolute inset-0 h-full mx-auto p-3  object-cover"
            src={img}
            alt=""
          />
        </div>
        <div class="p-4">
          <h2 class="mt-2 mb-2  w-34 product_name">{name}</h2>
          <span class="flex items-center mb-1 text-sm">{seller}</span>
          <div class="mt-3 flex items-center">
            <span class="font-bold text-xl">$ {price}</span>&nbsp;
          </div>
        </div>

        <div class="px-4">Only {stock} left in stock - order soon</div>
        <div class="p-4 flex items-center justify-between bg-gray-100 text-sm text-gray-600">
          <span>
            {[...Array(5)].map((i, index) =>
              star > index ? (
                <FontAwesomeIcon
                  className="text-yellow-300 text-xl"
                  icon={faStar}
                />
              ) : (
                <FontAwesomeIcon
                  className="text-yellow-300 text-xl"
                  icon={regular}
                />
              )
            )}
          </span>
          <button className="bg-yellow-400 px-3 py-2">
            {" "}
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
