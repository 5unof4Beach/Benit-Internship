import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Button({ className, children, title, ...props }) {
  const [open, setOpen] = useState(false);

  let defaultClassNames = `
            text-black truncate
            w-[auto] h-[50px] ml-[15px] mr-[15px] pl-[10px] pr-[10px] rounded-[5px]
            flex items-center
            text-[18px] font-semibold
            hover:bg-[#a69e9d33]
            transition duration-[400ms]
        `;

  let defaultLink = "#";

  return (
    <Link className={className??defaultClassNames} to={props.link??defaultLink} onClick={() => setOpen(!open)}>
      {children}
    </Link>
  );
}

export default Button;
