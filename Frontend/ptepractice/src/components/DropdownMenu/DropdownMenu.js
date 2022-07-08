import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import SidebarButton from "../Layout/DefaultLayout/Sidebar/Component/SidebarButton";
import { ReactComponent as Practice} from "../../icons/practice.svg"
import { ReactComponent as Arrow} from "../../icons/downArrow.svg"

function DropdownMenu(props) {
  const [selected, setSelected] = useState(true);
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    let firstChild = dropdownRef.current.firstChild
    console.log(firstChild)
    let height = firstChild.offsetHeight 
    setMenuHeight(height);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight 
    setMenuHeight(height );
  }

  return (
    <div
      style={{ height: menuHeight }}
      ref={dropdownRef}
      className="
            dropdown
            relative
            w-[100%]
            bg-transparent
            rounded-[8px]
            overflow-hidden
            transition-opacity
        "
    >
      <CSSTransition
        in={selected}
        timeout={500}
        classNames="menu-primary"
        onEnter={(el) => calcHeight(el)}
      >
        <div className="menu" onClick={() => setSelected(!selected)}>
          <SidebarButton leftIcon={<Practice />} rightIcon={<Arrow/>}>Practice</SidebarButton>
        </div>
      </CSSTransition>

      <CSSTransition
        in={!selected}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">{props.children}</div>
      </CSSTransition>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <a href="#" className="menu-item justify-end items-center">
      <span className="
        icon-button
        w-[70%]
        ">
        {props.leftIcon}
        {props.children}
      </span>
      
    </a>
  );
}


export { DropdownMenu, DropdownItem };
