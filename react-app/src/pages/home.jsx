import React from "react";
import bannerImg1 from "../assets/AsusBanner.webp";
import bannerImg2 from "../assets/BannerImage2.jpg";
import IntelBanner from "../assets/IntelBanner.webp";
import Carousel from "nuka-carousel/lib/carousel";
import Button from "../components/button";
import Card from "../components/card";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate= useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
    console.log(products);
  }, []);

  /* style={{ backgroundImage: `url(${img})`}} */
  return (
    <div className="container mx-auto">
      {/* Banner Start */}
      <div className=" w-full m-2 relative bg-cover bg-no-repeat bg-center">
        <Carousel style={{ borderRadius: "10px" }}>
          <img src={bannerImg1} />
          <img src={bannerImg2} />
          <img src="/image3.png" />
          <img src="/image4.png" />
          <img src="/image5.png" />
        </Carousel>
      </div>
      {/* Banner End */}

      <div className="container py-16 m-5">
        {/* Feature Start */}

        <div className="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center ">
          {/* First feature*/}
          <div className="border-primary border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 shadow-md hover:shadow-xl transition hover:text-rose-500">
            <i className="fas fa-truck fa-2x fill-current text-slate-500"></i>
            <div>
              <h4 className="font-medium capitalize text-lg">free shipping</h4>
              <p className="text-gray-500 text-xs lg:text-sm">
                Order over $200
              </p>
            </div>
          </div>
          {/*First feature end */}
          {/*Second feature*/}
          <div className="border-primary border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 shadow-md hover:shadow-xl transition hover:text-rose-500">
            <i className="fas fa-money-bill fa-2x fill-current text-slate-500"></i>
            <div>
              <h4 className="font-medium capitalize text-lg">Money returns</h4>
              <p className="text-gray-500 text-xs lg:text-sm">
                30 Days money return
              </p>
            </div>
          </div>
          {/* Second feature end */}
          {/* Third feature */}
          <div className="border-primary border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 shadow-md hover:shadow-xl transition hover:text-rose-500">
            <i className="fas fa-clock-rotate-left fa-2x fill-current text-slate-500"></i>
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-xs lg:text-sm">
                Customer support
              </p>
            </div>
          </div>
          {/*Third feature end */}
        </div>
        {/* Features End */}
      </div>

      {/* <!-- categories --> */}
      <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
          {/* <!-- single category --> */}
          <div className="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Bedroom
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div className="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Sofa
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div className="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Office
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div className="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Outdoor
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div className="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              Mattress
            </a>
          </div>
          {/* <!-- single category end --> */}
          {/* <!-- single category --> */}
          <div className="relative group rounded-sm overflow-hidden">
            <img src={bannerImg2} className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
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
      <div className="container pb-16 mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          FEATURED ITEMS
        </h2>
        {/* Display card if product exists otherwise display heading */}
        {products.length>0? <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
           {products.map((item) => (
            <Card key={item.id} image={bannerImg2} price={item.price} name={item.name} description={item.description} onClick={()=> navigate(`/product/${item.name}`)} />
          ))}
        </div>:
        <h1 className="text-3xl text-center text-gray-500">No Products to Display</h1>
        }
      </div>
      {/* Featured Items End */}

      <div className="container mb-16">
        <img src={IntelBanner} />
      </div>

      {/* Recommeded Items Start*/}
      <div className="container pb-16 mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          Recommended for you
        </h2>
        {/* Display card if product exists otherwise display heading */}
        {products.length>0? <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
           {products.map((item) => (
            <Card key={item.id} image={bannerImg2} price={item.price} name={item.name} description={item.description} />
          ))}
        </div>:
        <h1 className="text-3xl text-center text-gray-500">No Products to Display</h1>
        }
      </div>
      {/* Recommended Items End */}
    </div>
  );
}

export default Home;
