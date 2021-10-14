import React from "react";
import { Link } from "react-router-dom";
import lightLogo from "../../images/light-logo.png";
function Footer() {
  return (
    <footer class=" flex justify-center px-4 text-gray-100 bg-gray-800">
      <div class="container py-6">
        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <Link to="/" class="text-xl font-bold">
              <img src={lightLogo} className="h-10" alt="" />
            </Link>
          </div>
          <div class="flex mt-4 md:m-0">
            <div class="-mx-4">
              <Link to="/" class="px-4 text-sm">
                Shop
              </Link>
              <Link to="/review" class="px-4 text-sm">
                Review
              </Link>
              <Link to="/inventory" class="px-4 text-sm">
                Inventory
              </Link>
              <Link to="/login" class="px-4 text-sm">
                Login
              </Link>
            </div>
          </div>
        </div>
        <p class="text-center">
          Built with by <span className="text-red-500 ">♥</span> Mohammad Sohag
          Hosen.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
