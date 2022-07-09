import {
  DropdownMenu,
  DropdownItem,
} from "../../../DropdownMenu/DropdownMenu.js";
import SidebarButton from "./Component/SidebarButton/SidebarButton.js";
import { BoltIcon, DashboardIcon, ProfileIcon, ShopIcon, DeviceIcon } from "../../../../icons/Icons/Icons.js";

function Sidebar() {

  return (
    <div
      className="
                grow-[1] h-[80%] p-[10px] rounded-[10px]
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
          <DropdownItem leftIcon={<BoltIcon />} href='/reading'>Reading</DropdownItem>
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
