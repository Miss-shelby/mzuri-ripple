import React, { useEffect, useState } from 'react'
import { ProjectCard } from '../ProjectCard'
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';
import { getCategory } from '../Apis/api';
import Spinner from '../spinner';
import TextExpander from '../shared/TextExpander';
import { calculateDaysLeft } from '../shared/DatesCreated/Left/Dates';

// images here
const ss= "/story.png";

const Arts =() => {
  const [arts,setArts] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const fetchCategory   = async ()=>{
      setLoading(true)
      try{
        const response = await fetch(`${getCategory}/category?category=669d9ff40eb0c5acbe1ee8f0`)
        const data = await response.json()
        if(response.status=== 200){
          console.log(data);
          setArts(data.data)
          setLoading(false)
        }
      }catch(error){
        console.log(error);
      }
    }
    fetchCategory()
  },[])

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 
  
  
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Arts Projects</h4>
      {loading?<Spinner/> :
      (
      <div className="flex ">
        <div className=" grid grid-cols-3 gap-4 mt-8  w-full ">
          {arts.map((art)=>{
            return (
              <ProjectCard key={art?.id} img={ss} height={186} width={389} title={art?.title} owner={`By ${art?.name}`}
               expander={<TextExpander collapsedNumber={34}>{art?.about}</TextExpander>}
                startPrice={art?.amount} endPrice={art?.amount} backers="0 backers" days={`${calculateDaysLeft(art?.duration,formattedDate)} days left`}/>
            )
          })}
        </div>
      </div> 
      )}
      <div className="flex text-right items-center justify-end mt-10">
      <p className=" text-black-100 font-medium "><Link href='/explore'>See all projects</Link> </p>
        <p className=""><MdOutlineNavigateNext /></p>
      </div>
    </div>
  )
}

export default Arts
