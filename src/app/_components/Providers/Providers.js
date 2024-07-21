"use client"
import { createContext, useContext, useState }  from "react"

const authContext = createContext()

const AuthProvider =({children})=>{
    const [authUser, setAuthUser] = useState({});

    const shared = {
        authUser,
        setAuthUser
    }
   
return(
    <authContext.Provider value={shared}>
        {children}
    </authContext.Provider>
)
}

//consume usecontext here
const useAuth =()=>{
    const context = useContext(authContext)
    if(context === undefined)
        throw new Error ("Context was used outisde provider")
    return context;
}
export  {AuthProvider,useAuth}