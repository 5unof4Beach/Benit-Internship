import Item from "./components/items";

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
                <Item>items1</Item>
                <Item>items1</Item>
                <Item>items1</Item>
                <Item>items1</Item>
            </div>
        </header>
     );
}

export default Header;