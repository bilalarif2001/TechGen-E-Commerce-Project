import React from "react";

function Button(props) {
  let varient;

  if (props.varient === "blue")
    varient =
      "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
  else if (props.varient === "yellow")
    varient =
      "bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4";

  return (
    <button className={props.varient} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
