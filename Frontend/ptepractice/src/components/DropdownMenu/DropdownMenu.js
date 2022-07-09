import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Arrow, ArrowRev, Practice } from "../../icons/Icons/Icons";

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
            dropdown relative
            w-[100%] rounded-[8px]
            bg-transparent overflow-hidden transition-opacity
        "
    >
      <CSSTransition
        in={selected}
        timeout={500}
        classNames="menu-primary"
        onEnter={(el) => calcHeight(el)}
      >
        <div className="menu" onClick={() => setSelected(!selected)}>
          <ParentNode leftIcon={<Practice />} arrow={selected}>Practice</ParentNode>
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
    <Link to={props.href??'/'} 
      className="menu-item justify-end items-center"
    >
      <span className="
        icon-button
        w-[70%]
        ">
        {props.leftIcon}
        {props.children}
      </span>
      
    </Link>
  );
}

function ParentNode(props) {
  const Arrows = {
    true: <Arrow/>,
    false: <ArrowRev/>
  }
  return (
      <Link to="#" className="menu-item items-center p-[10px]">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="
            h-[20px] w-[20px] m-[2px] p-[5px] 
            flex justify-center items-center
            
          "
        >{Arrows[props.arrow]}</span>
      </Link>
    );
}


export { DropdownMenu, DropdownItem };
