import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Item({ className, children, title, ...props }) {
  const [open, setOpen] = useState(false);

  let defaultClassNames = `
            border-[2px]
            border-black
            text-black
            m-[5px]
            flex
            grow-[1]
            justify-center
        `;

  let link = "#";

  if (props.link) {
    link = props.link;
  }

  if (className) {
    defaultClassNames = className;
  }

  return (
    <Link className={defaultClassNames} to={link} onClick={() => setOpen(!open)}>
      {children}
    </Link>
  );
}

export default Item;
