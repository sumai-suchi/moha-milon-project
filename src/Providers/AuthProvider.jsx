import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from '../firebase.init';

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
      const name='sagor mele nodite';

      const createUser=(email,password)=>
      {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
      }
     const signInUser=(email,password)=>
     {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const signOutUser=()=>
     {
        setLoading(true)
        return signOut(auth);
     }

     const signInWithGoogle=()=>
     {
        return signInWithPopup(auth,googleProvider)
     }

      useEffect(()=>{

        const unSubscribe=onAuthStateChanged(auth,currentUser=>
        {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>
        {
            unSubscribe();
        }

      },[])






    //  onAuthStateChanged(auth,currentUser=>
    //  {
    //    if(currentUser)
    //    {
    //     console.log('Currently logged in user',currentUser)
    //     setUser(currentUser)
    //    }
    //    else{
    //     console.log('No user found')
    //     setUser(null)
    //    }
    //  }
    // )


    const authInfo={
       name,
       loading,
       createUser,
       signInUser,
       user,
       signOutUser,
       signInWithGoogle
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/**main part who will have access to  this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1.create context with null as value.
 * 2.Create provider
 * 3.set a default value
 * 4.[attention please!!]
 * 5.use the auth provider in the main.jsx 
 * 6.Access the children inside the auth provider
 */