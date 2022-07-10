import Header from "../components/Header";

function HeaderOnlyLayout({children}) {
    return ( 
        <div
            className="
                flex flex-col items-center
            "
        >
            <Header></Header>
            {children}
        </div>
     );
}

export default HeaderOnlyLayout;