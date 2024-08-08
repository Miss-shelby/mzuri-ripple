"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect,useState } from "react";

import axios from 'axios'
import { useAuth } from "../Providers/Providers";
import { ProfileApi } from "../Apis/api";
import Cookies from "js-cookie";
import Spinner from "../spinner";


const ProtectedRoute = ({ children }) => {

  const  pathname  = usePathname()
  
  const { authUser,setAuthUser,userProject} = useAuth()
  let [loading,setLoading] = useState(true)

  const router = useRouter(); 
  const token = Cookies.get("token")
// console.log(token,'token protected');

  useEffect(()=>{
    setLoading(true)
        
    axios.get(`${ProfileApi}`,{
          headers:{
            accept:'application/json',
            Authorization: `Bearer ${token}`
          }
        })
       .then(function (response) {
        console.log("== response ==", response)
        setAuthUser(response.data.data)
      })
     .catch(function (error) {
      console.log("== error ==", error)
      // handle error
      if(error.response && error.response.status === 403){
        setLoading(false)
        Cookies.remove("token")

        console.log(pathname)
      
        if(pathname === '/payment'){
         router?.push(`/login?path=/payment`)
        } 
        else {
         router?.push('/login')
        }
      }
      console.log(error?.response?.status,'error from protected route');
      setAuthUser(null)
      })
       .finally(() => {
        setLoading(false)
       })
    
  },[])
 
  return (
    <>
    {
      loading? <Spinner/>
      : authUser?
     <> {children}</>
      :
      // router?.push('/login')
      <></>
    }
    </>
  )
};
export default ProtectedRoute;