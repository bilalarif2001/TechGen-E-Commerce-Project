import React from "react";
import bannerImg1 from "../assets/AsusBanner.webp";
import bannerImg2 from "../assets/BannerImage2.jpg";
import IntelBanner from "../assets/IntelBanner.webp";
import Carousel from "nuka-carousel/lib/carousel";
import Button from "../components/button";

function Home() {
  /* style={{ backgroundImage: `url(${img})`}} */
  return (
    <div class="container mx-auto">
      {/* Banner Start */}
      <div class=" container mx-auto m-2 relative bg-cover bg-no-repeat bg-center">
        <Carousel style={{ borderRadius: "10px" }}>
          <img src={bannerImg1} />
          <img src={bannerImg2} />
          <img src="/image3.png" />
          <img src="/image4.png" />
          <img src="/image5.png" />
        </Carousel>
      </div>
      {/* Banner End */}

      <div class="container py-16 m-5">
        {/* Feature Start */}

        <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
          {/* First feature*/}
          <div class="border-primary border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 shadow-md hover:shadow-xl">
            <i class="fas fa-truck fa-2x fill-current text-slate-500"></i>
            <div>
              <h4 class="font-medium capitalize text-lg">free shipping</h4>
              <p class="text-gray-500 text-xs lg:text-sm">Order over $200</p>
            </div>
          </div>
          {/*First feature end */}
          {/*Second feature*/}
          <div class="border-primary border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 shadow-md hover:shadow-xl">
            <i class="fas fa-money-bill fa-2x fill-current text-slate-500"></i>
            <div>
              <h4 class="font-medium capitalize text-lg">Money returns</h4>
              <p class="text-gray-500 text-xs lg:text-sm">
                30 Days money return
              </p>
            </div>
          </div>
          {/* Second feature end */}
          {/* Third feature */}
          <div class="border-primary border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 shadow-md hover:shadow-xl">
            <i class="fas fa-clock-rotate-left fa-2x fill-current text-slate-500"></i>
            <div>
              <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
              <p class="text-gray-500 text-xs lg:text-sm">Customer support</p>
            </div>
          </div>
          {/*Third feature end */}
        </div>
        {/* Features End */}
      </div>

      {/* <!-- categories --> */}
      <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
          {/* <!-- single category --> */}
          <div class="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Bedroom
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div class="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Sofa
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div class="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Office
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div class="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Outdoor
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div class="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Mattress
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div class="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                        font-roboto font-medium tracking-wide transition"
            >
              Dinings
            </a>
          </div>
          {/* <!-- single category end --> */}
        </div>
      </div>
      {/* <!-- categories end --> */}

      {/* Featured Items */}
      <div class="container pb-16 mx-auto">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          FEATURED ITEMS
        </h2>
        {/* <!-- product wrapper --> */}
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* <!-- single product --> */}
          <div class="group rounded-md bg-white shadow overflow-hidden">
            {/* <!-- product image --> */}
            <div class="relative">
              <img src={bannerImg2} />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="view.html"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end --> */}
            {/* <!-- product content --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="view.html">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-roboto font-semibold">
                  $45.00
                </p>
                <p class="text-sm text-gray-400 font-roboto line-through">
                  $55.00
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            {/* <!-- product content end --> */}
            {/* <!-- product button --> */}
            <Button varient="card">Add to Cart</Button>
            {/*  <!-- product button end --> */}
          </div>

          {/*  <!-- single product end --> */}
        </div>

        {/* <!-- product wrapper end --> */}
      </div>
      {/* Featured Items End */}

      <div class="container mb-16">
        <img src={IntelBanner} />
      </div>

      {/* Featured Items */}
      <div class="container pb-16 mx-auto">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          Recommended For You
        </h2>
        {/* <!-- product wrapper --> */}
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* <!-- single product --> */}
          <div class="group rounded-md bg-white shadow overflow-hidden">
            {/* <!-- product image --> */}
            <div class="relative">
              <img src={bannerImg2} />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="view.html"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* <!-- product image end --> */}
            {/* <!-- product content --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="view.html">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-roboto font-semibold">
                  $45.00
                </p>
                <p class="text-sm text-gray-400 font-roboto line-through">
                  $55.00
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            {/* <!-- product content end --> */}
            {/* <!-- product button --> */}
            <Button varient="card">Add to Cart</Button>
            {/*  <!-- product button end --> */}
          </div>

          {/*  <!-- single product end --> */}
        </div>

        {/* <!-- product wrapper end --> */}
      </div>
      {/* Featured Items End */}
    </div>
  );
}

export default Home;
