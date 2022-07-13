import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../../Helper/Context";

function Signin() {
  const redirect_uri = "http://localhost:3000/signin/googlesignin";
  // const redirect_uri = 'http://localhost:8080/jwt/googlelogin'

  const client_id =
    "719615345009-621atcuvo67cn1llc7ip9753dr11tts0.apps.googleusercontent.com";
    // "744486347000-rsn3f420en55emflvuttuhvidg5p2874.apps.googleusercontent.com"

  const userRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  let navigate = useNavigate();

  var details = {
    userName: "test@gmail.com",
    password: "Password!",
    grant_type: "password",
  };

    

  const handleSignIn = () => {
    const URL = 'http://localhost:8080/auth/login'

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };

    fetch(URL, options)
      .then((res) => {
        if (res.ok) return res.json();

        throw Error(res.status);
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("userName", res.userName);
        localStorage.setItem('roles',res.roles)
        localStorage.setItem("loggedIn", true);

        setLoggedIn(!loggedIn);
        navigate("/");
      })
      .catch((Error) => {
        console.log("Dang nhap ko thanh cong");
        console.log(Error);
      });
  };

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
        ref={userRef}
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

      <a
        className="
            border-black 
            border-[2px]
        "
        href={`https://accounts.google.com/o/oauth2/auth?scope=email profile openid&openid.realm&include_granted_scopes=true&client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code
        		&approval_prompt=force `}
      >
        Signin With Google
      </a>

      <Link to='/signup'>Create an account</Link>
    </div>
  );
}

export default Signin;
