import { useEffect } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useAuth from "./useAuth";
import useProducts from "./useProducts";

const useCart = () => {
  const [products] = useProducts();
  const { cart, setCart } = useAuth();
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;
