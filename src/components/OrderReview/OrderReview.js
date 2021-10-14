import React from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";
import emptyCart from "../../images/emptyCart.jpg";
const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    clearTheCart();
    history.push("/placeorder");
  };

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
    <div className="pt-20 container mx-auto">
      {cart.length ? (
        <>
          <section className="flex ">
            <div className="w-2/3">
              {cart.map((product) => (
                <ReviewItem
                  key={product.key}
                  product={product}
                  handleRemove={handleRemove}
                />
              ))}
            </div>
            <div className="w-1/3 bg-gray-100 p-5 my-5">
              <h3 className="text-2xl text-center">Order Summary</h3>
              {cart.map((product) => (
                <section
                  className="flex justify-between mt-3"
                  key={product.key}
                >
                  <p className=" w-56 truncate"> {product.name}</p>
                  {product.quantity} *<p> {product.price}</p>
                </section>
              ))}
              <hr className="my-2" />
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
              <button className="w-full mt-5 text-white font-bold py-2 bg-yellow-500">
                Proceed to Checkout
              </button>
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <div>
            <img className="h-96" src={emptyCart} alt="" />
            <h3 className="text-3xl mb-7 text-center">Your Cart is Empty</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderReview;
