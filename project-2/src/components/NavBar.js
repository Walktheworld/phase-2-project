import React from "react";
import { NavLink} from 'react-router-dom';

const style = {
  width: '50px',
  padding: '12px',
  margin: '0 6px 6px',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="home" to="/" style= {style}>Home</NavLink>  
      <NavLink className="viewBrew" to="/viewBrew" style= {style}>View Brew</NavLink>
      <NavLink className= "brewList" to="/brewList" style= {style}>To Brew or Not To Brew</NavLink>
    </div>
  );
};

export default NavBar;