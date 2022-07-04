import Item from "./components/items";
import Logo from "./components/Logo";

function Header() {
    return ( 
        <header
            className="
                wrapper 
                shadow-lg 
                h-[82px]
                w-[100%]
                bg-[#FFFFFF]
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
                    bg-[#EEEE]
                    flex
                    justify-around
                    items-center
                "
            >
                <Logo></Logo>
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
                <Item>item 4</Item>
            </div>
        </header>
     );
}

export default Header;