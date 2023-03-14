import React from 'react'
import { Link,useNavigate,NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
function Navbar() {
    let email=localStorage.getItem('email')
    let name=localStorage.getItem('name')
    const navigate= useNavigate()

    const normalLink="text-gray-200 font-semibold hover:text-white transition font-semibold"
    const activeLink="text-gray-200 font-semibold hover:text-white transition border-b-2 p-1 border-yellow-400 font-bold"
    // Applying active class on NavLinks.
    const activeStatus=( {isActive} ) =>
    isActive ? activeLink : normalLink // isActive object is part of NavLink component.

  return (
    <nav className=" bg-gray-700 hidden lg:block">
        <div className="container mx-auto">
            <div className="flex">

                {/* all category */} 
                <div className="px-8 py-4 bg-yellow-500 flex items-center cursor-pointer group relative">
                    <span className="text-white">
                        <i className="fas fa-bars"></i>
                    </span>
                    <span className="capitalize ml-2 text-white">All categories</span>
                    <div
                        className="absolute left-0 top-full w-full divide-gray-300  divide-y bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                         {/* single category */} 
                        <Link to={'/shop'}  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Processors</span>
                        </Link>
                        {/* single category end  */}
                        {/* single category */}
                        <Link to={'/shop'}  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Graphic Cards</span>
                        </Link>
                        {/* single category */}
                        {/* single category */}
                        <Link to={'/shop'} className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Motherboards</span>
                        </Link>
                        {/* single category end */}
                       {/*  single category */}
                        <Link to={'/shop'}  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Memory</span>
                        </Link>
                        {/* single category end */}
                        {/* single category */}
                        <Link to={'/shop'}  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                            {/* <img src="images/icons/bed-2.svg" className="w-5 h-5 object-contain"/> */}
                            <span className="ml-6 text-gray-600 text-sm">Storage</span>
                        </Link>
                        {/* single category end */}
                       {/*  single category */}
                        <Link to={'/shop'}  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Monitors</span>
                        </Link>
                        {/* single category end */}
                    </div>
                </div>
                 {/* all category end */}

                {/* nav menu */}
                <div className="flex items-center justify-between flex-grow pl-12">
                    <div className="flex items-center space-x-6 text-base capitalize">
                        <NavLink to={"/home"}  className={activeStatus}>Home</NavLink>
                        <NavLink to={"/shop"}  className={activeStatus}>Shop</NavLink>
                        <NavLink to={"/aboutus"}  className={activeStatus}>About us</NavLink>
                        <NavLink to={"/contactus"}  className={activeStatus}>Contact us</NavLink>
                        <NavLink to={"/myorders"}  className={activeStatus}>My Orders</NavLink>
                    </div>
                    {email?
                    <div className="ml-auto font-bold justify-self-end text-gray-200 hover:text-white transition " >{`Hello ${name}`} <button className='ml-10 bg-white hover:bg-gray-200 text-black rounded-md font-bold w-24 py-2 px-4 transition' onClick={()=>{localStorage.clear(); toast.info("You have been Successfully logged out",{autoClose:700, onClose: () => {
                        navigate("/login");
                      }});}}>Logout</button></div>:<Link className="ml-auto justify-self-end text-gray-200 hover:text-white transition" to={"/login"}>Login/Register</Link>}
                </div>
                {/* nav menu end  */}

            </div>
        </div>
        <ToastContainer/>
    </nav>
    
  )
}

export default Navbar;
