import {
  DropdownMenu,
  DropdownItem,
} from "../../../DropdownMenu/DropdownMenu.js";
import SidebarButton from "./Component/SidebarButton/index.js";
import Item from "../../components/Header/components/items/index.js";
import { useState } from "react";
import { ReactComponent as BoltIcon } from "../../../../icons/bolt.svg";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
                w-[256px]
                h-[900px]
                p-[10px]
                flex
                flex-col
                items-center
                bg-[#EEEE]
                mt-[30px]
                rounded-[10px]
            "
    >

      <SidebarButton leftIcon={<BoltIcon />}>Dashboard</SidebarButton>
      <SidebarButton leftIcon={<BoltIcon />}>My Profile</SidebarButton>

        <DropdownMenu
        >
          <DropdownItem leftIcon={<BoltIcon />}>Speaking</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Writing</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Reading</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Listening</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </DropdownMenu>

      <SidebarButton leftIcon={<BoltIcon />}>Dashboard</SidebarButton>
      <SidebarButton leftIcon={<BoltIcon />}>My Profile</SidebarButton>
    </div>
  );
}

export default Sidebar;
