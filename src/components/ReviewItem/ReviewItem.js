import React from "react";
import { useHistory } from "react-router";

const ReviewItem = ({ product, handleRemove }) => {
  const { name, price, key, img } = product;
  const history = useHistory();
  const handleDetails = () => {
    history.push(`/product/details/${key}`);
  };
  return (
    <div class="p-5">
      <div class="w-full lg:flex">
        <div class="h-auto border md:border-r lg:border-r-0 lg:border-b border-gray-400 lg:h-auto lg:w-48 flex-none bg-cover rounded-l lg:rounded-t-none lg:rounded-l border-b-0  text-center overflow-hidden">
          <img class="p-3 w-full " src={img} alt="" />
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t md:border-t-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <h3 class="text-gray-900 font-bold text-xl mb-2">{name}</h3>
            <p>${price}</p>
          </div>
          <div class="flex items-center">
            <div class="flex gap-3">
              <button
                onClick={() => handleRemove(key)}
                className="bg-red-500 px-5 rounded text-white font-bold mt-3 py-1"
              >
                Remove
              </button>
              <button
                onClick={handleDetails}
                className="bg-green-500 px-5 rounded text-white font-bold mt-3 py-1"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
