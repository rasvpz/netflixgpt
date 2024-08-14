import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import InputText from "./InputText";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(true)

    const email = useRef(null)
    const password = useRef(null)
    const firstName = useRef(null)


    const handleButtonClick = async() => {
        setErrorMessage(checkValidate(email.current.value,password.current.value))
        if(errorMessage) return

        if(!isSignInForm){
          console.log("signUp", isSignInForm)
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log("User", user)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage)
              console.log("signupError", errorMessage)

            });
        }
        else{
          console.log("signIn", isSignInForm)
          await signInWithEmailAndPassword  (auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("signInUser", user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage)
              console.log("signupError", errorMessage)
            });
        }
    }

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
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-4 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2 text-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && (
            <InputText placeholder={"First name"} ref={firstName} />
        )}
        <InputText placeholder={"Name"} ref={email} />         
        <InputText placeholder={"Password"} ref={password} />

        <button className="p-3 my-3 bg-red-700 w-full rounded-lg"
        onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p>{errorMessage}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          <span className="text-gray-400 mr-4">New to netflix?</span> 
          {isSignInForm ? "SignUp Now" : "SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login
