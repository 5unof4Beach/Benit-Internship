import Item from "./components/items";
import Logo from "./components/Logo";
import Button from "../../../Button";
import { LoginContext } from "../../../../Helper/Context";
import React from "react";

function Header() {
    const{loggedIn, setLogin} = React.useContext(LoginContext)

    return ( 
        <header
            className="
                wrapper 
                shadow-lg 
                h-[82px]
                w-[100%]
                bg-[#FECC65]
                text-2xl
                flex
                justify-center
                sticky
                top-0
                z-50
                "
        >
            <div
                className="
                    h-full
                    w-[70%]
                    bg-[#FECC65]
                    flex
                    justify-between
                    items-center
                "
            >
                <Logo
                    className="
                        w-[10%]
                    "
                >

                </Logo>
                <div
                    className="
                        action
                        flex
                        justify-between
                    "
                >
                    <Item title="item 1">item 1</Item>
                    <Item title="item 2">item 2</Item>
                    <Item title="item 3">item 3</Item>
                    <Item title="item 4" link='/news'>item 4</Item>
                    <Item title="item 7" link='/news'>item 4</Item>
                    {!loggedIn ? 
                        <Item title="Sign In" link='/signin'>Sign In</Item>:<Item title="Sign Out" link='/signout'>Sign Out</Item>
                    }
                </div>
            </div>
        </header>
     );
}

export default Header;