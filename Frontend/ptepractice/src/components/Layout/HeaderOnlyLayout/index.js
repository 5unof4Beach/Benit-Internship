import Header from '../components/Header';

function HeaderOnlyLayout({children}) {
    return ( 
        <div>
            <Header></Header>
            {children}
        </div>
     );
}

export default HeaderOnlyLayout;