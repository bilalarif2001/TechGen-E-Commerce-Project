import Login from "./pages/login";
import Signup from './pages/signup'
import Navbar from "./components/navbar";
import EditProfile from "./pages/editProfile";
import Home from "./pages/home";
import Product from "./pages/product";
import ShoppingCart from "./pages/shoppingCart";
import Header from "./components/header";
import Footer from "./components/footer";
import Mobilenav from "./components/mobilenav";
import Shop from "./pages/shop";
import {useState,useEffect} from 'react'

import { Routes,Route, BrowserRouter  } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  function fetchProducts(){
    fetch("http://localhost:5000/products")
  .then((response) => response.json())
  .then((json) =>  setProducts(json));
}

useEffect( () => {
   fetchProducts();
}, []);
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Navbar/>

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<Home />}/>
        {products.length>0 &&<Route path="/product/:name" element={<Product products={products} />}/>}
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<ShoppingCart />}></Route>
        <Route path="*" element={<Home />}></Route>
        
      </Routes>
    
      <Mobilenav/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
