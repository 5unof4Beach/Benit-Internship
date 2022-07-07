import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div
            className="
                flex
                flex-col
                items-center
                bg-[#F9F9F9]
                w-[100%]
            "
        >
            <Header></Header>

            <div 
                className="
                    content
                    bg-[#F9F9F9]
                    h-[1000px]
                    w-[70%]
                    flex
                    justify-start
                "    
            >
                <Sidebar></Sidebar>
                <div>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;