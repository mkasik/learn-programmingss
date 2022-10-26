import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
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
     
     const authInfo= {user, providerLogin}
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