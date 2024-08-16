import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const user = useSelector(store => store.user)

  const signoutButton = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
          navigate('/')

        }).catch((error) => {
          // An error happened.
        });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const { uid, email, displayName, photoURL } = user
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate('/browse')

      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')


      }
    });
  }, [dispatch, navigate])

    return (
        <div className="flex justify-between w-screen absolute bg-gradient-to-b from-black px-6 py-2 z-10">
           <img className="w-52"  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="logo" />


           { user && (
           <div className=" mt-6">
           <img className="rounded-full w-12 h-12" alt="profPic" src={user?.photoURL} />
            <button type="button" className="text-red-600 font-bold ml-[-8px]"
            onClick={signoutButton}
            >Sign Out</button>
           </div>
        )}
        </div>
    )
}
export default Header