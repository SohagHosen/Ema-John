import React from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";

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
    <div className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderReview;
