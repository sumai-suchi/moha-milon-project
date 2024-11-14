import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.init';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
      const name='sagor mele nodite';

      const createUser=(email,password)=>
      {
        return createUserWithEmailAndPassword(auth,email,password)
      }
     const signInUser=(email,password)=>
     {
        return signInWithEmailAndPassword(auth,email,password)
     }


    const authInfo={
       name,
       createUser,
       signInUser
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