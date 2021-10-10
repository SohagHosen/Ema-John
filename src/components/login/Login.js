import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Login() {
  const [register, setRegister] = useState(false);
  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {register ? "Register a new Account" : "Log in to your Account"}
          </h2>
        </div>
        <form className="mt-8 space-y-2" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {register && (
              <div>
                <input
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
            )}
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                  !register && "rounded-t-md"
                }`}
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                  ${!register && "rounded-b-md"}`}
                placeholder="Password"
              />
            </div>
            {register && (
              <div>
                <input
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
              </div>
            )}
          </div>

          {!register && (
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}

          <div>
            {register ? (
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Register
              </button>
            ) : (
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FontAwesomeIcon className="text-indigo-500" icon={faLock} />
                </span>
                Login
              </button>
            )}
          </div>
        </form>
        {register ? (
          <p>
            Have an account?
            <button
              onClick={() => setRegister(!register)}
              className="font-bold text-indigo-600 ml-2"
            >
              Login
            </button>
          </p>
        ) : (
          <p>
            Don't have an account?
            <button
              onClick={() => setRegister(!register)}
              className="font-bold text-indigo-600 ml-2"
            >
              Create here
            </button>
          </p>
        )}
        <hr />
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FontAwesomeIcon className="text-red-400" icon={faGoogle} />
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
