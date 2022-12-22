import { Outlet, Routes, Route, Link } from "react-router-dom";
import Button from "../../components/button";
import Sidebar from "../SideBar";
const Dashbord = () => {
  return (
    <div className=" h-screen  ">
      <div className="flex justify-between items-center px-14 py-4 w-full bg-blue-500  fixed ">
        <h1 className="text-start  text-3xl font-bold  text-white ">
          Dashbord
        </h1>
        <Button
          children="Log Out"
          varient="text-xl p-2 bg-white text-blue-500 w-32 rounded-md   "
        />
      </div>
      <div className="flex pt-[76px] fixed w-full h-screen">
        <Sidebar />

        <div className=" w-full mt-[1px] pt-11 px-8 overflow-auto bg-gray-100	pb-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashbord;
