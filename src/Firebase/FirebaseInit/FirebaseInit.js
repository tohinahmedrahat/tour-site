import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";
initializeApp(firebaseConfig)

const Firebase = () =>{
    const [user,setUser] = useState({})
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const singInWithGoogle  = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    //create user 
    const createUserWithEmail = (email,password) => {
        return  createUserWithEmailAndPassword(auth,email,password)
      }
    //   update user
    const updateUser = (profile) => {
       return updateProfile(auth.currentUser,profile )
    }
    // login with email
    const loginWithEmail = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // github login
    // const loginWithGithub = () => {
    //      signInWithPopup(auth,githubProvider)
    //      .then(result => {
    //         const user = result.user
    //         setUser(user)
    //         setError("")
    //     })
    //     .catch(error => {
    //         const errorMessage = error.message;
    //         setError(errorMessage)
    //     })
    // }
    // log out or sing out
    const logOut = () => {
        signOut(auth)
        .then(user => {
            setUser({})
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        const userChanged = onAuthStateChanged(auth, (user) => {
             if (user) {
                 setUser(user)
                 setLoading(false)
             } else {
              setUser({})
             }
           });
           return () => userChanged;
     },[])
    return{
        singInWithGoogle,
        user,
        setUser,
        error,
        setError,
        loading,
        logOut,
        loginWithEmail,
        createUserWithEmail,
        updateUser
    }
}
export default Firebase;