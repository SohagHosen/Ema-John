import React, { useState, createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useProducts from "../hooks/useProducts";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [cart, setCart] = useState([]);
  const auth = useFirebase();
  const [products] = useProducts([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        products,
        cart,
        setCart,
        displayProducts,
        setDisplayProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
