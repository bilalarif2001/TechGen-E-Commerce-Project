import React from 'react'
import {useState,useEffect} from 'react'
import {globalCart} from '../../context/cartcontext';
import {useContext} from 'react'

function Cartproducts({product,index,reupdateCartByQuantity,reupdateCartOnDelete}) {
const [quantity,setQuantity]= useState(1)
const {cartdata,setCartData}= useContext(globalCart)

    function quantityhandler(e){
        setQuantity(e.target.value)
        
        
    }
    
    // Using UseEffect to update state quantity directly on input Change. Otherwise react state is one step behind input.
useEffect(()=>{
    reupdateCartByQuantity(parseInt(quantity),index)
},[quantity])

function deleteHandler(){
    console.log(index)
    setCartData(cartdata.filter((product, Productindex)=>{
        return Productindex !==index;
    }))
//cartdata.splice(index,1)
reupdateCartOnDelete()
}

  return (
    <div className="space-y-4">
    <div
        className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
       <div className="flex-none w-1">
       <h1>{index+1}</h1>
       </div>
       {/*  <!-- cart image --> */}
        <div className="w-32 flex-shrink-0">
            <img src={product.img1} className="w-full"/>
        </div>
        {/* <!-- cart image end --> */}
        {/* <!-- cart content --> */}
        <div className="md:w-2/4 w-full">
            <h2 className="text-gray-800 mb-3 xl:text-md  font-medium uppercase">
                {product.name}
            </h2>
            <p className="text-primary font-semibold ">${product.price}</p>
             <p className="text-gray-500 text-sm">{"In-Stock: "+product.stock}</p>
            <p className="text-gray-500 text-sm">{product.category}</p>
        </div>
        {/* <!-- cart content end --> */}
       {/*  <!-- cart quantity --> */}
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 xl:mr-6">
            <input type="number" min={1} max={product.stock} defaultValue={1} className="h-8 w-11 flex items-center text-center justify-center focus:outline-none" onChange={quantityhandler}/>
        
        </div>
        {/* <!-- cart quantity end --> */}
        <div className="ml-auto md:ml-0">
            <p className="text-primary text-lg font-semibold">${product.price*quantity}</p>
        </div>
        <div className="text-gray-600 hover:text-primary cursor-pointer">
            <button onClick={deleteHandler}><i className="fas fa-trash hover:fill-current text-red-600"></i></button>
        </div>
    </div>
</div>
  )
}

export default Cartproducts