import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { SidebarSelection } from "../../../Helper/Context";
import Reading from "../../../pages/Reading";

function DefaultLayout({children}) {
    const [loggedIn, setLoggedIn] = useState('practice');
    const [selectedComponent, setSelectedComponent] = useState(<Reading></Reading>)

    return (
        <SidebarSelection.Provider value={{selectedComponent, setSelectedComponent}}>
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
                        bg-[#F9F9F9] h-[auto] w-[70%] mt-[30px] mb-[30px]
                        flex justify-start
                    "    
                >
                    <Sidebar></Sidebar>
                    <div
                        className="
                            h-[auto] ml-[10px] rounded-[8px]
                            flex  justify-center items-center grow
                            bg-[#EEEE]
                        "
                    >
                        {children}
                    </div>
                </div>
            </div>
        </SidebarSelection.Provider> 
     );
}

export default DefaultLayout;