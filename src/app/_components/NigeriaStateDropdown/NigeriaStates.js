import { useEffect, useState } from "react";
import axios from "axios";
import { NigeriaStatesApi } from "../Apis/api";
const NigeriaStatesDropDown =({selectedState,setSelectedState,states,setStates})=>{

    const[loading,setLoading] = useState(false)
    // console.log(selectedState,'selected state');
    // console.log(typeof selectedState);
    useEffect(()=>{
       if (loading) return;
      setLoading(true);
        axios.get(`${NigeriaStatesApi}`, {
        })
        .then(function (response) {
            setStates(response.data)
        // console.log(response);
        })
        .catch(function (error) {
          console.log(error.response.status,'error status');
        })
        .finally(function(){
          setLoading(false)
        })
    },[]);

    return (
        <>
          <label className='text-black-100 font-medium block w-full mt-6'>
              Which state do you live?
              <select onChange={(e)=>setSelectedState(e.target.value)} value={selectedState} className="select select-bordered text-[13px] w-full h-10 min-h-10 mt-3">
                {states.map((state)=>{
                    return( <option  key={state} value={state}>{state}</option>)
                })}
              
              </select>
            </label>
        </>
    )
}

export default NigeriaStatesDropDown