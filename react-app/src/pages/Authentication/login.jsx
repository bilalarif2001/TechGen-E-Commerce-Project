import React from 'react'
import Input from '../../components/input';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import {ToastContainer,toast} from 'react-toastify'


function Login() {
    const [users,setUsers]= useState([])
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const navigate= useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/users")
          .then((response) => response.json())
          .then((json) => setUsers(json));
      }, []);

    function submit (e){
        e.preventDefault();

        let findUser= users.find((user) => {
            return (user.email===email.toLowerCase() && user.password===password)
             });

if (findUser===undefined){ // Find Method returns undefined if find condition is false.
  toast.error("Email or Password is incorrect, or account does not exist against this email.",{autoClose:3000})
}
else if (findUser.block)toast.error("Your Account has been Blocked by Administrator",{autoClose:3000})
else
{
   /* props.nameSetter(email); */
    toast.success("successfully Logined",{position:"top-center",autoClose:800, onClose: () => {
      navigate("/home");
    }});
   

    const {id,firstname,lastname,gender,birthday,email,block} = findUser;

    localStorage.setItem("id", id);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("status", block);
  }
             
    }

  return (
    <div className="container py-16 mx-auto mt-20 ">
        {/* header start */}
    <div className="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden bg-gray-50">
        <h2 className="text-2xl uppercase font-medium mb-1">
            LOGIN
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
            Login if you are a returning customer
        </p>
        {/* header end */}

        {/* Form Start */}
        <form type="submit" onSubmit={submit}>
            <div className="space-y-4">
                <div>
                    <label className="text-gray-600 mb-2 block">
                        Email Address <span className="text-rose-500">*</span>
                    </label>
                    <Input varient="login" placeholder="Enter your Email Address" type="email" onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="text-gray-600 mb-2 block">Password <span className="text-rose-500">*</span></label>
                    <Input varient="login" placeholder="Enter your Password" type="password" required onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="mt-16">
                <Button varient="card" onSubmit={submit}>Login</Button>
            </div>
        </form>
        {/* Form end */}

        <p className="mt-4 text-gray-600 text-center">
            Don't have an account? <Link className="text-primary hover:text-rose-500" to={"/signup"}>Register Now</Link>
        </p>
    </div>
    <ToastContainer/>
</div>
  )
}

export default Login;