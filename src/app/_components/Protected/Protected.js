"use client"
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

import axios from 'axios'
import { useAuth } from "../Providers/Providers";
import { ProfileApi } from "../Apis/api";
import Cookies from "js-cookie";
import Spinner from "../spinner";
const ProtectedRoute = ({ children }) => {
  
  const { authUser,setAuthUser,userProject} = useAuth()
  let [loading,setLoading] = useState(true)

  const router = useRouter(); 
  const token = Cookies.get("token")
// console.log(token,'token protected');

  useEffect(()=>{
    setLoading(true)
    if(token){
        axios.get(`${ProfileApi}`,{
          headers:{
            accept:'application/json',
            Authorization: `Bearer ${token}`
          }
        })
       .then(function (response) {
      setAuthUser(response.data.data)
      setLoading(false)
     
      })
     .catch(function (error) {
      // handle error
      if(error.response && error.response.status === 403){
        setLoading(false)
        Cookies.remove("token")
        router?.push('/login')
        return;
      }
      console.log(error.response.status,'error from protected route');
      setAuthUser(null)
       });
       return
    }
     setAuthUser(null)
    setLoading(false)
  },[])
 
  return (
    <>
    {
      loading? <Spinner/>
      : authUser?
     <> {children}</>
      :
      router?.push('/login')
    }
    </>
  )
};
export default ProtectedRoute;