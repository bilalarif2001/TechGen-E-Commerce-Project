import React from 'react'
import {useState,useEffect} from 'react'
import Button from '../components/button'

function Orderlist(props) {
const [quantity,setQuantity]= useState(1)

    function quantityhandler(e){
        setQuantity(e.target.value)
    }

    let statusColor;

    if (props.order.status==="pending") statusColor="bg-blue-200"
    else if (props.order.status==="Rejected") statusColor="bg-rose-400"
    else if (props.order.status==="accepted") statusColor="bg-green-400"
    
    // Using UseEffect to update state quantity directly on input Change. Otherwise react state is one step behind input.
useEffect(()=>{
},[quantity])



  return (
    <div className="space-y-4">
    <div
        className="flex items-center md:justify-between gap-6 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
       <div className="flex-none">
       <h1>{props.index+1}</h1>
       </div>

       <div className=" flex-shrink-0">
            <p>{props.order.firstname}</p>
        </div>
        <div className=" flex-shrink-0">
            <p>{props.order.email}</p>
        </div>

        <div className=" flex-shrink-0">
            <p>{props.order.city}</p>
        </div>

        <div className=" flex-shrink-0 font-semibold">
            <p>{props.order.totalprice}</p>
        </div>

        <div className={`flex-shrink-0 p-2 rounded-xl text-white font-semibold capitalize ${statusColor}`}>
            <p>{props.order.status}</p>
        </div>

        <div className=" flex-shrink-0 font-medium">
            <Button varient="card">View Details</Button>
        </div>

        
    </div>
</div>
  )
}

export default Orderlist