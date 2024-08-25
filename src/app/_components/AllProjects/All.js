'use-client'

import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import axios from "axios";
import { ProjectCard } from "../ProjectCard";
import Link from "next/link";
import { getFeaturedProjects, GetProjectsApi } from "../Apis/api";
import TextExpander from "../shared/TextExpander";
import Spinner from "../spinner";
import { calculateDaysLeft } from "../shared/DatesCreated/Left/Dates";
import { toast } from "react-toastify";

const bika = "/Bikah.png";
const scooter ="/ElectricScooter.png";
const library ="/library.png"
const social = '/social media.jpg'

const All = () => {
 

  const [featuredProjects,setFeaturedProjects] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const[error,setError] = useState('')
  
    const handleFetch = ()=>{
      setIsLoading(true)
      axios.get(`${getFeaturedProjects}`,{
      })
     .then(function (response) {
    if(response.status === 200){
      setFeaturedProjects(response.data.data)
      
    setIsLoading(false)
    }
  
    })
   .catch(function (error) {
    // handle error
    console.log(error);
    setError(error)
    setIsLoading(false)
     });
    }
    useEffect(()=>{
      handleFetch()
     },[])

  
  //getting days left 
  const durationOne =featuredProjects[2]?.duration;
  const durationTwo =  featuredProjects[1]?.duration;
  const durationThree =  featuredProjects[0]?.duration;



 
  // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 

  
  
const daysLeftOne = calculateDaysLeft(durationOne,formattedDate )
const daysLeftTwo = calculateDaysLeft( durationTwo,formattedDate)
const daysLeftThree = calculateDaysLeft(durationThree,formattedDate)



 const baseurl =`https://ripple-project-1.onrender.com/api/v1/projects/image_or_video`
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Featured Projects:</h4>
      {isLoading?<Spinner/> : 
      error? <p className='text-red-500 capitalize font-medium mt-4'>Failed to load featured projects😓 </p>  :
      (
        <div className="flex w-full ">
        <div className=" mr-[20px] w-full  ">
        <ProjectCard img={bika} height={670} width={680} cardHeight={true} title={featuredProjects[2]?.title} owner={featuredProjects[2]?.name}
        
        expander={<TextExpander collapsedNumber={110}>{featuredProjects[2]?.about}</TextExpander>}
          startPrice={`${featuredProjects[2]?.amount.toLocaleString('en-US')}`} endPrice={`${featuredProjects[2]?.amount.toLocaleString('en-US')}`} 
          backers="2 backers" days={`${calculateDaysLeft(featuredProjects[2]?.duration,formattedDate)} days left`}/>
        </div>
          <div className="flex flex-col text-[sm] w-fit">
            <ProjectCard  height={30} width={500}  title={featuredProjects[1]?.title} owner={featuredProjects[1]?.name}
              expander={<TextExpander collapsedNumber={25}>{featuredProjects[1]?.about}</TextExpander>}
              startPrice= {`${featuredProjects[1]?.amount.toLocaleString('en-US')}`} endPrice={`${featuredProjects[1]?.amount.toLocaleString('en-US')}`}
               backers="2 backers" days={`${daysLeftTwo} days left`} img={scooter}/>
              <div className="mt-3 w-full">
                 <ProjectCard height={130} width={500} title={featuredProjects[0]?.title} owner={featuredProjects[0]?.name}
                expander={<TextExpander>{featuredProjects[0]?.about}</TextExpander>}
              startPrice={`${featuredProjects[0]?.amount.toLocaleString('en-US')}`}  endPrice={`${featuredProjects[0]?.amount.toLocaleString('en-US')}`} 
               backers="2 backers" days={`${daysLeftThree} day left`} img={library}/>
            
              </div>
          </div>
      </div> 
      )
      }
      <div className="flex text-right items-center justify-end mt-10">
      <p className=" text-black-100 font-medium "><Link href='/explore'>See all projects</Link> </p>
        <p className=""><MdOutlineNavigateNext /></p>
      </div>
    </div>
  );
};

export default All;


