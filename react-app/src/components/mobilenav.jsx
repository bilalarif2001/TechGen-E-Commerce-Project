import React from 'react'

function Mobilenav() {
  return (
    <div>
    <div className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        <a href="#" className="block text-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl" id="menuBar">
                <i className="fas fa-bars"></i>
            </div>
            <div className="text-xs leading-3">Menu</div>
        </a>
        <a href="#" className="block text-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
                <i className="fas fa-list-ul"></i>
            </div>
            <div className="text-xs leading-3">Category</div>
        </a>
        <a href="#" className="block text-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
                <i className="fas fa-search"></i>
            </div>
            <div className="text-xs leading-3">Search</div>
        </a>
        <a href="cart.html" className="text-center text-gray-700 hover:text-primary transition relative">
            <span
                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
            <div className="text-2xl">
                <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="text-xs leading-3">Cart</div>
        </a>
    </div>

    {/* Mobile SideBar */}
    <div className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow hidden" id="mobileMenu">
        <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
            <div id="closeMenu"
                className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer">
                <i className="fas fa-times"></i>
            </div>
            {/* <!-- navlink --> */}
            <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
            <div className="">
                <a href="index.html" className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    Home
                </a>
                <a href="shop.html" className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    Shop
                </a>
                <a href="#" className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    About Us
                </a>
                <a href="#" className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    Contact Us
                </a>
            </div>
            {/* <!-- navlinks end --> */}
        </div>
    </div>
    
    </div>
  )
}

export default Mobilenav