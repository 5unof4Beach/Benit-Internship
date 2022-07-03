function Item(props) {
    return (  
        <span
            className="
                bg-[#aaaa]
                rounded-[5px]
                
            "
        >
            {props.children}
        </span>
    );
}

export default Item;