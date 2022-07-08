import { Link } from "react-router-dom";

function SidebarButton(props) {
    return (
        <Link to="#" className="menu-item items-center p-[10px]">
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </Link>
      );
}

export default SidebarButton;