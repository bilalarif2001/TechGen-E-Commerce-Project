import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(true);
  const username = localStorage.getItem("username");

  const isAdmin=JSON.parse(localStorage.getItem('admin'))


  useEffect(() => {
    // Checking if Email exists in Local storage
    if (isAdmin) {
      setisLogin(true);
      navigate('/dashbord')
    } else {
      setisLogin(false);
      
       navigate('/home')
    }
  }, [username]);

  return (
  <div>
    {isLogin && props.children}
  </div>
  );
}

export default Auth;