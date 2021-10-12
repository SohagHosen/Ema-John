import React, { useEffect, useState, createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const auth = useFirebase();
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffle = data.sort(() => 0.5 - Math.random());
        setProducts(shuffle);
      });
  }, []);
  return (
    <AuthContext.Provider
      value={{ auth, products, displayProducts, setDisplayProducts }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
