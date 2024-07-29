'use-client'

import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import axios from "axios";
import { ProjectCard } from "../ProjectCard";
import Link from "next/link";
import { GetProjectsApi } from "../Apis/api";
import TextExpander from "../shared/TextExpander";
import Spinner from "../spinner";

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
// const {id,title,name,amount} = featuredProduct[0]
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Featured Projects</h4>
      {isLoading?<Spinner/> : 
      (
        <div className="flex w-full ">
        <div className=" mr-[20px] w-fit h-fit ">
        <ProjectCard img={bika} height={470} width={680} title={featuredProduct[0]?.title} owner={featuredProduct[0]?.name}
        
        expander={<TextExpander collapsedNumber={133}>{featuredProduct[10]?.about}</TextExpander>}
          startPrice={`${featuredProduct[0]?.amount}`} endPrice={`${featuredProduct[0]?.amount}`} backers="0 backers" days="36 days left"/>
        </div>
          <div className="flex flex-col text-[sm]">
            <ProjectCard  height={130} width={500}  title={featuredProduct[1]?.title} owner={featuredProduct[1]?.name}
              expander={<TextExpander>{featuredProduct[6]?.about}</TextExpander>}
              startPrice= {`${featuredProduct[1]?.amount}`} endPrice={`${featuredProduct[1]?.amount}`}
               backers="0 backers" days="36 days left" img={scooter}/>
              <div className="mt-3">
                 <ProjectCard height={130} width={500} title={featuredProduct[9]?.title} owner={featuredProduct[9]?.name}
                expander={<TextExpander>{featuredProduct[9]?.about}</TextExpander>}
              startPrice={`${featuredProduct[9]?.amount}`}  endPrice={`${featuredProduct[9]?.amount}`} 
               backers="0 backers" days="36 days left" img={library}/>
            
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


