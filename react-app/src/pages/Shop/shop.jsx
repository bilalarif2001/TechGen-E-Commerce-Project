import React from 'react'
import Card from '../../components/card'
import bannerimg2 from '../../assets/BannerImage2.jpg'
import Input from '../../components/input'
import { Link } from 'react-router-dom'

function shop() {
  return (
    <div>
    {/* <!-- breadcrumb --> */}
    <div className="container mx-auto py-4 flex justify-between">
        <div className="flex gap-3 items-center">
            <Link className="text-primary text-base" to={'/home'}><i className="fas fa-home"></i></Link>
            <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
            <Link className="text-gray-600 font-medium" to={'/shop'}>SHOP</Link>
        </div>
    </div>
    {/* <!-- breadcrumb end --> */}

    <div className="container mx-auto grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        {/* <!-- sidebar --> */}
        <div
            className="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
            <div className="divide-gray-200 divide-y space-y-5 relative">
               {/*  <!-- category filter --> */}
                <div className="relative">
                    <div
                        className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
                        <i className="fas fa-times"></i>
                    </div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                    <div className="space-y-2">
                        {/* <!-- single category --> */}
                        <div className="flex items-center">
                            <input type="checkbox" id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Bedroom" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                            <div className="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                       {/*  <!-- single category end --> */}
                    </div>
                </div>
                {/* <!-- category filter end --> */}
                {/* <!-- brand filter --> */}
                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                    <div className="space-y-2">
                        {/* <!-- single brand name --> */}
                        <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Dominik" className="text-gray-600 ml-3 cursor-pointer">Dominik</label>
                            <div className="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                       {/*  <!-- single brand name end --> */}
                     
                    </div>
                </div>
                {/* <!-- brand filter end --> */}
               {/*  <!-- price filter --> */}
                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div className="mt-4 flex items-center">
                        <Input varient="login" placeholder="min"/>
                        <span className="mx-3 text-gray-500">-</span>
                       <Input varient="login" placeholder="max"/>
                    </div>
                </div>
               {/*  <!-- price filter end --> */}

               
            </div>
        </div>
        {/* <!-- sidebar end --> */}

        {/* <!-- products --> */}
        <div className="col-span-3">
            {/* <!-- sorting --> */}
            <div className="mb-4 flex items-center">
                <button
                    className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none">
                    Filter
                </button>
                <select
                    className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option>Default sorting</option>
                    <option>Price low-high</option>
                    <option>Price high-low</option>
                    <option>Latest product</option>
                </select>
            </div>
            {/* <!-- sorting end --> */}
            {/* <!-- product wrapper --> */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <Card image={bannerimg2}/>
                <Card image={bannerimg2}/>
                <Card image={bannerimg2}/>
                <Card image={bannerimg2}/>
                <Card image={bannerimg2}/>
                <Card image={bannerimg2}/>
            </div>
           {/*  <!-- product wrapper end --> */}
        </div>
        {/* <!-- products end --> */}
    </div>
    
    </div>
  )
}

export default shop