import React from 'react'
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Mobilenav from '../../components/mobilenav';
import Footer from "../../components/footer";
import Card from '../../components/card'
import Input from '../../components/input'
import { Link,useNavigate } from 'react-router-dom'
import {useState,useEffect} from 'react'
import globalsearch from './globalsearch';


function Shop(props) {
    const products= props.products
    const [selectedCategories,setSelectedCategories]= useState([])
    console.log("selectedCategories")
    console.log(selectedCategories)
    const filteredProducts= products.filter((product)=>{
        return product.brand==="Asus"
    })
    const [minValue,setMinValue] = useState(0)
    const [MaxValue,setMaxValue] = useState(0)
    const [filteredSearch,setFilteredSearch]= useState([])
    const navigate = useNavigate();
    console.log(globalsearch)
const filterationByCategory= products.filter(product=>{
    return product.category.includes(selectedCategories)})

    useEffect(()=>{
setFilteredSearch(globalsearch[0])

    },[globalsearch])




    console.log(filterationByCategory)

    function handleCategories(e){
        const {value,checked} = e.target;
        if(checked) setSelectedCategories([...selectedCategories,value])
        else setSelectedCategories(selectedCategories.filter(category=>category!==value))
        
    }
  return (
    <div>
        <Header/>
        <Navbar/>
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
                            <input type="checkbox" value={"monitors"} onChange={handleCategories} id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label  className="text-gray-600 ml-3 cursor-pointer">Monitors</label>
                        </div>
                       {/*  <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div className="flex items-center">
                            <input type="checkbox" value={"graphic cards"} onChange={handleCategories} id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label  className="text-gray-600 ml-3 cursor-pointer">Graphic Cards</label>
                        </div>
                       {/*  <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div className="flex items-center">
                            <input type="checkbox" value={"motherboards"} onChange={handleCategories} id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label  className="text-gray-600 ml-3 cursor-pointer">Motherboards</label>
                        </div>
                       {/*  <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div className="flex items-center">
                            <input type="checkbox" value={"monitors"} onChange={handleCategories} id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label  className="text-gray-600 ml-3 cursor-pointer">Monitors</label>
                        </div>
                       {/*  <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div className="flex items-center">
                            <input type="checkbox" value={"processors"} onChange={handleCategories} id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label  className="text-gray-600 ml-3 cursor-pointer">Processors</label>
                        </div>
                       {/*  <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div className="flex items-center">
                            <input type="checkbox" value={"periphrals"} onChange={handleCategories} id="Bedroom"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label  className="text-gray-600 ml-3 cursor-pointer">Periphrals</label>
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
                            <label className="text-gray-600 ml-3 cursor-pointer">Dominik</label>
                        </div>
                       {/*  <!-- single brand name end --> */}
                       {/* <!-- single brand name --> */}
                       <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label className="text-gray-600 ml-3 cursor-pointer">Asus</label>
                        </div>
                       {/*  <!-- single brand name end --> */}
                       {/* <!-- single brand name --> */}
                       <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label className="text-gray-600 ml-3 cursor-pointer">Intel</label>
                        </div>
                       {/*  <!-- single brand name end --> */}
                       {/* <!-- single brand name --> */}
                       <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label className="text-gray-600 ml-3 cursor-pointer">ViewSonic</label>
                        </div>
                       {/*  <!-- single brand name end --> */}
                       {/* <!-- single brand name --> */}
                       <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label className="text-gray-600 ml-3 cursor-pointer">Samsung</label>
                        </div>
                       {/*  <!-- single brand name end --> */}
                       {/* <!-- single brand name --> */}
                       <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label className="text-gray-600 ml-3 cursor-pointer">BenQ</label>
                        </div>
                       {/*  <!-- single brand name end --> */}
                       {/* <!-- single brand name --> */}
                       <div className="flex items-center">
                            <input type="checkbox" id="Dominik"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label className="text-gray-600 ml-3 cursor-pointer">Zotac</label>
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
                
            </div>
            {/* <!-- sorting end --> */}
            {/* <!-- product wrapper --> */}
            {products.length>0? <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
           {filterationByCategory.map((item) => (
            <Card key={item.id} image={item.img1} price={item.price} name={item.name} description={item.description} onClick={()=> navigate(`/product/${item.name}`)}/>
          ))}
        </div>:
        <h1 className="text-3xl text-center text-gray-500">No Products to Display</h1>
        }
           {/*  <!-- product wrapper end --> */}
        </div>
        {/* <!-- products end --> */}
    </div>
    <Mobilenav/>
    <Footer/>
    </div>
  )
}

export default Shop