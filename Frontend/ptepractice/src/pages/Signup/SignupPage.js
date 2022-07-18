import { useState  } from "react";
import { useNavigate } from "react-router-dom";


function SignupPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");
  const navigate = useNavigate()

    const handleSignUp = () => {
        const su = signUp(email, userName, password)
        
        su
        .then((res)=>{
            if(res.ok){
                setMess('Sign up successfully')
                navigate('/signin')
                return res
            }
            
            throw Error('Signup Failed')
        })
        .catch((Error) => {
            setMess('Sign up failed')
            console.log(Error)
        })
    }


  return (
    <>
      Signup page
      <p className="h-[50px]">{mess}</p>
      <input onInput={(e) => setEmail(e.target.value)} placeholder="Email" type="text" className="border-[2px] border-black" />
      <input onInput={(e) => setUserName(e.target.value)} placeholder="Username" type="text" className="border-[2px] border-black" />
      <input onInput={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="border-[2px] border-black" />
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={handleSignUp}
        >
        Sign Up
      </button>
    </>
  );
}

function signUp(email, userName, password){
    const URL = 'http://localhost:8080/auth/signup'

    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: userName,
          password: password,
        }),
      };

    return fetch(URL, options)
}

export default SignupPage;
