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
import { toast } from "react-toastify";

const bika = "/Bikah.png";
const scooter ="/ElectricScooter.png";
const library ="/library.png"
const social = '/social media.jpg'


const All = ({allProjects,isLoading}) => {
 

console.log(allProjects[21],'first project here');

  //getting days left 
  const durationOne =  allProjects[21]?.duration?.slice(0,10);
  const durationTwo =  allProjects[1]?.duration?.slice(0,10);
  const durationThree =  allProjects[17]?.duration?.slice(0,10);

  const projectIdOne = allProjects[27]?.id
  const projectIdThree = allProjects[24]?.id

 
  // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 
const daysLeftOne = calculateDaysLeft(durationOne,formattedDate )
const daysLeftTwo = calculateDaysLeft( durationTwo,formattedDate)
const daysLeftThree = calculateDaysLeft(durationThree,formattedDate)

 const baseurl =`https://ripple-project-1.onrender.com/api/v1/projects/image_or_video`
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Featured Projects</h4>
      {isLoading?<Spinner/> : 
      (
        <div className="flex w-full ">
        <div className=" mr-[20px] w-full h-full ">
        <ProjectCard img={bika} height={670} width={680} title={allProjects[21]?.title} owner={allProjects[21]?.name}
        
        expander={<TextExpander collapsedNumber={200}>{allProjects[21]?.about}</TextExpander>}
          startPrice={`${allProjects[21]?.amount.toLocaleString('en-US')}`} endPrice={`${allProjects[21]?.amount.toLocaleString('en-US')}`} backers="0 backers" days={`${daysLeftOne} days left`}/>
        </div>
          <div className="flex flex-col text-[sm] w-fit">
            <ProjectCard  height={30} width={500}  title={allProjects[1]?.title} owner={allProjects[1]?.name}
              expander={<TextExpander collapsedNumber={25}>{allProjects[1]?.about}</TextExpander>}
              startPrice= {`${allProjects[1]?.amount.toLocaleString('en-US')}`} endPrice={`${allProjects[1]?.amount.toLocaleString('en-US')}`}
               backers="0 backers" days={`${daysLeftTwo} days left`} img={scooter}/>
              <div className="mt-3 w-full">
                 <ProjectCard height={130} width={500} title={allProjects[17]?.title} owner={allProjects[17]?.name}
                expander={<TextExpander>{allProjects[17]?.about}</TextExpander>}
              startPrice={`${allProjects[17]?.amount.toLocaleString('en-US')}`}  endPrice={`${allProjects[17]?.amount.toLocaleString('en-US')}`} 
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


