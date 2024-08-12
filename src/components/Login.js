import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
      <Header />
      <img
        className="absolute w-100%"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
        alt="logo"
      />
      <form className="w-3/12 absolute p-4 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2 text-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && <input
          type="text"
          placeholder="Full name"
          className="p-3 my-2 w-full bg-gray-700"
        /> }
        
        <input
          type="email"
          placeholder="email"
          className="p-3 my-2 w-full bg-gray-700"
        />        
        <input
          type="password"
          placeholder="password"
          className="p-3 my-2 w-full bg-gray-700"
        />
        <button className="p-3 my-3 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        <span className="text-gray-400">New to netflix?</span> {isSignInForm ? "SignUp Now" : "SignIn Now"}</p>
      </form>
    </div>
  );
};

export default Login;
