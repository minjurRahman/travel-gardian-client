import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Create user
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login a user
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Google login
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    //User loged or not
    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }

    },[])

    // Log Out
    const logOut = () =>{
        // setLoading(true)
        localStorage.removeItem('User-Token');
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        login,
        providerLogin,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
