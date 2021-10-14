import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";

function ProductDetails() {
  let { key } = useParams();
  const { products } = useAuth();
  const [product, setProduct] = useState({});
  const history = useHistory();

  useEffect(() => {
    const pd = products.find((product) => product.key === key);
    pd ? setProduct(pd) : setProduct({});
  }, [product]);

  const [cart, setCart] = useCart();
  const handleAddToCart = () => {
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
    addToDb(product.key);
  };
  const handleAllItem = () => {
    history.push("/review");
  };
  return (
    <>
      {product?.name ? (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="product"
                className="lg:w-1/2 w-full"
                src={product.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex my-4">
                  <span className="flex items-center">
                    <span>
                      {[...Array(5)].map((i, index) =>
                        product.star > index ? (
                          <FontAwesomeIcon
                            key={index}
                            className="text-yellow-300 text-xl"
                            icon={faStar}
                          />
                        ) : (
                          <FontAwesomeIcon
                            key={index}
                            className="text-yellow-300 text-xl"
                            icon={regular}
                          />
                        )
                      )}
                    </span>
                    <span className="text-gray-600 ml-3">
                      {product.star} Reviews
                    </span>
                  </span>
                </div>
                <section className="leading-relaxed">
                  <h3 className="text-2xl">Product features</h3>
                  {product.features.map((ft, i) => (
                    <div key={i} className="flex justify-between">
                      <p>{ft.description}</p>
                      <p>{ft.value}</p>
                    </div>
                  ))}
                </section>
                <hr className="my-5" />
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
                <button
                  onClick={handleAllItem}
                  className="bg-yellow-500 w-full mt-5 py-2 rounded font-bold text-white"
                >
                  See All Item in Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default ProductDetails;
