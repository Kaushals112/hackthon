import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      
      <Logo />

     <NavLink to={"/logic"}><Note item="Translate" id="translate"   value={"trans"} name={"note"}/></NavLink>
     <NavLink to={"/logic"}><Note item="Copywritting" id="Copywritting" value={"copy"} name={"note"}/></NavLink>
    <NavLink to={"/logic"}><Note item="Q&A" id="Q" value={"chatbot"} name={"qn"}/></NavLink>
      
  <NavLink to={"/logic"}><Note item="Grammerly" id="Grammerly" value={"gram"} name={"note"}/></NavLink>
 <NavLink to={"/logic"}> <Note item="summary"id="summary" value={"summary"} name={"note"}/></NavLink>
    <NavLink to={"/logic"} >  <Note item="Product Description"id="Product" value={"product"} name={"note"}/></NavLink>
    
        
       <NavLink to={"/logic"}> <Note item="Chat Bot"id="Product" value={"chatbot"} name={"note"}/></NavLink>
        
        
       <NavLink to={"/logic"}> <Note item="Product Description"id="Product" value={"product"} name={"note"}/></NavLink>
      <Footer />
      

    </div>
  );
}

export default Home;
