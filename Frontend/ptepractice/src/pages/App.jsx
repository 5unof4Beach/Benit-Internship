import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Gift } from "./RandomGift";
import {
  ToDoList,
  TwoWayBinding,
  TwoWayBindingRadio,
  TwoWayBindingCheckBox,
  FirstUseEffect,
  RealtimeTitle
} from "./DOMEvents";

import {privateRoutes, publicRoutes} from '../routes/index.js'

function NavBar(){

  return(
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page/>}/>
        })}

      </Routes>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* <TwoWayBinding></TwoWayBinding> */}
      {/* <TwoWayBindingRadio></TwoWayBindingRadio> */}
      {/* <TwoWayBindingCheckBox></TwoWayBindingCheckBox> */}
      {/* <Counter></Counter> */}
      {/* <ToDoList></ToDoList> */}
      {/* <FirstUseEffect></FirstUseEffect> */}
      {/* <RealtimeTitle></RealtimeTitle> */}
      <NavBar></NavBar>
    </div>
  );
}

export { App };
