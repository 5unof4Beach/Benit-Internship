function Introduction(props) {
    return ( 
        <span
            className="
                p-[10px]
                font-semibold
                max-w-[300px]
                h-[400px]
            "
        >
            {props.children}
        </span>
     );
}

export default Introduction;