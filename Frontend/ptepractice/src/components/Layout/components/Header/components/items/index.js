import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Item({className,children,title,...props}) {

    const [open, setOpen] = useState(false)

    let defaultClassNames = `
            w-[100%]
            border-[2px]
            border-black
            text-black
            m-[5px]
            flex
            justify-center
        `

    let link = '#'

    if(props.link){
        link = props.link
    }

    if(className){
        defaultClassNames = className
    }

    return (  
        <div
            className={defaultClassNames}
        >
            <Link
                className={className}
                to={link}
                onClick={() => setOpen(!open)}
            >
                {title}
            </Link>
            
            {open && children}

        </div>
    );
}

export default Item;