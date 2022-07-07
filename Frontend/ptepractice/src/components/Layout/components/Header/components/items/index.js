import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Item({className,children,title,...props}) {

    const [open, setOpen] = useState(false)

    let link = '#'

    if(props.link){
        link = props.link
    }

    if(className){

    }

    return (  
        <div
            className="
                w-[100%]
                flex
                flex-col
                items-center
            "
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