import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-gray-700 hidden lg:block">
      <div className="container mx-auto">
        <div className="flex">
          {/* all category */}
          <div className="px-8 py-4 bg-yellow-500 flex items-center cursor-pointer group relative">
            <span className="text-white">
              <i className="fas fa-bars"></i>
            </span>
            <span className="capitalize ml-2 text-white">All categories</span>
            <div className="absolute left-0 top-full w-full divide-gray-300 divide-dashed divide-y bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              {/* single category */}
              <a
                href="#"
                className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
              </a>
              {/* single category end  */}
              {/* single category */}
              <a
                href="#"
                className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              {/* single category */}
              {/* single category */}
              <a
                href="#"
                className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Office</span>
              </a>
              {/* single category end */}
              {/*  single category */}
              <a
                href="#"
                className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              {/* single category end */}
              {/* single category */}
              <a
                href="#"
                className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
              >
                {/* <img src="images/icons/bed-2.svg" className="w-5 h-5 object-contain"/> */}
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
              {/* single category end */}
              {/*  single category */}
              <a
                href="#"
                className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/restaurant.svg"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              {/* single category end */}
            </div>
          </div>
          {/* all category end */}

          {/* nav menu */}
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 text-base capitalize">
              <a
                // href="index.html"

                className="text-gray-200 hover:text-white transition"
              >
                <Link to={"/"}> Home</Link>
              </a>
              <a className="text-gray-200 hover:text-white transition">
                <Link to={"/shop"}>Shop</Link>
              </a>
              <a className="text-gray-200 hover:text-white transition">
                <Link to={"/aboutUs"}>About us</Link>
              </a>
              <a className="text-gray-200 hover:text-white transition">
                <Link to={"/contactUs"}> Contact us</Link>
              </a>
            </div>
            <a
              href="login.html"
              className="ml-auto justify-self-end text-gray-200 hover:text-white transition"
            >
              Login/Register
            </a>
          </div>
          {/* nav menu end  */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
