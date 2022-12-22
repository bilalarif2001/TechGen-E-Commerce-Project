import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";
import EditProfile from "./pages/editProfile";
import Home from "./pages/home";
import Product from "./pages/product";
import ShoppingCart from "./pages/shoppingCart";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Mobilenav from "./components/mobilenav";
import Input from "./components/Input";
import AboutUs from "./pages/about_us";
import ContactUs from "./pages/contact_us";
import Shop from "./pages/shop";
import Dashbord from "./dashbord/main";
import User from "./dashbord/user";
import Products from "./dashbord/Products";
import FrontPage from "./dashbord/FrontPage";
import Order from "./dashbord/Order";
function App() {
  return (
    /*  */
    <div className="">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/dashbord" element={<Dashbord />}>
          <Route path="frontpage" element={<FrontPage />} />
          <Route path="user" element={<User />} />
          <Route path="product" element={<Products />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
