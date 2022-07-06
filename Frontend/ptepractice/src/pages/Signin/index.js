import React from "react"
import {useNavigate} from 'react-router-dom'

function Signin() {

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    let navigate = useNavigate()
    const handleSignIn = ()=> {

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        };

        fetch('http://localhost:8080/jwt/login',options)
        .then((res) => {
            if(res.ok)
                return res.json()

            throw Error(res.status)
        })
        .then((res) => {
            console.log(res)
            localStorage.setItem("accessToken", res.accessToken)
            localStorage.setItem("userName", res.userName)
            navigate('/')
        })
        .catch(err => {
            console.log("Dang nhap ko thanh cong")
        })
    }


  return (
    <div
      className="
                flex
                flex-col
                h-[100px]
                w-[100px]
            "
    >
      <h1>Sign In Page</h1>
      <input
        placeholder="Username"
        className="
                    h-[30px]
                    w-[100px]
                    border-black 
                    border-[2px]
                "
        type="text"

        onInput={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Password"
        className="
                    h-[30px]
                    w-[100px]
                    border-black 
                    border-[2px]
                "
        type="password"
        onInput={(e) => setPassword(e.target.value)}
      />

      <button
        className="
            border-black 
            border-[2px]
        "
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
}

export default Signin;
