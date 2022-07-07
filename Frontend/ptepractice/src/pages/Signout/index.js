import React from "react"
import {useNavigate} from 'react-router-dom'
import { LoginContext } from "../../Helper/Context"

function Signout() {
  const{loggedIn, setLoggedIn} = React.useContext(LoginContext)
  let navigate = useNavigate()

  const handleSignOut = (state)=> {
    setLoggedIn(state)
    navigate('/')
  }

    return(
        <React.Fragment>
        <button
          className="
            border-[2px]
          "
          onClick={() => handleSignOut(false)}
        >
          Sign Out
        </button>
        </React.Fragment>
    )


}

export default Signout;
