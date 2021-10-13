import React from "react";
import useCart from "../../hooks/useCart";
import "./Cart.css";

const Cart = () => {
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
    <div>
      <div className=" text-black">
        <div className="relative ">
          <button className="relative z-10  p-2 focus:outline-none">
            <span className="relative inline-block">
              <svg
                className="w-6 h-6 text-gray-700 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"></path>
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalQuantity}
              </span>
            </span>
          </button>

          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
