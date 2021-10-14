import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const [toggleCart, setToggleCart] = useState(false);

  const [cart] = useCart();
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="mr-5 flex items-center mt-2 text-black">
      <div className="relative">
        <button
          onClick={() => setToggleCart(!toggleCart)}
          className="relative  z-10 focus:outline-none"
        >
          <span className="relative inline-block">
            <FontAwesomeIcon className="text-xl text-white" icon={faCartPlus} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {totalQuantity}
            </span>
          </span>
        </button>

        <div
          className={`${
            toggleCart ? "block" : "hidden"
          } absolute right-0 p-2 w-56 bg-white rounded-md shadow-xl z-20`}
        >
          <h3 className="text-2xl text-center">Order Summary</h3>
          <div className=" flex justify-between">
            <h5 className="text-xl">Items Ordered</h5>
            <h5 className="text-xl">{cart.length}</h5>
          </div>
          <div className="flex justify-between">
            <p className="text-md">Subtotal</p>
            <p className="text-md">{total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md">Shipping</p>
            <p className="text-md">{shipping}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md">Tax</p>
            <p className="text-md">{tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md">Total</p>
            <p className="text-md">{grandTotal.toFixed(2)}</p>
          </div>
          <button className="px-4 w-full py-1 bg-yellow-500 rounded text-white font-bold mt-3">
            Review Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
