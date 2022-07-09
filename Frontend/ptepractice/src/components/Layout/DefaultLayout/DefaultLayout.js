import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div
            className="
                bg-[#F9F9F9] w-[100%]
                flex flex-col items-center
            "
        >
            <Header></Header>

            <div 
                className="
                    content
                    bg-[#F9F9F9] h-[auto] w-[70%] mt-[30px]
                    flex justify-start
                "    
            >
                <Sidebar></Sidebar>
                <div
                    className="
                        h-[auto] ml-[10px] rounded-[8px]
                        flex  justify-center items-center w-[70%] min-w-[650px]
                        bg-[#EEEE]
                    "
                >
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;