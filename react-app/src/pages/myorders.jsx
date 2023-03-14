import React from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";
import Mobilenav from '../components/mobilenav';
import Button from '../components/button';
import {useState,useEffect} from 'react'
import {ToastContainer,toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Orderlist from './orderlist';
import http from '../utils/axios';

function ShoppingCart() {
  const [orders,setOrders]= useState([])
    const navigate= useNavigate();


    function fetchOrders() {
      fetch("http://localhost:5000/orders/viewOrders")
        .then((response) => response.json())
        .then((json) => setOrders(json));
    }

    useEffect(()=>{
      fetchOrders();
    },[])

    console.log(orders)

  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>
    <Navbar/>
    <div className='container mx-auto min-h-'>
      {/* Shopping cart  */}
      <div className=" lg:grid grid-cols-6 gap-6 items-start pb-16 pt-4">
      <div className="xl:col-span-9 lg:col-span-8">
            {/* <!-- cart title --> */}
            <div className="flex items-center md:justify-between gap-6 md:gap-6 p-2 mb-4 border border-gray-200 bg-gray-200  rounded flex-wrap md:flex-nowrap">
                <p className="text-gray-600 text-center font-semibold">Order.ID</p>
                <p className="text-gray-600 text-center pr-24 font-semibold">Name</p>
                <p className="text-gray-600 text-center pr-24 font-semibold">Email</p>
                <p className="text-gray-600 text-center pr-12 font-semibold">City</p>
                <p className="text-gray-600 text-center pr-12 font-semibold">Total Price</p>
                <p className="text-gray-600 text-center pr-12 font-semibold">Status</p>
                <p className="text-gray-600 text-center pr-12 font-semibold">View Details</p>
            </div>
            {/* <!-- cart title end --> */}

            {/* <!-- shipping carts --> */}
           { orders.length>0?orders.map((order,index)=>(<Orderlist order={order} key={index}  index={index}/>)):<div className='text-2xl text-center font-bold text-gray-500'>{"You don't have any pending orders."}</div>}
            {/* <!-- shipping carts end --> */}
        </div>
      
      </div>
      <ToastContainer/>
    </div>
    <Mobilenav/>
    <div className='mt-auto'>
    <Footer/>
    </div>
    </div>
  )
}

export default ShoppingCart;