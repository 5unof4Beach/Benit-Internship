function Button({to, href, children, onClick}) {
    let Component = 'button'

    return ( 
        <Component>
            <span>{children}</span>
        </Component>
     );
}

export default Button;

