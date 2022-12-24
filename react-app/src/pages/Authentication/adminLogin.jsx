import React from 'react'
import Input from '../../components/input';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import {ToastContainer,toast} from 'react-toastify'


function AdminLogin() {
    const [users,setUsers]= useState([])
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const navigate= useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/admin")
          .then((response) => response.json())
          .then((json) => setUsers(json));
      }, []);

    function submit (e){
        e.preventDefault();

        let findUser= users.find((user) => {
            return (user.email===email && user.password===password)
             });

if (findUser===undefined){ // Find Method returns undefined if find condition is false.
  toast.error("Email or Password is incorrect",{autoClose:3000})
}
else{
   /* props.nameSetter(email); */
    toast.success("successfully Logined",{position:"top-center",autoClose:800, onClose: () => {
      navigate("/dashbord");
    }});
   

    const {id,firstname,lastname,gender,birthday,email} = findUser;

    localStorage.setItem("id", users[0].id);
    localStorage.setItem("firstname", users[0].firstname);
    localStorage.setItem("admin", users[0].admin);
  }
             
    }

  return (
    <div className="container py-16 mx-auto">
        {/* header start */}
    <div className="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden bg-gray-50">
        <h2 className="text-2xl uppercase font-medium mb-1">
            Admin LOGIN
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
            Enter details to Login
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

       
    </div>
    <ToastContainer/>
</div>
  )
}

export default AdminLogin;