import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Item({ className, children, title, ...props }) {
  const [open, setOpen] = useState(false);

  let defaultClassNames = `
            text-black
            h-[50px]
            ml-[15px]
            mr-[15px]
            pl-[10px]
            pr-[10px]
            rounded-[5px]
            flex
            grow-[1]
            items-center
            text-[18px]
            hover:bg-[#a69e9d33]
            transition duration-[400ms]
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
