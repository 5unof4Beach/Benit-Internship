import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Gift } from "./pages/RandomGift";
import {
  ToDoList,
  TwoWayBinding,
  TwoWayBindingRadio,
  TwoWayBindingCheckBox,
  FirstUseEffect,
  RealtimeTitle,
} from "./pages/DOMEvents";

import { DefaultLayout } from "./components/Layout";

import { privateRoutes, publicRoutes } from "./routes/index.js";

function NavBar() {
  return (
    <div className="app">
      {/* <nav>
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
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout
          
          if(route.layout){
            Layout = route.layout
            console.log(`${route.path} has layout`)
            console.log(Layout)
          }
          {/* else if(route.layout === undefined){
            Layout = React.Fragment
          } */}

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export { App };
