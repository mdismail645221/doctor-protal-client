import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update USER
    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }

    // signIn 
    const signInUser = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // signGoogle
    const googleSignIn = (email, password)=> {
        setLoading(true);
        return signInWithPopup(auth, email, password)
    }



    // sign out
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('jwt_token')
        return signOut(auth)
    }






    useEffect(()=> {
        const unSubscribed = onAuthStateChanged(auth, (currentUser)=> {
            console.log('onAuthStateChanged current User', currentUser);
            // if()
            setUser(currentUser)
            setLoading(false)

        })

        return ()=> {
            unSubscribed()
        }

    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signInUser,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;