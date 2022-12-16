import React from 'react'
import Button from '../components/button';
import img from '../assets/BannerImage2.jpg'

function ShoppingCart() {
  return (
    <div className='container mx-auto'>
      {/* Shopping cart  */}
      <div class=" lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
      <div class="xl:col-span-9 lg:col-span-8">
            {/* <!-- cart title --> */}
            <div class="bg-gray-200 py-2 pr-20 xl:pr-18 mb-4 hidden md:flex font-medium">
                <p class="text-gray-600 text-center pl-5">#</p>
                <p class="text-gray-600 text-center pl-12">Product</p>
                <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
                <p class="text-gray-600 text-center">Price</p>
            </div>
            {/* <!-- cart title end --> */}

            {/* <!-- shipping carts --> */}
            <div class="space-y-4">
                {/* <!-- single cart --> */}
                <div
                    class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                   <div class="flex-none w-1">
                   <h1>1</h1>
                   </div>
                   {/*  <!-- cart image --> */}
                    <div class="w-32 flex-shrink-0">
                        <img src={img} class="w-full"/>
                    </div>
                    {/* <!-- cart image end --> */}
                    {/* <!-- cart content --> */}
                    <div class="md:w-2/4 w-full">
                        <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                            Italian L Shape Sofa
                        </h2>
                        <p class="text-primary font-semibold">$45.00</p>
                        <p class="text-gray-500">Size: M</p>
                    </div>
                    {/* <!-- cart content end --> */}
                   {/*  <!-- cart quantity --> */}
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 xl:mr-6">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-10 flex items-center justify-center">4</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                    {/* <!-- cart quantity end --> */}
                    <div class="ml-auto md:ml-0">
                        <p class="text-primary text-lg font-semibold">$320.00</p>
                    </div>
                    <div class="text-gray-600 hover:text-primary cursor-pointer">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
               {/*  <!-- single cart end --> */}
              
            </div>
            {/* <!-- shipping carts end --> */}
        </div>
        <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div class="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>$320</p>
                </div>
                <div class="flex justify-between">
                    <p>Total Products</p>
                    <p>Free</p>
                </div>
                <div class="flex justify-between">
                    <p>Total Items</p>
                    <p>Free</p>
                </div>
            </div>
            <div class="flex justify-between my-3 text-rose-500 font-bold uppercase hover:text-red-700">
                <h4>Total</h4>
                <h4>$320</h4>
            </div>

            {/* <!-- searchbar --> */}
            <div class="flex mb-5">
            </div>
            {/* <!-- searchbar end --> */}

           {/*  <!-- checkout --> */}
           <Button varient="card">{"Proceed to checkout --> "}</Button>
                
            
            {/* <!-- checkout end --> */}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;