import React from "react";
import { Link } from "react-router-dom";
import lightLogo from "../../images/light-logo.png";
function Footer() {
  return (
    <footer className=" flex justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6">
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <Link to="/" className="text-xl font-bold">
              <img src={lightLogo} className="h-10" alt="" />
            </Link>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link to="/" className="px-4 text-sm">
                Shop
              </Link>
              <Link to="/review" className="px-4 text-sm">
                Review
              </Link>
              <Link to="/inventory" className="px-4 text-sm">
                Inventory
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center">
          Built with by <span className="text-red-500 ">♥</span> Mohammad Sohag
          Hosen.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
