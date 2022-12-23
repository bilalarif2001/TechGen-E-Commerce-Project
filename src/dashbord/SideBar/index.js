import { Routes, Route, Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineArrowUp,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className=" rounded-lg   w-2/12 flex flex-col items-center  space-y-8 pt-10 h-screen">
      <Link
        to={"frontpage"}
        className="  w-full cursor-pointer   flex items-center justify-start  gap-4  rounded-md  text-xl px-4 text-black hover:px-4 hover:bg-gray-100  hover:py-4     "
      >
        <AiOutlineUser className="hover:text-yellow-500" />
        Dashboard
      </Link>
      <Link
        to={"user"}
        className="  w-full cursor-pointer   flex items-center justify-start  gap-4  rounded-md  text-xl px-4 text-black hover:px-4 hover:bg-gray-100  hover:py-4     "
      >
        <AiOutlineUser className="hover:text-yellow-500" />
        Users
      </Link>
      <Link
        to={"product"}
        className="  w-full cursor-pointer   flex items-center justify-start  gap-4  rounded-md  text-xl px-4 text-black hover:px-4 hover:bg-gray-100  hover:py-4     "
      >
        <AiOutlineArrowUp className="hover:text-yellow-500" />
        Products
      </Link>
      <Link
        to={"order"}
        className="  w-full cursor-pointer   flex items-center justify-start  gap-4  rounded-md  text-xl px-4 text-black hover:px-4 hover:bg-gray-100  hover:py-4     "
      >
        <AiOutlineShoppingCart className="hover:text-yellow-500" />
        Orders
      </Link>
      <div></div>
    </div>
  );
};
export default Sidebar;
