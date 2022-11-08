import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
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
    return{
        singInWithGoogle,
        user,
        setUser,
        error,
        setError,
        loading
    }
}
export default Firebase;