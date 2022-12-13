import Login from "./pages/login";
import Signup from './pages/signup'
import Navbar from "./components/navbar";
import EditProfile from "./pages/editProfile";
import Home from "./pages/home";
import Product from "./pages/product";
import ShoppingCart from "./pages/shoppingCart";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Mobilenav from "./components/mobilenav";

function App() {
  return (
    /*  */
    <div className="">
      <Header/>
      <Navbar/>
      <Home/>
      <Mobilenav/>
      <Footer/>
     
    </div>
  );
}

export default App;
