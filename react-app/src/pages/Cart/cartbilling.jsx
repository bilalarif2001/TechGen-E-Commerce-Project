import React from "react";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import cartdata from "./cartdata";
import cartTotal from "./carttotal";

function CartBilling() {
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

function submit(e) {
  // Returning object if user email already exists.

  setResponse(true)
  e.preventDefault();
  if (
    firstName==="" ||
    lastName==="" ||
    address === "" ||
    city === "" ||
    postalCode === "" ||
    phoneNumber === ""
  ) {
    toast.error("Fields cannot be empty",{autoClose:3000});
  }
 // else if ( password !==confirmPassword ) toast.error("Your Password does not match",{autoClose:3000});
  // else if ( existEmail !==undefined ) toast.error("Account already registered on this email",{autoClose:3000});
   else {
    const OrderDetails = {
      email:email,
      firstname:firstName,
      lastname:lastName,
      address: address,
      city: city,
      postalCode: postalCode,
      phoneNumber: phoneNumber,
      totalprice:cartTotal[0],
      products:cartdata
      
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(OrderDetails),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Successfully Placed an order",{autoClose:3000, onClose:()=>{console.log("order Placed")/* navigate("/login") */}});
      }
    });
  }
}

  return (
    <div className="container py-16 mx-auto">
      <div className="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Shipping Details</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please Enter your contact and shipping details.
        </p>
        <form type="submit">
          <div className="flex flex-wrap -mx-3 mb-6">
            
            {/* First Name start */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pb-3">
              <label className="text-gray-600 mb-2 block">
                First Name <span className="text-rose-500">*</span>
              </label>

              <Input varient="login" placeholder="Enter your First Name" type="text" onChange={(e)=>setFirstname(e.target.value)}  />
            </div>
             {/* First Name End */}

              {/* Last Name start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Last Name" type="text" onChange={(e)=>setLastname(e.target.value)}/>
            </div>
             {/* Last Name End */}

             {/* Address Start */}
             <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Address <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" type="text" placeholder="Enter your Shipping Address" onChange={(e)=>setAddress(e.target.value)} />
            </div>
            {/* Address End */}

           
            {/* City Start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                City <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter City" type="text" onChange={(e)=>setCity(e.target.value)}/>
            </div>
            {/* City End */}
            {/* Postal code Start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Postal code <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter Postal Code" type="number" onChange={(e)=>setPostalCode(e.target.value)}/>
            </div>
            {/* Postal code End */}
            {/* Phone Number Start */}
            <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Phone number" type="number" onChange={(e)=>setPhoneNumber(e.target.value)} />
            </div>
            {/* Phone Number End */}
            
          </div>

          <div className="mt-16">
            <Button varient="card" onClick={submit}>Place Order</Button>
          </div>
        </form>

        <p className="mt-4 text-gray-600 text-center">
          Love to add more products?
          <Link className="text-primary pl-1 hover:text-rose-500" to={"/shop"}>Continue Shopping</Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default CartBilling;
