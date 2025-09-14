import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          const user = userCredential.user;

          if (name.current?.value) {
            await updateProfile(user, { displayName: name.current.value});
          }
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0"> 
        <img
          className="h-full w-full object-cover"
          src={BG_URL}
          alt="Netflix background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 absolute p-4 sm:p-8 md:p-12 bg-black my-20 sm:my-28 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 z-10"
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-3 sm:py-4 text-center md:text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="py-3 px-4 my-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="py-3 px-4 my-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-3 px-4 my-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm py-2">{errorMessage}</p>
        )}

        <button
          className="py-3 my-4 bg-red-600 w-full rounded-lg font-medium hover:bg-red-700 transition-colors"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <button
          className="py-3 my-2 w-full text-center rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          Use a sign-in code
        </button>

        <p className="py-4 text-center text-gray-400 underline cursor-pointer hover:text-white transition-colors">
          Forgot password?
        </p>

        <p className="py-4 cursor-pointer text-center text-gray-400 hover:text-white transition-colors" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In Now"}
        </p>
        
        <p className="text-xs text-gray-500 mt-6 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">Learn more.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;