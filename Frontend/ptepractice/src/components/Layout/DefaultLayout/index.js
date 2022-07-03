import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div>{children}</div>
        </div>
     );
}

export default DefaultLayout;