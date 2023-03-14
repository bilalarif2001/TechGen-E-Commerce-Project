import React from "react";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import cartTotal from "./carttotal";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Mobilenav from "../../components/mobilenav";
import http from "../../utils/axios";
import {globalCart} from '../../context/cartcontext';
import {useContext} from 'react'

function CartBilling() {
  const {cartdata}= useContext(globalCart)
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("")
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const[response,setResponse]= useState(false) // for making useEffect run once per button click

const navigate= useNavigate();
const email=localStorage.getItem("email")

console.log(email)

 async function submit(e) {
  // Returning object if user email already exists.

  setResponse(true)
  e.preventDefault();

 // else if ( password !==confirmPassword ) toast.error("Your Password does not match",{autoClose:3000});
  // else if ( existEmail !==undefined ) toast.error("Account already registered on this email",{autoClose:3000});
    if(cartdata.length===0) toast.error("No Items available in the cart",{autoClose:3000})
    else if ( firstName.length>0 ) if(firstName[0].toUpperCase()!==firstName[0]) toast.error("First Name must start with capital letter",{autoClose:3000});
  else if ( lastName.length>0 ) if(lastName[0].toUpperCase()!==lastName[0]) toast.error("Last Name must start with capital letter",{autoClose:3000});

   else{
    const OrderDetails = {
      email:email,
      firstname:firstName,
      lastname:lastName,
      address: address,
      city: city,
      postalCode: postalCode,
      phoneNumber: phoneNumber,
      totalprice:cartTotal[0],
      status:"pending",
      orderdate:new Date().toLocaleDateString(),
      products:cartdata
      
    };
    try {
      const response=await http.post("/orders/orderplacement", OrderDetails)
    if(response.status===200){
      navigate("/orderplaced");
      cartdata.length=0;
    }
    console.log(response)
    } catch (error) {
      toast.error(error.response.data.message,{autoClose:3000});
    }
    
    
  }
}

  return (
    <div>
      <Header/>
      <Navbar/>
    <div className="container py-16 mx-auto">
      <div className="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Shipping Details</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please Enter your contact and shipping details.
        </p>
        <form type="submit" onSubmit={submit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            
            {/* First Name start */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pb-3">
              <label className="text-gray-600 mb-2 block">
                First Name <span className="text-rose-500">*</span>
              </label>

              <Input varient="login" placeholder="Enter your First Name" minLength={3} maxLength={10} type="text" onChange={(e)=>setFirstname(e.target.value)}  />
            </div>
             {/* First Name End */}

              {/* Last Name start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Last Name" minLength={3} maxLength={10} type="text" onChange={(e)=>setLastname(e.target.value)}/>
            </div>
             {/* Last Name End */}

             {/* Address Start */}
             <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Address <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" type="text" placeholder="Enter your Shipping Address"minLength={10} maxLength={40} onChange={(e)=>setAddress(e.target.value)} />
            </div>
            {/* Address End */}

           
            {/* City Start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                City <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter City" type="text" minLength={2} maxLength={10} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            {/* City End */}
            {/* Postal code Start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Postal code <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter Postal Code" type="text"minLength={2} maxLength={10} onChange={(e)=>setPostalCode(e.target.value)}/>
            </div>
            {/* Postal code End */}
            {/* Phone Number Start */}
            <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Phone number" type="text" minLength={11} maxLength={11} onChange={(e)=>setPhoneNumber(e.target.value)} />
            </div>
            {/* Phone Number End */}
            
          </div>

          <div className="mt-16">
            <Button varient="card" onSubmit={submit}>Place Order</Button>
          </div>
        </form>

        <p className="mt-4 text-gray-600 text-center">
          Love to add more products?
          <Link className="text-primary pl-1 hover:text-rose-500" to={"/shop"}>Continue Shopping</Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
    <Mobilenav/>
    <Footer/>
    </div>
  );
}

export default CartBilling;
