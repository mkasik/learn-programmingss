import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebas/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext= createContext();
const auth= getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const providerLogin= (provider)=>{
        return signInWithPopup(auth, provider);
    }
    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn= (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut= ()=>{
        return signOut(auth);
    }
     
     const authInfo= {user, providerLogin, logOut, createUser, signIn}
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
     },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;