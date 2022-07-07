import {
  DropdownMenu,
  DropdownItem,
} from "../../../DropdownMenu/DropdownMenu.js";
import Item from "../../components/Header/components/items/index.js";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Button from "../../../Button/index.js";
import { ReactComponent as CogIcon } from "../../../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../../../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../../../icons/bolt.svg";

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
      <Item
        title="Item 1"
      >
        Item 1
      </Item>
      <div
        className="
                        w-[100%]
                        m-[5px]
                        flex
                        flex-col
                        items-center
                        text-black
                        relative
                    "
      >
        <DropdownMenu
          parentNode={
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings"
            >
              Practice
            </DropdownItem>
          }
        >
          <DropdownItem leftIcon={<BoltIcon />}>Speaking</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Writing</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Reading</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Listening</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </DropdownMenu>
      </div>
      <Item
        title="Item 2"
      >
        Item 1
      </Item>
    </div>
  );
}

export default Sidebar;
