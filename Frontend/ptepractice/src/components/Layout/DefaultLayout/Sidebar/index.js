import {
  DropdownMenu,
  DropdownItem,
} from "../../../DropdownMenu/DropdownMenu.js";
import SidebarButton from "./Component/SidebarButton/index.js";
import { useState } from "react";
import { ReactComponent as BoltIcon } from "../../../../icons/bolt.svg";
import { ReactComponent as DashboardIcon } from "../../../../icons/dashboard.svg";
import { ReactComponent as ProfileIcon } from "../../../../icons/myProfile.svg";
import { ReactComponent as MockTestIcon } from "../../../../icons/mockTest.svg";
import { ReactComponent as ShopIcon } from "../../../../icons/magicShop.svg";
import { ReactComponent as DeviceIcon } from "../../../../icons/deviceTest.svg";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
                w-[256px] h-[80%] p-[10px] mt-[30px] rounded-[10px]
                flex flex-col items-center
                bg-[#EEEE]
            "
    >

      <SidebarButton leftIcon={<DashboardIcon />}>Dashboard</SidebarButton>
      <SidebarButton leftIcon={<ProfileIcon />}>My Profile</SidebarButton>

        <DropdownMenu
        >
          <DropdownItem leftIcon={<BoltIcon />}>Speaking</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Writing</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Reading</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Listening</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </DropdownMenu>

      {/* <SidebarButton leftIcon={<MockTestIcon />}>Mock Test</SidebarButton> */}
      <SidebarButton leftIcon={<ShopIcon />}>Magic Shop</SidebarButton>
      <SidebarButton leftIcon={<DeviceIcon />}>Device Test</SidebarButton>
    </div>
  );
}

export default Sidebar;
