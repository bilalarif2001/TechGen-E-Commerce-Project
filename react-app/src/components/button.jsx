import React from 'react'

function Button(props) {
  
    let varient;

if (props.varient==="blue") varient="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
else if (props.varient==="yellow") varient="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 transition"
else if (props.varient==="card") varient="bg-slate-600 hover:bg-yellow-600 text-white font-bold py-2 px-4 w-full transition"
else if (props.varient==="cart") varient="bg-slate-600 hover:bg-yellow-600 text-white font-bold w-44 py-2 px-4 w-full transition"

    return (
        <button className={varient} onClick={props.onClick} onSubmit={props.onSubmit} type={props.type}>{props.children}</button>
  )
}

export default Button