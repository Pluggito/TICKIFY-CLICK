import { createContext, useContext } from "react"
import { useEffect, useState } from "react";
import { auth } from "../Auth/firebase";
import { onAuthStateChanged } from "firebase/auth";



export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const  [currentUser,setCurrentUser] = useState(null) 
    const [currentUserUid,setCurrentUserUid] = useState(null)
    const  [userLoggedIn,setUserLoggedIn] = useState(false)
    const  [loading,setLoading] = useState(true)


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,initializeUser)
        return unsubscribe;
    },[])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user})
            const userUid = await user.uid
            setCurrentUserUid(userUid)
            setUserLoggedIn(true)
        }else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        currentUserUid,
        userLoggedIn,
        loading,
    }




  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider



