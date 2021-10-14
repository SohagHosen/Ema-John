import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";

function ProductDetails() {
  let { key } = useParams();
  const { products } = useAuth();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();

  useEffect(() => {
    const product = products.find((product) => product.key === key);
    setProduct(product);
  }, [product]);
  const { features, img, name, price, star } = product;

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
  return (
    <>
      {product?.name ? (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="product" class="lg:w-1/2 w-full" src={img} />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {name}
                </h1>
                <div class="flex my-4">
                  <span class="flex items-center">
                    <span>
                      {[...Array(5)].map((i, index) =>
                        star > index ? (
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
                    <span class="text-gray-600 ml-3">{star} Reviews</span>
                  </span>
                </div>
                <section class="leading-relaxed">
                  <h3 className="text-2xl">Product features</h3>
                  {features.map((ft) => (
                    <div className="flex justify-between">
                      <p>{ft.description}</p>
                      <p>{ft.value}</p>
                    </div>
                  ))}
                </section>
                <hr className="my-5" />
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ${price}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        "null"
      )}
    </>
  );
}

export default ProductDetails;
