
import React from "react";
import { NavBar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

const Layout = ({ children }) => {
    return (
      <>
         <NavBar/>
            <main>{children}</main>
            <Footer/>
      
      </>
    );
  };
    
  export default Layout;