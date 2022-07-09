import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Helper/Context";

function Signin() {
  const userRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  let navigate = useNavigate();

  const handleLoggedIn = (state) => {
    setLoggedIn(state);
  };

  const handleGoogleSignin = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let code = params?.code;
    console.log(code)
    let options = {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    };

    fetch(`http://localhost:8080/login-google?code=${code}`,options)
      .then((res) => {
        console.log(res)
      })
  }

  // handleGoogleSignin()

  const handleSignIn = () => {
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

    fetch("http://localhost:8080/jwt/login", options)
      .then((res) => {
        if (res.ok) return res.json();

        throw Error(res.status);
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("userName", res.userName);
        localStorage.setItem("loggedIn", true);

        handleLoggedIn(!loggedIn);
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
        href="https://accounts.google.com/o/oauth2/auth?scope=email profile openid&openid.realm&include_granted_scopes=true&client_id=744486347000-kb2d1is3v69drqg14brhinkes80c83sf.apps.googleusercontent.com&redirect_uri=http://localhost:3000/signin&response_type=code
        		&approval_prompt=force"
      >
        Signin With Google
      </a>
    </div>
  );
}

export default Signin;
