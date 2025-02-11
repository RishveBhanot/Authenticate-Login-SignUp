import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../assets/Firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const provider = new GoogleAuthProvider();
  const email=useRef();
  const password=useRef();
  const [message, setMessage] = useState(null)

  const navigate = useNavigate();

  const loginData = (e) => {

    e.preventDefault();         

    // This function is used for login purpose with the help of email and password ,if user is already exists then user will redirect to main component .
    
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Logged in");
        navigate("/main");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
        }

        //This function is use to login/signin the user with the help of google authentication

  const loginAuth = (e) => {
    
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };



  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" border-black border-4 w-[400px] flex flex-col justify-center items-center  bg-cyan-600">
        {/* TITLE LOGIN */}

        <h1 className=" mt-8 border-4 py-2 px-4 rounded-3xl text-white text-2xl font-semibold ">
          Login
        </h1>

        {/* EMAIL FIELD */}

        <form className="flex flex-col items-center gap-8 mt-8 mb-8">
          <input
            ref={email}
            className="rounded-2xl font-normal py-1 px-1 outline-none"
            type="email"
            placeholder="Your Email"
            name="email"
          />

          {/* PASSWORD FIELD */}

          <input
            ref={password}
            className="rounded-2xl font-normal py-1 px-1 outline-none"
            type="password"
            placeholder="Your Password"
            name="password"
          />

          <p className="text-red-700 text-xl">{message}</p>

          {/* LOGIN BUTTON */}

          <button onClick={loginData} className=" bg-white hover:bg-[#4c00b4] hover:text-white transition ease-in-out delay-150 border-black border-2 py-2 px-4 rounded-3xl text-black font-semibold">
            Login
          </button>

          <button onClick={loginAuth}>
            {" "}
            <img
              width={150}
              src="src/components/web_light_rd_SI@3x.png"
              alt=""
            />{" "}
          </button>
        </form>

        {/* NOT HAVE A ACCOUNT */}

        <p className="text-cyan-200 font-normal mb-4">
          Not have a Account?{" "}
          <Link className="hover:font-bold" to="/">
            Signup Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
