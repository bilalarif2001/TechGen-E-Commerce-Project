import React from 'react'
import Button from './button'

function Header() {
  return (
    <header class="py-4 shadow-sm bg-slate-600">
        <div class="container mx-auto flex items-center justify-between">
            {/* <!-- logo --> */}
            <a href="#" class="block w-32">
                {/* <img src="images/logo.svg" alt="logo" class="w-full"/> */}
                <h1 className='text-white text-4xl'>TechGen</h1>
            </a>
            {/* <!-- logo end --> */}

            {/* <!-- searchbar --> */}
            <div class="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text"
                    class="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search"/>
                <Button type="submit" varient="yellow">
                    Search
                </Button>
            </div>
            {/* <!-- searchbar end --> */}

            {/* <!-- navicons --> */}
            <div class="space-x-4 flex items-center">
                <a href="wishlist.html" class="block text-center text-gray-700 hover:text-primary transition relative">
                    <span
                        class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-yellow-500 text-black text-xs"><b>5</b></span>
                    <div class="text-2xl">
                        <i class="far fa-heart fill-current text-slate-300"></i>
                    </div>
                    <div class="text-xs leading-3 text-slate-300">Wish List</div>
                </a>
                <a href="cart.html"
                    class="lg:block text-center text-slate-300 hover:text-primary transition hidden relative">
                    <span
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-yellow-500 text-black text-xs"><b>3</b></span>
                    <div class="text-2xl">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                </a>
                <a href="account.html" class="block text-center text-slate-300 hover:text-primary transition">
                    <div class="text-2xl">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="text-xs leading-3 text-slate-300">Account</div>
                </a>
            </div>
            {/* <!-- navicons end --> */}

        </div>
    </header>
  )
}

export default Header