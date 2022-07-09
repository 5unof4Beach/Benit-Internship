import { useContext } from "react";
import { LoginContext } from "../../Helper/Context";
import { useNavigate } from "react-router-dom";

function Auth({children}) {
    const{loggedIn} = useContext(LoginContext)
    const navigate = useNavigate()
    if(!loggedIn) navigate('/signin')

    return ( 
        <>{children}</>
     );
}

export default Auth;