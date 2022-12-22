import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="group rounded-md bg-white shadow overflow-hidden">
      {/* <!-- product image --> */}
      <div className="relative">
        <img src={props.image} />
        <div onClick={props.onClick} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <i className="fas fa-search text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"></i>
        </div>
      </div>
      {/* <!-- product image end --> */}
      {/* <!-- product content --> */}
      <div className="pt-4 pb-3 px-4">
          <h4 className="uppercase font-medium text-md mb-2 text-gray-800 hover:text-primary transition line-clamp-2">
            {props.name}
          </h4>
          <p className="text-gray-500 text-sm line-clamp-3">{props.description}</p>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">${props.price}</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      {/* <!-- product content end --> */}
      {/* <!-- product button --> */}
      <Button varient="card" onClick={props.onClick}><i className="fa-solid fa-circle-info"></i> View Details</Button>
      {/*  <!-- product button end --> */}
    </div>
  );
}

export default Card;
