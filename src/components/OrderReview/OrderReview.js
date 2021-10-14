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
  console.log(cart);
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

  return (
    <div className="pt-20 ">
      {cart.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {cart.map((product) => (
            <ReviewItem
              key={product.key}
              product={product}
              handleRemove={handleRemove}
            />
          ))}
        </div>
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
