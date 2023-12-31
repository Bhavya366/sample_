import React, { useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import useProductContext from "../../../hooks/useProductContext";

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useProductContext();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);          // setLoggedIn is a dependency of useEffect

  return (
    <div className="header">
      <span>912121131313</span>
      <span>Get 50% off on selected items | Shop Now</span>
      {loggedIn ? (
        <div>
          <Link className="header_login_links" onClick={()=>{
            localStorage.removeItem("token");
          setLoggedIn(false);}}>logout</Link>
        </div>
      ) : (
        <div>
          <Link className="header_login_links" to={'/login'}>login</Link>
          <span className="header_login_links"> &nbsp; &nbsp; | &nbsp;&nbsp; </span>
          <Link className="header_login_links" to={'/signup'}>SignUp</Link>
        </div>
      )}
    </div>
  );
};

export default Header;