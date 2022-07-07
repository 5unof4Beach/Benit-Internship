import DropdownMenu from "../../../DropdownMenu/DropdownMenu.js";
import Item from "../../components/Header/components/items/index.js";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Button from "../../../Button/index.js";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
                w-[256px]
                h-[900px]
                flex
                flex-col
                items-center
                bg-[#EEEE]
                mt-[30px]
                rounded-[10px]
            "
    >
      <p>this is side bar</p>
      <div
        className="
                        w-[100%]
                        border-[2px]
                        m-[5px]
                        flex
                        flex-col
                        items-center
                        text-black
                        relative
                    "
      >
          <DropdownMenu></DropdownMenu>
      </div>
      <Item
        title="Item 2"
        className="
                    w-[100%]
                    border-[2px]
                    border-black
                    text-black
                    m-[5px]
                    flex
                    justify-center
                "
      >
        Item 1
      </Item>
    </div>
  );
}

export default Sidebar;
