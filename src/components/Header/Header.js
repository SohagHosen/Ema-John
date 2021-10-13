import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import lightLogo from "../../images/light-logo.png";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";
import Cart from "../Cart/Cart";
import useCart from "../../hooks/useCart";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { auth, products, setDisplayProducts } = useAuth();
  const [cart] = useCart(products);
  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <header className="bg-gray-800 fixed w-full z-10">
      <nav className="px-2 sm:px-5  md:px-10 flex items-center justify-between flex-wrap  text-white py-3 ">
        <div className="block md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="flex items-center px-3 py-2 border border-opacity-25 rounded   hover:text-white hover:border-white"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white md:mr-6">
          <img className="h-10" src={lightLogo} alt="" />
        </div>
        {auth.user.email ? (
          <div className="md:order-last inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
            <div className="relative flex">
              <Cart cart={cart} />
              <div className="">
                <button
                  type="button"
                  className="bg-gray-900 text-white flex items-center justify-center  text-sm rounded-full focus:outline-none "
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="user_name px-3 font-bold">
                    {auth.user.displayName}
                  </span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={auth.user.photoURL}
                    alt=""
                  />
                </button>
              </div>
              <div
                className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white "
                role="menu"
                aria-orientation="vertical"
              >
                <button
                  className="block  px-4 py-2 text-black"
                  role="menuitem"
                  id="user-menu-item-2"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white md:order-last ">
            <button
              onClick={handleLogin}
              className=" bg-green-500 hover:text-white px-3 py-2 rounded-md"
            >
              Login
            </button>
          </div>
        )}
        <div
          className={`${
            toggle ? "block" : "hidden"
          } w-full  flex-grow md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <NavLink
              exact
              to="/"
              activeClassName="bg-gray-900 hover:bg-gray-900"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Shop
            </NavLink>
            <NavLink
              to="review"
              activeClassName="bg-gray-900 hover:bg-gray-900"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Review
            </NavLink>
            <NavLink
              to="/inventory"
              activeClassName="bg-gray-900 hover:bg-gray-900"
              className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white"
            >
              Inventory
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
