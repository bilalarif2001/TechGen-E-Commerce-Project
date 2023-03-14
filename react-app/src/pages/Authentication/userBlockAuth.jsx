import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'

function UserBlockAuth(props) {
  const navigate = useNavigate();
  const [users,setUsers]= useState([])
  const [isLogin, setisLogin] = useState(true);
  const username = localStorage.getItem("username");
  const userid=JSON.parse(localStorage.getItem('id'))
  const isblocked=JSON.parse(localStorage.getItem('status'))


  function fetchusers() {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  useEffect(() => {
    fetchusers();
  }, []);

  const filteredUser=users.filter((user)=>{
    return user.id
  })
  console.log(users)
 

  useEffect(() => {
    // Checking if Email exists in Local storage
    if (isblocked) {
        
        setisLogin(false);
      localStorage.clear();
      toast.error("You have been blocked by administrator",{position:"top-center",
      autoClose:1000,onClose:()=>{
        navigate("/login");
      }
    })

    } else {
        setisLogin(true);
        navigate('/home')
    }
  }, [username]);

  return (
  <div>
    {isLogin && props.children}
    <ToastContainer/>
  </div>

  );
}

export default UserBlockAuth;