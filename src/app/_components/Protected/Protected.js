import { Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { useEffect,useState } from "react";

import axios from 'axios'
import { useAuth } from "../Providers/Providers";
import { ProfileApi } from "../Apis/api";
const ProtectedRoute = ({ children }) => {
  const { authUser,setAuthUser} = useAuth()
  let [loading,setLoading] = useState(true)


  const token = localStorage.getItem('token')
// console.log(token);

  useEffect(()=>{
    // console.log(authUser,'authuser from profile')
    if(token){
        axios.get(`${ProfileApi}`,{
          headers:{
            accept:'application/json',
            Authorization: `Bearer ${token}`
          }
        })
       .then(function (response) {
      // handle success
      console.log(response, 'response from user profile ');
      setAuthUser(response.data)
      setLoading(false)
      // console.log(authUser)
      })
     .catch(function (error) {
      // handle error
      console.log(error);
       });
       return
    }
     setAuthUser('')
    setLoading(false)
  },[])
 
  return (
    <>
    {
      loading? <span className="loader2"></span>
      : authUser?
     <> {children}</>
      :
      <Navigate to='/login'/>
    }
    </>
  )
};
export default ProtectedRoute;