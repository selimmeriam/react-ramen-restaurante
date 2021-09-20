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
   
     {/* <h1>Hello </h1>
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/" exact component= {Home} />
          </Switch>
       </Router>*/}
       
    </>
  );
}