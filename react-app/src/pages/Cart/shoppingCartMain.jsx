import React from 'react'
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Mobilenav from '../../components/mobilenav';
import Button from '../../components/button';
import {useState,useEffect} from 'react'
import Cartproducts from './cartproducts';
import cartTotal from './carttotal';
import {ToastContainer,toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import {globalCart} from '../../context/cartcontext';
import {useContext} from 'react'

function ShoppingCart() {
    const navigate= useNavigate();
    const {cartdata}= useContext(globalCart)
    let email=localStorage.getItem("email");
    let [sum,setSum]= useState(0)
        cartTotal[0]=sum
        
   /*  useEffect(()=>{
            console.log("wow from cart")
        },[Cartproducts])  */

        function sumofProducts(products){
            let sum=0;
            products.forEach(product => {
                sum+=product.quantity*product.price
            });
            
            return sum;
        }

    function reupdateCartByQuantity(quantity,index){
    cartdata[index].quantity=quantity
    setSum(sumofProducts(cartdata))
    
    }

    function reupdateCartOnDelete(){
        setSum(sumofProducts(cartdata))
    }
    console.log(cartdata)

    function checkout(){
        if(email===null){
            toast.info("In order to make a purchase,you must login first.",{autoClose:1500, onClose: () => {
                navigate("/login");
              }})
        }
        else if (cartdata.length===0) toast.warning("No Items available in the Cart",{autoClose:1500,})
        else{
            navigate('/billing')
        }

    }

  return (
    <div className=' flex flex-col min-h-screen'>
    <Header/>
    <Navbar/>
    <div className='container mx-auto'>
      {/* Shopping cart  */}
      <div className=" lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
      <div className="xl:col-span-9 lg:col-span-8">
            {/* <!-- cart title --> */}
            <div className="bg-gray-200 py-2 pr-20 xl:pr-18 mb-4 hidden md:flex font-medium">
                <p className="text-gray-600 text-center pl-5">#</p>
                <p className="text-gray-600 text-center pl-12">Product</p>
                <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
                <p className="text-gray-600 text-center">Price</p>
            </div>
            {/* <!-- cart title end --> */}

            {/* <!-- shipping carts --> */}
           {cartdata.length>0?cartdata.map((product,index)=>(<Cartproducts product={product} key={index} reupdateCartByQuantity={reupdateCartByQuantity} reupdateCartOnDelete={reupdateCartOnDelete} index={index}/>)):<div className='text-2xl text-center font-bold text-gray-500'>{"Oops! Your Cart is Empty. "}<Link className='hover:text-rose-600' to={'/shop'}>{"Add Something? :)"}</Link></div>}
            {/* <!-- shipping carts end --> */}
        </div>
        <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div className="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>${sum.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Products</p>
                    <p>{cartdata.length}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
            </div>
            <div className="flex justify-between my-3 text-rose-500 font-bold uppercase hover:text-red-700">
                <h4>Total</h4>
                <h4>${sum.toFixed(2)}</h4>
            </div>

            {/* <!-- searchbar --> */}
            <div className="flex mb-5">
            </div>
            {/* <!-- searchbar end --> */}

           {/*  <!-- checkout --> */}
           <Button onClick={checkout} varient="card">{"Proceed to checkout --> "}</Button>
                
            
            {/* <!-- checkout end --> */}
        </div>
      </div>
      <ToastContainer/>
    </div>
    <Mobilenav/>
    <div className="mt-auto"><Footer /></div>
    </div>
  )
}

export default ShoppingCart;