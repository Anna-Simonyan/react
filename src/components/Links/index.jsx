import React from "react";
import { NavLink } from "react-router-dom"

const Links =()=> {
   
    return (
      <nav  style={{display:'flex',flexDirection:'column'}}>
        <NavLink    exact='true' to = '/products'> ALL PRODUCTS</NavLink>
        <NavLink    exact='true'  to = '/home'> Home </NavLink>
        <NavLink    exact='true' to = '/catalog'>  </NavLink>
        <NavLink    exact='true' to = '/varietySalads'>  </NavLink>
         
      </nav>
    );
  }
  
  export default Links ;