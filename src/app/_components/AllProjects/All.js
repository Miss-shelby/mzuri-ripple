'use-client'

import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import axios from "axios";
import { ProjectCard } from "../ProjectCard";
import Link from "next/link";
import { GetProjectsApi } from "../Apis/api";
import TextExpander from "../shared/TextExpander";
import Spinner from "../spinner";
import { calculateDaysLeft } from "../shared/DatesCreated/Left/Dates";

const bika = "/Bikah.png";
const scooter ="/ElectricScooter.png";
const library ="/library.png"


const All = () => {
 
const [featuredProduct,setFeaturedProject] = useState([])
const [isLoading,setIsLoading] = useState(true)
// const projectId = Cookies.get("projectId")
//  console.log(projectId,'from project view');
 
 const baseurl =`https://ripple-project-1.onrender.com/api/v1/projects/image_or_video/`

  useEffect(()=>{
   handleFetch()
  },[])

  const handleFetch = ()=>{
    setIsLoading(true)
    axios.get(`${GetProjectsApi}`,{
    })
   .then(function (response) {
  if(response.status === 200){
  setFeaturedProject(response.data.data)
  setIsLoading(false)
  }

  })
 .catch(function (error) {
  // handle error
  console.log(error);
  // setIsLoading(false)
   });
  }

  //getting created date
  const dateCreatedOne = featuredProduct[0]?.created?.slice(0, 10); 
  const dateCreatedTwo = featuredProduct[1]?.created?.slice(0, 10);
  const dateCreatedThree = featuredProduct[24]?.created?.slice(0, 10);
  console.log(featuredProduct);
  // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 
const daysLeftOne = calculateDaysLeft(dateCreatedOne,formattedDate)
const daysLeftTwo = calculateDaysLeft(dateCreatedTwo,formattedDate)
const daysLeftThree = calculateDaysLeft(dateCreatedThree,formattedDate)
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Featured Projects</h4>
      {isLoading?<Spinner/> : 
      (
        <div className="flex w-full ">
        <div className=" mr-[20px] w-fit h-fit ">
        <ProjectCard img={bika} height={470} width={680} title={featuredProduct[0]?.title} owner={featuredProduct[0]?.name}
        
        expander={<TextExpander collapsedNumber={134}>{featuredProduct[10]?.about}</TextExpander>}
          startPrice={`${featuredProduct[0]?.amount}`} endPrice={`${featuredProduct[0]?.amount}`} backers="0 backers" days={`${daysLeftOne} days left`}/>
        </div>
          <div className="flex flex-col text-[sm]">
            <ProjectCard  height={130} width={500}  title={featuredProduct[1]?.title} owner={featuredProduct[1]?.name}
              expander={<TextExpander>{featuredProduct[6]?.about}</TextExpander>}
              startPrice= {`${featuredProduct[1]?.amount}`} endPrice={`${featuredProduct[1]?.amount}`}
               backers="0 backers" days={`${daysLeftTwo} days left`} img={scooter}/>
              <div className="mt-3">
                 <ProjectCard height={130} width={500} title={featuredProduct[24]?.title} owner={featuredProduct[24]?.name}
                expander={<TextExpander>{featuredProduct[24]?.about}</TextExpander>}
              startPrice={`${featuredProduct[24]?.amount}`}  endPrice={`${featuredProduct[24]?.amount}`} 
               backers="0 backers" days={`${daysLeftThree} day left`} img={library}/>
            
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


