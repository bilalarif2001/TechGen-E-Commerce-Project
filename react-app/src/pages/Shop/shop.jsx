import React from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Mobilenav from "../../components/mobilenav";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Input from "../../components/input";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {globalSearch} from "../../context/cartcontext";

function Shop(props) {
  const {search} = useContext(globalSearch)
  const products = props.products;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const price = products.map((product) => {
    return product.price;
  }); // For Math.Max to get maximium price
  const Maxprice = Math.max(...price); // Returns maximium value from array
  const [minValue, setMinValue] = useState(0);
  const [MaxValue, setMaxValue] = useState(Maxprice);
  const navigate = useNavigate();

  const filterationbyPrice = products.filter((product) => {
    return product.price > minValue && product.price <= MaxValue;
  });

console.log(filterationbyPrice)
let filterationByCategory=filterationbyPrice.filter(product=>{
  return selectedCategories.find(category=>{
    return category==product.category
  })
})

console.log(filterationByCategory)

const filterationbySearch = products.filter((product) => {
  return product.name.toLowerCase().includes(search.toLowerCase());
}); 
console.log(filterationbySearch)
 /* const filterationByCategory = selectedCategories.map((filteredCategory) => {
    //  filteredCategory Type e.g Monitor etc
    // console.log(`This is from Filtered Category -> ${filteredCategory}`)
    const data = filterationbyPrice.filter((product) => {
      // Filters out the data where the specific category is included , if more than 1 category is found , array of Object(s) is returned
      return product.category.includes(filteredCategory);
    });
    return data; // Return the filtered data from the Filter function out from the map function
  }); */
  /* const mapfilter= filterationByCategory.map(filter=>{
    filter.map(item=>{
        console.log([item])
    })
})
 */
console.log(search)
  // products.filter(product=>{
  //     return product.category.includes("monitor")})

  function handleCategories(e) {
    const { value, checked } = e.target;
    if (checked) setSelectedCategories([...selectedCategories, value]);
    else
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );

  
      console.log(selectedCategories)
  }
  return (
    <div>
      <Header />
      <Navbar />
      {/* <!-- breadcrumb --> */}
      <div className="container mx-auto py-4 flex justify-between">
        <div className="flex gap-3 items-center">
          <Link className="text-primary text-base" to={"/home"}>
            <i className="fas fa-home"></i>
          </Link>
          <span className="text-sm text-gray-400">
            <i className="fas fa-chevron-right"></i>
          </span>
          <Link className="text-gray-600 font-medium" to={"/shop"}>
            SHOP
          </Link>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      <div className="container mx-auto grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        {/* <!-- sidebar --> */}
        <div className="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
          <div className="divide-gray-200 divide-y space-y-5 relative">
            {/*  <!-- category filter --> */}
            <div className="relative">
              <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
                <i className="fas fa-times"></i>
              </div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={"Monitors"}
                    onChange={handleCategories}
                    id="Bedroom"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label className="text-gray-600 ml-3 cursor-pointer">
                    Monitors
                  </label>
                </div>
                {/*  <!-- single category end --> */}
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={"Graphic Cards"}
                    onChange={handleCategories}
                    id="Bedroom"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label className="text-gray-600 ml-3 cursor-pointer">
                    Graphic Cards
                  </label>
                </div>
                {/*  <!-- single category end --> */}
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={"Motherboards"}
                    onChange={handleCategories}
                    id="Bedroom"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label className="text-gray-600 ml-3 cursor-pointer">
                    Motherboards
                  </label>
                </div>
                {/*  <!-- single category end --> */}
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={"Monitors"}
                    onChange={handleCategories}
                    id="Bedroom"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label className="text-gray-600 ml-3 cursor-pointer">
                    Monitors
                  </label>
                </div>
                {/*  <!-- single category end --> */}
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={"Processors"}
                    onChange={handleCategories}
                    id="Bedroom"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label className="text-gray-600 ml-3 cursor-pointer">
                    Processors
                  </label>
                </div>
                {/*  <!-- single category end --> */}
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={"Periphrals"}
                    onChange={handleCategories}
                    id="Bedroom"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label className="text-gray-600 ml-3 cursor-pointer">
                    Periphrals
                  </label>
                </div>
                {/*  <!-- single category end --> */}
              </div>
            </div>
            {/* <!-- category filter end --> */}
            {/*  <!-- price filter --> */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <Input
                  varient="login"
                  type="number"
                  placeholder="min"
                  onChange={(e) => {
                    setMinValue(e.target.value);
                  }}
                />
                <span className="mx-3 text-gray-500">-</span>
                <Input
                  varient="login"
                  type="number"
                  placeholder="max"
                  onChange={(e) => {
                    e.target.value
                      ? setMaxValue(e.target.value)
                      : setMaxValue(Maxprice);
                  }}
                />
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
            <button className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none">
              Filter
            </button>
          </div>
          {/* <!-- sorting end --> */}
          {/* <!-- product wrapper --> */}
          {products.length > 0 ? (
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
              {search.length>0?
              (filterationbySearch.map((item) => (
                    <Card
                      key={item.id}
                      image={item.img1}
                      price={item.price}
                      name={item.name}
                      description={item.description}
                      onClick={() => navigate(`/product/${item.name}`)}
                    />
                  ))):(filterationByCategory.length > 0
                ? filterationByCategory.map((item) => (
                    <Card
                      key={item.id}
                      image={item.img1}
                      price={item.price}
                      name={item.name}
                      description={item.description}
                      onClick={() => navigate(`/product/${item.name}`)}
                    />
                  ))
                : products.map((item) => (
                    <Card
                      key={item.id}
                      image={item.img1}
                      price={item.price}
                      name={item.name}
                      description={item.description}
                      onClick={() => navigate(`/product/${item.name}`)}
                    />
                  )))}
            </div>
          ) : (
            <h1 className="text-3xl text-center text-gray-500">
              No Products to Display
            </h1>
          )}
          {/*  <!-- product wrapper end --> */}
        </div>
        {/* <!-- products end --> */}
      </div>
      <Mobilenav />
      <Footer />
    </div>
  );
}

export default Shop;
