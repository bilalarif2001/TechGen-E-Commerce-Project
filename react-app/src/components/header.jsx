import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
//import cartdata from '../pages/Cart/cartdata'
import {useState,useEffect, useContext} from 'react'
import {globalCart} from '../context/cartcontext'
import { useNavigate } from 'react-router-dom'
// import globalsearch from '../pages/Shop/globalsearch'
import {globalSearch} from '../context/cartcontext'

function Header(props) {
    const navigate= useNavigate()
    const [cartValue,setCartValue] = useState(0)
    const [products,setProducts] = useState([])
    //const [search,setSearch] = useState("")
    const {cartdata}= useContext(globalCart)
    const {search,setSearch} = useContext(globalSearch)
    useEffect(()=>{
        setCartValue(cartdata.length)
    },[cartdata])

    function fetchProducts() {
        fetch("http://localhost:5000/products")
          .then((response) => response.json())
          .then((json) => setProducts(json));
      }
    
      useEffect(() => {
        fetchProducts();
      }, []);

      

      function handleSearch(e){
        setSearch(e.target.value)
      }

  return (
    <header className="py-4 shadow-sm bg-slate-600">
        <div className="container mx-auto flex items-center justify-between">
            {/* <!-- logo --> */}
            <a href="#" className="block w-32">
                {/* <img src="images/logo.svg" alt="logo" className="w-full"/> */}
                <h1 className="text-white text-3xl ">TechGen</h1>
            </a>
            {/* <!-- logo end --> */}

            {/* <!-- searchbar --> */}
            <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                <input type="text"
                    className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:outline-0"
                    placeholder="Search the Entire Store"
                    onChange={handleSearch}
                    />

                <Button type="submit" varient="yellow" onClick={()=>{navigate('/shop')}}>
                    Search
                </Button>
            </div>
            {/* <!-- searchbar end --> */}

            {/* <!-- navicons --> */}
            <div className="space-x-4 flex items-center">
                <Link to={'/cart'} className="lg:block text-center text-slate-200 hover:text-slate-300 transition hidden relative">
                    <span
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-yellow-500 text-black text-xs"><b>{cartValue}</b></span>
                    <div className="text-2xl">
                     <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div className="text-xs leading-3">Cart</div>
                    </Link>
                <a href="account.html" className="block text-center text-slate-200 hover:text-slate-300 transition">
                    <div className="text-2xl">
                        <i className="far fa-user"></i>
                    </div>
                    <div className="text-xs leading-3 text-slate-300">Account</div>
                    
                </a>
            </div>
            {/* <!-- navicons end --> */}

        </div>
    </header>
  )
}

export default Header