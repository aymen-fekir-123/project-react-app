
import Nav from "./componets/nav";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./componets/page/home";
import SignUp from "./componets/page/sign-up";
import Product from "./componets/page/product";
import Service from "./componets/page/service";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element= { <Home />}/>
          <Route path="/sign-up"  element= { <SignUp />}/>
          <Route path="/service" element= { <Service />}/>
          <Route path="/product"  element= { <Product />}/>
        </Routes>
      </Router>  
    

    </>
    
  );
}

export default App;
