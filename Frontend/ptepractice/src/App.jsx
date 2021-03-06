import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import { LoginContext } from "./Helper/Context";

import DefaultLayout from "./components/Layout/DefaultLayout";

import { privateRoutes, publicRoutes } from "./routes/index.js";

import Auth from "./components/Auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") ?? false
  );

  return (
    <div className="app">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
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
        <Routes>
          {privateRoutes.map((route, index) => {
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
                    <Auth>
                      <Page />
                    </Auth>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export { App };
