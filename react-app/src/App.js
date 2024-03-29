import Login from "./pages/Authentication/login";
import AdminLogin from "./pages/Authentication/adminLogin";
import Signup from "./pages/Authentication/signup";
import Home from "./pages/home";
import Product from "./pages/Shop/product";
import ShoppingCart from "./pages/Cart/shoppingCartMain";
import CartBilling from "./pages/Cart/cartbilling";
import Shop from "./pages/Shop/shop";
import OrderPlaced from "./pages/Cart/orderplaced";
import Error from "./pages/errors/error 404";
import ServerDown from "./pages/errors/serverdown";
import MyOrders from "./pages/myorders";
import ContactUs from "./pages/contact";
import AboutUs from "./pages/about";
import Auth from "./pages/Authentication/auth";
import FileUpload from "./fileupload";
import CartContext from "./context/cartcontext";

/* Admin Imports */

import Dashbord from "./dashbord/main";
import User from "./dashbord/user";
import Products from "./dashbord/Products";
import FrontPage from "./dashbord/FrontPage";
import Order from "./dashbord/Order";


import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    fetch("http://localhost:5000/products/viewproducts")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <CartContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          {/* Using conditional component rendering to avoid empty array generated by useEffect */}
          {products.length > 0 ?
            <Route path="/product/:name" element={<Product products={products}/>}/>:<Route path="/product/:name" element={<ServerDown/>}></Route>}
         {products.length > 0?<Route path="/shop" element={<Shop products={products} />} />:<Route path="/shop" element={<ServerDown/>}></Route>}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/cart" element={<ShoppingCart/>}></Route>
          <Route path="/billing" element={<CartBilling />} />
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/orderplaced" element={<OrderPlaced/>}></Route>
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Error/>}></Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/fileupload" element={<FileUpload />} />

          {/* Admin Routes  */}

          <Route path="/dashbord" element={<Dashbord />}>
          <Route path="frontpage" element={<FrontPage />} />
          <Route path="user" element={<User />} />
          <Route path="product" element={<Products />} />
          <Route path="order" element={<Order />} />
        </Route>

        </Routes>
         </CartContext>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
