import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

import app from '../../Firebase/Firebase';
export const AuthContext =createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)

    const [user ,setUser]=useState(null)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const userSignOut = () => {
        setLoading(true)
       return signOut(auth);
     };
     const updateUser=(currentUser)=>{
       return updateProfile(auth.currentUser,currentUser)
     }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])
    const authInfo ={
createUser,
signInUser,user,userSignOut ,updateUser,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;