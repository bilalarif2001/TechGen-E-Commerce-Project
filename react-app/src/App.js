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

import { Routes,Route, BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Navbar/>

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    
      <Mobilenav/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
