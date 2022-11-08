import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login a user
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //User loged or not
    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);

        })
        return () =>{
            return unsubscribe();
        }

    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;