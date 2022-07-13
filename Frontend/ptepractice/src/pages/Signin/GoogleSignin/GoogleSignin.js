import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Helper/Context";

function GoogleSignin() {
  let navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const handleGoogleSignin = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let code = params?.code;
    console.log(encodeURIComponent(code));
    console.log(code);

    

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code:code
      })
    };

    fetch('http://localhost:8080/auth/googlelogin', options)
    .then(res => {
        return res.json()
    })
    .then((res) => {
        console.log(res)
        console.log(res['accessToken'])
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("userName", res.userName);
        localStorage.setItem('roles',res.roles)
        localStorage.setItem("loggedIn", true);
        setLoggedIn(!loggedIn);
        navigate('/')
    })
  };

  handleGoogleSignin();

  return (
    <div
      className="
                flex
                flex-col
                h-[100px]
                w-[100px]
            "
    >
      Google Signin Redirect
    </div>
  );
}

export default GoogleSignin;


// const details = {
//   redirect_uri: "http://localhost:3000/signin/googlesignin",
//   client_id: "719615345009-621atcuvo67cn1llc7ip9753dr11tts0.apps.googleusercontent.com",
//   client_secret: "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",
//   grant_type: "authorization_code",
//   code: code,
// };
// var formBody = [];
// for (var property in details) {
//   var encodedKey = encodeURIComponent(property);
//   var encodedValue = encodeURIComponent(details[property]);
//   formBody.push(encodedKey + "=" + encodedValue);
// }
// formBody = formBody.join("&");
