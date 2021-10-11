import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import "./App.css";

export default function App() {
  return (
    <>
     <Router>
      <Home/>
      
     </Router>
   
       
    </>
  );
}