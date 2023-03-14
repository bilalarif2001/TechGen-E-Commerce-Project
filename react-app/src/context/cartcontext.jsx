import {createContext, useState} from 'react'

export const globalCart=createContext();
export const globalSearch=createContext();

function CartContext(props) {
    const [cartdata,setCartData]= useState([])
    const [search,setSearch]= useState("")
    
    return(
      
        <globalSearch.Provider value={{search,setSearch}}>
        <globalCart.Provider value={{cartdata,setCartData}}>
            {props.children}
        </globalCart.Provider>
        </globalSearch.Provider>
        
        
      
    )
    }

export default CartContext;