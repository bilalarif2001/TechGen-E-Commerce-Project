import React from 'react'
import Button from '../components/button';
import img from '../assets/BannerImage2.jpg'
import {useState,useEffect} from 'react'

function ShoppingCart(props) {
    let cartItems=props.cartItems;
    let email=localStorage.getItem("email");
   let quantity=[]

    const filteredCart=(cartItems.filter((item) => {
        return(item.email===email)}))

        function increment(index){
            quantity.push(index)
            
        }
        function decrement(index){
      
        }

    function deleteHandler(index){
    console.log(index)
    }

    function checkout(){
        console.log(quantity)
    }

  return (
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
            {filteredCart.length>0? filteredCart.map((item,index)=>(<div key={item.cartitems.id} className="space-y-4">
                <div
                    className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                   <div className="flex-none w-1">
                   <h1>{index+1}</h1>
                   </div>
                   {/*  <!-- cart image --> */}
                    <div className="w-32 flex-shrink-0">
                        <img src={img} className="w-full"/>
                    </div>
                    {/* <!-- cart image end --> */}
                    {/* <!-- cart content --> */}
                    <div className="md:w-2/4 w-full">
                        <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                            {item.cartitems.name}
                        </h2>
                        <p className="text-primary font-semibold">${item.cartitems.price}</p>
                        <p className="text-gray-500">{item.cartitems.category}</p>
                    </div>
                    {/* <!-- cart content end --> */}
                   {/*  <!-- cart quantity --> */}
                    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 xl:mr-6">
                        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-gray-200"><button onClick={decrement(index)}>-</button></div>
                        <div className="h-8 w-10 flex items-center justify-center">{"quantity"}</div>
                        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-gray-200"><button onClick={increment(index)}>+</button></div>
                    </div>
                    {/* <!-- cart quantity end --> */}
                    <div className="ml-auto md:ml-0">
                        <p className="text-primary text-lg font-semibold">${item.cartitems.price}</p>
                    </div>
                    <div className="text-gray-600 hover:text-primary cursor-pointer">
                        <button onClick={deleteHandler(index)}><i className="fas fa-trash hover:fill-current text-red-600"></i></button>
                    </div>
                </div>
            </div>)): <div className='text-2xl text-center font-bold'>No items to display</div>}
            {/* <!-- shipping carts end --> */}
        </div>
        <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div className="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>$320</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Products</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Items</p>
                    <p>Free</p>
                </div>
            </div>
            <div className="flex justify-between my-3 text-rose-500 font-bold uppercase hover:text-red-700">
                <h4>Total</h4>
                <h4>$320</h4>
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
    </div>
  )
}

export default ShoppingCart;