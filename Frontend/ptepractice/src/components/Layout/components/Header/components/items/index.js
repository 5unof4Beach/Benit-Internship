import { Routes, Route, Link } from "react-router-dom";

function Item(props) {
    let link = '/'

    if(props.link){
        link = props.link
    }

    return (  
        <Link
            className="
                bg-[#aaaa]
                rounded-[5px]
            "
            to={link}
        >
            {props.children}
        </Link>
    );
}

export default Item;