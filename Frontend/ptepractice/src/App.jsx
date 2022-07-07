import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import { Gift } from "./pages/RandomGift";
import {
  ToDoList,
  TwoWayBinding,
  TwoWayBindingRadio,
  TwoWayBindingCheckBox,
  FirstUseEffect,
  RealtimeTitle,
} from "./pages/DOMEvents";

import { LoginContext } from "./Helper/Context";

import { DefaultLayout } from "./components/Layout";

import { privateRoutes, publicRoutes } from "./routes/index.js";

function App() {
  const [loggedIn, setLoggedIn ] = React.useState(false);

  return (
    <div className="app">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {/* <Router> */}
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              }

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
        {/* </Router> */}
      </LoginContext.Provider>
    </div>
  );
}

export { App };
