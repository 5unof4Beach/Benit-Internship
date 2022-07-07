import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import './style.css'

function DropdownMenu(props) {
  const [selected, setSelected] = useState(true);
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.lastChild.offsetHeight + 20);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
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
            p-[1rem]
            overflow-hidden
            transition-opacity
        "
    >
      <CSSTransition
        in={selected}
        timeout={500}
        classNames="menu-primary"
        // unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu" onClick={() => setSelected(!selected)}>
          {props.parentNode}
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
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

export { DropdownMenu, DropdownItem };

