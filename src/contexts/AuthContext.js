// user profile page 

import { createContext, useContext, useState, useEffect } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../helpers/firebase"

const userAuthContext = createContext()

export function UserAuthProvider({ children }){
    const [user, setUser] = useState('')

    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (e) => {
            setUser(e)
        })
    }, [])

    //console.log(user)

    return(
        <userAuthContext.Provider value = {{user, register, login, logout}} > {children} </userAuthContext.Provider>
    )

}

export function useUserAuth(){
    return useContext(userAuthContext)
}