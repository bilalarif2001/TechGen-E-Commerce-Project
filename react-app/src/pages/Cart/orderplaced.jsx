import React from "react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Mobilenav from "../../components/mobilenav";

function OrderPlaced() {
  const navigate=useNavigate();
  return (
     <div>
      <Header/>
      <Navbar/>
    <div className="container mx-auto">
      <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center mx-auto my-24">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          You Order has been Placed!
        </h5>
        <div className="text-center text-9xl p-10 ml-10">🎉</div>
        <div className="text-center text-2xl font-semibold">
          Thank You for your Purchase!
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-6 pt-2">
          You will Recieve an order confirmation Email with Order details.
        </p>
        <Button varient="card" onClick={()=>{navigate('/shop')}}>{"Continue Shopping ->"}</Button>
      </div>
    </div>
    <Footer/>
    <Mobilenav/>
    </div>
  );
}

export default OrderPlaced;
