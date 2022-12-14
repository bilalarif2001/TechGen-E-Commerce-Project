import React from "react";
import { useState} from "react";
import Input from "../components/input";
import Button from "../components/button";

function Signup() {
const [gender,setGender]= useState("")

//Function for selecting radio button gender.
function handleGender(e) {
    setGender(e.target.value)
    console.log(gender)
}

  return (
    <div class="container py-16 mx-auto">
      <div class="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Sign-Up</h2>
        <p class="text-gray-600 mb-6 text-sm">
          Please fill the form for registeration.
        </p>
        <form action="">
          <div class="flex flex-wrap -mx-3 mb-6">
            {/* First Name start */}
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 pb-3">
              <label class="text-gray-600 mb-2 block">
                First Name <span class="text-rose-500">*</span>
              </label>

              <Input varient="login" placeholder="Enter your First Name" />
            </div>
             {/* First Name End */}

              {/* Last Name start */}
            <div class="w-full md:w-1/2 px-3 pb-3">
              <label class="text-gray-600 mb-2 block">
                Last Name <span class="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Last Name" />
            </div>
             {/* Last Name End */}

             {/* Birthday Start */}
             <div class="w-full md:w-1/2 px-3 pb-3">
              <label class="text-gray-600 mb-2 block">
                Birthday <span class="text-rose-500">*</span>
              </label>
              <Input varient="login" type="date" placeholder="Enter your Last Name" />
            </div>
            {/* Birthday End */}

            {/* Gender STart */}
            <div class="w-full md:w-1/2 px-3 pb-3">
              <label class="text-gray-600 mb-2 block pb-3">
                Gender <span class="text-rose-500">*</span>
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

            {/* Password Start */}
            <div class="w-full md:w-2/2 px-3 pb-3">
              <label class="text-gray-600 mb-2 block">
                Password <span class="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Last Name" />
            </div>
            {/* Password End */}
            {/* Confirm Password Start */}
            <div class="w-full md:w-2/2 px-3 pb-3">
              <label class="text-gray-600 mb-2 block">
                Confirm Password <span class="text-rose-500">*</span>
              </label>
              <Input varient="login" placeholder="Enter your Last Name" />
            </div>
            {/* Confirm Password End */}
            
          </div>

          <div class="mt-16">
            <Button varient="card">SignUp</Button>
          </div>
        </form>

        <p class="mt-4 text-gray-600 text-center">
          Don't have an account?
          <a href="register.html" class="text-primary pl-1 hover:text-rose-500">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
