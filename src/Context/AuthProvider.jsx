import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../FirebaseConfig/Firebase.Config";
import { AuthContext } from "./AuthContext";



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const gProvider=new GoogleAuthProvider();

    const signWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,gProvider);
    }

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }


   useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

  const userInfo={
    user,
    loading,
    signWithGoogle,
    createUser,
    signInUser,
    signOutUser,
    setUser
  }


    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;