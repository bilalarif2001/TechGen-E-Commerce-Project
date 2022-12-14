import React from 'react'
import Button from '../components/button';
import bannerImg2 from '../assets/BannerImage2.jpg'
import Card from '../components/card';

function Product() {
  return (
    <div class="container mx-auto">{/* <!-- breadcrum --> */}
    <div class="py-4 container flex gap-3 items-center">
        <a href="index.html" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </a>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <a href="shop.html" class="text-primary text-base font-medium uppercase">
            Shop
        </a>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">Italian L Shape Sofa</p>
    </div>
    {/* <!-- breadcrumb end --> */}
    
    {/* <!-- product view --> */}
    <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        {/* <!-- product image --> */}
        <div>
            <div>
                <img id="main-img" src={bannerImg2} class="w-full"/>
            </div>
            <div class="grid grid-cols-5 gap-4 mt-4">
                <div>
                    <img src={bannerImg2} class="single-img w-full cursor-pointer border border-primary"/>
                </div>
                <div>
                    <img src={bannerImg2} class="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={bannerImg2} class="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={bannerImg2} class="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={bannerImg2} class="single-img w-full cursor-pointer border"/>
                </div>
            </div>
        </div>
       {/*  <!-- product image end --> */}
        {/* <!-- product content --> */}
        <div>
            <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span class="text-green-600">In Stock</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand: </span>
                    <span class="text-gray-600">Apex</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category: </span>
                    <span class="text-gray-600">Sofa</span>
                </p>
            </div>
            <div class="mt-4 flex items-baseline gap-3">
                <span class="text-primary font-semibold text-xl">$450.00</span>
                <span class="text-gray-500 text-base line-through">$500.00</span>
            </div>
            <p class="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi
                labore blanditiis
            </p>
            {/* <!-- color --> */}
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Color</h3>
                <div class="flex items-center gap-2">
                    {/* <!-- single color --> */}
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-red" checked/>
                        <label for="color-red"
                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    {/* <!-- single color end --> */}
                </div>
            </div>
            {/* <!-- color end --> */}
            {/* <!-- quantity --> */}
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div class="h-8 w-10 flex items-center justify-center">4</div>
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>
           {/*  <!-- color end --> */}
            {/* <!-- add to cart button --> */}
            <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
              <Button varient="cart"> <i class="fa-solid fa-cart-plus fill-current text-slate-100"/> Add to Cart</Button>
              <Button varient="cart"><i class="far fa-heart fill-current text-slate-100"/> Wishlist</Button>
            </div>
            {/* <!-- add to cart button end --> */}
            {/* <!-- product share icons --> */}
            <div class="flex space-x-3 mt-4">
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            {/* <!-- product share icons end --> */}
        </div>
        {/* <!-- product content end --> */}
    </div>
    {/* <!-- product view end --> */}

   {/*  <!-- product details and review --> */}
    <div class="container pb-16">
        {/* <!-- detail buttons --> */}
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Product Details
        </h3>
       {/*  <!-- details button end --> */}

        {/* <!-- details content --> */}
        <div class="lg:w-4/5 xl:w-3/5 pt-6">
            <div class="space-y-3 text-gray-600">
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
    <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related products</h2>
        {/* <!-- product wrapper --> */}
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
           <Card image={bannerImg2}/>
           <Card image={bannerImg2}/>
           <Card image={bannerImg2}/>
           <Card image={bannerImg2}/>
        </div>
       {/*  <!-- product wrapper end --> */}
    </div>

    </div>
  )
}

export default Product;