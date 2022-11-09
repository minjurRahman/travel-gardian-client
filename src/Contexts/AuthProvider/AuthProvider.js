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
       return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login a user
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Google login
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
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

    // Log Out
    const logOut = () =>{
        setLoading(true)
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


/* 
  const handleLogOut = () =>{
    logOut()
    .then( () =>{})
    .catch(error => console.error(error))
  }

*/