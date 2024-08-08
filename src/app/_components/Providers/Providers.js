"use client"
import { createContext, useContext, useState }  from "react"

const authContext = createContext()

const AuthProvider =({children})=>{
    const [authUser, setAuthUser] = useState(null);
    const [userProject, setUserProject] = useState({});
    const [projectId, setProjectId] = useState('');
    const logOut = ()=>{
        setAuthUser(null)
        setUserProject({})
        setProjectId("")
    }
    const shared = {
        authUser,
        setAuthUser,
        userProject, 
        setUserProject,
        projectId,
        setProjectId,
        logOut
        
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