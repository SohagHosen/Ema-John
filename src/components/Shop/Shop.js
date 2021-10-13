import React, { useEffect } from "react";
import Product from "../Product/Product";
import { addToDb } from "../../utilities/fakedb";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Shop = () => {
  const { products, displayProducts, setDisplayProducts } = useAuth();
  const [cart, setCart] = useCart();

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
  };

  return (
    <>
      <header className="header"></header>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        {/* <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn-regular">Review Your Order</button>
            </Link>
          </Cart>
        </div> */}
      </div>
    </>
  );
};

export default Shop;
