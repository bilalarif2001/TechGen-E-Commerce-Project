import React from "react";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'


function Signup() {
  const [users,setUsers]= useState([])
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("")
  const [Birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("")
  const[response,setResponse]= useState(false) // for maing useEffect run once per button click

const navigate= useNavigate();


useEffect(() => {
  fetch("http://localhost:5000/users")
    .then((response) => response.json())
    .then((json) => setUsers(json));
}, [response]);

//Function for selecting radio button gender.
function handleGender(e) {
    setGender(e.target.value)
    console.log(gender) 
}

function submit(e) {
  // Returning object if user email already exists.
  let existEmail= users.find((user) => {
    return (user.email===email)
     }); 
  setResponse(true)
  e.preventDefault();
  
       if ( firstName.length>0 ) if(firstName[0].toUpperCase()!==firstName[0]) toast.error("First Name must start with capital letter",{autoClose:3000});
  else if ( lastName.length>0 ) if(lastName[0].toUpperCase()!==lastName[0]) toast.error("Last Name must start with capital letter",{autoClose:3000});
  else if ( gender==="" ) toast.error("Please Select Gender",{autoClose:3000})
  else if ( password !==confirmPassword ) toast.error("Your Password does not match",{autoClose:3000});
  else if ( existEmail !==undefined ) toast.error("Account already registered on this email",{autoClose:3000});
   else {
    const user = {
      firstname: firstName,
      lastname:lastName,
      gender: gender,
      birthday: Birthday,
      email: email.toLowerCase(),
      password: password,
      block:false
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Registration Done, Please Login",{autoClose:3000, onClose:()=>{navigate("/login")}});
      }
    });
  }
}

  return (
    <div className="container py-16 mx-auto">
      <div className="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden bg-gray-50">
        <h2 className="text-2xl uppercase font-medium mb-1">Sign-Up</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please fill the form for registeration.
        </p>
        <form type="submit" onSubmit={submit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* First Name start */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pb-3">
              <label className="text-gray-600 mb-2 block">
                First Name <span className="text-rose-500">*</span>
              </label>

              <Input varient="login" placeholder="Enter your First Name" minLength={3} maxLength={10} type="text" onChange={(e) => setFirstname(e.target.value)} />
            </div>
             {/* First Name End */}

              {/* Last Name start */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Last Name" minLength={3} maxLength={10} type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
             {/* Last Name End */}

             {/* Birthday Start */}
             <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Birthday <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" type="date" onChange={(e) => setBirthday(e.target.value)}/>
            </div>
            {/* Birthday End */}

            {/* Gender STart */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block pb-3">
                Gender <span className="text-rose-500">*</span>
              </label>
              <span>
              <input type="radio" value={"Male"}
              checked={gender === "Male"}
              onChange={handleGender}/>
              &nbsp; Male &nbsp; &nbsp; &nbsp;
              </span>
              <span>
              <input type="radio" value={"Female"}
              checked={gender === "Female"}
              onChange={handleGender}/>
              &nbsp; Female
              </span>
            </div>
            {/* Gender End */}
            {/* Email Start */}
            <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Email <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* Email End */}
            {/* Password Start */}
            <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Password <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter Password" type="password" minLength={5} maxLength={12} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* Password End */}
            {/* Confirm Password Start */}
            <div className="w-full md:w-2/2 px-3 pb-3">
              <label className="text-gray-600 mb-2 block">
                Confirm Password <span className="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Re-Enter Password" type="password" minLength={5} maxLength={12} onChange={(e) => setConfirmpassword(e.target.value)} />
            </div>
            {/* Confirm Password End */}
            
          </div>

          <div className="mt-16">
            <Button type="submit" varient="card" onSubmit={submit}>SignUp</Button>
          </div>
        </form>

        <p className="mt-4 text-gray-600 text-center">
          Already have an account?
          <Link className="text-primary pl-1 hover:text-rose-500" to={"/login"}>Login</Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Signup;
