import { useContext, useEffect } from "react";
import { LoginContext } from "../../Helper/Context";
import { useNavigate } from "react-router-dom";

function Auth({children}) {
    const{loggedIn} = useContext(LoginContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!loggedIn){
             navigate('/signin')
            console.log("Not signed in")   
            console.log(loggedIn) 
        }
    }, [])

    return ( 
        <>{children}</>
     );
}

export default Auth;