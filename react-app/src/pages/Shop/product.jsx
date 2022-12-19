import React from 'react'
import Button from '../../components/button';
import bannerImg2 from '../../assets/BannerImage2.jpg'
import Card from '../../components/card';
import { useParams,useNavigate,Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import {useState} from 'react'
import cartdata from '../Cart/cartdata';


function Product(props) {
    const name= useParams()
    // Retrieving products data
    const products = props.products
    const [load,setLoad]= useState(false)
    const [loadMessage,setLoadMessage] = useState(false)

   
 

// Fitering out the product from users according to useParams link
  const filteredProduct=(products.find((item) => {
    return(item.name===name.name)})) // Useparams returns an object. 
    
    const isProductExistInCart=(cartdata.filter((item) => {
        return(item.name===name.name)}))
    
    const navigate= useNavigate();

    // Add to Cart Functionality
    function cartHandler(){
       setLoad(true)
       if(isProductExistInCart.length>0) {
        setLoadMessage(true);
    }
       else {cartdata.push(filteredProduct)
        toast.success("Product Successfully added to cart")
        setLoadMessage(false)
    }
       
    }
    
  return (
    <div className="container mx-auto">
        {/* <!-- breadcrum --> */}
    <div className="py-4 container flex gap-3 items-center">
            <Link className="text-primary text-base"to={'/home'}><i className="fas fa-home"></i></Link>
      
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <Link className="text-primary text-base font-medium uppercase" to={'/shop'}>Shop</Link>
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <p className="text-gray-600 font-medium uppercase">{filteredProduct.name}</p>
    </div>
    {/* <!-- breadcrumb end --> */}
    
    {/* <!-- product view --> */}
    <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        {/* <!-- product image --> */}
        <div>
            <div>
                <img id="main-img" src={bannerImg2} className="w-full"/>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <div>
                    <img src={bannerImg2} className="single-img w-full cursor-pointer border border-primary"/>
                </div>
                <div>
                    <img src={bannerImg2} className="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={bannerImg2} className="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={bannerImg2} className="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={bannerImg2} className="single-img w-full cursor-pointer border"/>
                </div>
            </div>
        </div>
       {/*  <!-- product image end --> */}
        {/* <!-- product content --> */}
        <div>
            <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">{filteredProduct.name}</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability:</span>
                   {filteredProduct.stock>0?<span className="text-green-600">In Stock</span>: <span className="text-rose-500">Out of Stock</span> }
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Brand:</span>
                    <span className="text-gray-600">{filteredProduct.brand}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Category:</span>
                    <span className="text-gray-600">{filteredProduct.category}</span>
                </p>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
                <span className="text-primary font-bold text-xl">${filteredProduct.price}</span>
            </div>
            <p className="mt-4 text-gray-600">
                {filteredProduct.description}
            </p>

            {/* <!-- add to cart button --> */}
            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
              <Button varient="cart" onClick={cartHandler}> <i className="fa-solid fa-cart-plus fill-current text-slate-100"/> Add to Cart</Button>
              <Button varient="cart"><i className="far fa-heart fill-current text-slate-100"/> Wishlist</Button>
            </div>
             {loadMessage && <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-2 " role="alert">
                <p className="font-bold">Product has been already Added to Cart</p>
                <Link to={'/cart'}>Go to Cart?</Link>
                </div>}
            {/* <!-- add to cart button end --> */}
            {/* <!-- product share icons --> */}
            <div className="flex space-x-3 mt-4">
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            {/* <!-- product share icons end --> */}
        </div>
        {/* <!-- product content end --> */}
    </div>
    {/* <!-- product view end --> */}

   {/*  <!-- product details and review --> */}
    <div className="container pb-16">
        {/* <!-- detail buttons --> */}
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Product Details
        </h3>
       {/*  <!-- details button end --> */}

        {/* <!-- details content --> */}
        <div className="lg:w-4/5 xl:w-3/5 pt-6">
            <div className="space-y-3 text-gray-600">
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro,
                    make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so
                    much more. That’s not just brain power — that’s the power of a full stack of ML technologies.
                </p>
            </div>
        </div>
       {/*  <!-- details content end --> */}
    </div>
   {/*  <!-- product details and review end --> */}

   {/*  <!-- related products --> */}
    <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related products</h2>
        {/* <!-- product wrapper --> */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
           <Card image={bannerImg2}/>
           <Card image={bannerImg2}/>
           <Card image={bannerImg2}/>
           <Card image={bannerImg2}/>
        </div>
       {/*  <!-- product wrapper end --> */}
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Product;