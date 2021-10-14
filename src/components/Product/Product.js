import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import "./Product.css";

const Product = ({ productDetails, product }) => {
  // console.log(props);
  const { name, img, seller, price, stock, star } = product;

  return (
    <section className="p-4">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full mx-auto p-3  object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  w-34 product_name">{name}</h2>
          <span className="flex items-center mb-1 text-sm">{seller}</span>
          <div className="mt-3 flex items-center">
            <span className="font-bold text-xl">$ {price}</span>&nbsp;
          </div>
        </div>

        <div className="px-4">Only {stock} left in stock - order soon</div>
        <div className="p-4 flex items-center justify-between bg-gray-100 text-sm text-gray-600">
          <span>
            {[...Array(5)].map((i, index) =>
              star > index ? (
                <FontAwesomeIcon
                  key={index}
                  className="text-yellow-300 text-xl"
                  icon={faStar}
                />
              ) : (
                <FontAwesomeIcon
                  key={index}
                  className="text-yellow-300 text-xl"
                  icon={regular}
                />
              )
            )}
          </span>
          <button
            onClick={() => productDetails(product.key)}
            className="bg-yellow-500 text-white font-bold rounded px-3 py-2"
          >
            Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
