import React, { useEffect, useState } from 'react'
import { ProjectCard } from '../ProjectCard'
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';
import Spinner from '../spinner';
import TextExpander from '../shared/TextExpander';
import { calculateDaysLeft } from '../shared/DatesCreated/Left/Dates';
import { useFetchProjectCategory } from '../hook/custom/useFetchProjectCategory';

// images here
const ss= "/kids.png";

const Food$Craft =() => {
 const projectCategoryId = '669da0530eb0c5acbe1ee8f6'
 const {loading,projectCategory,fetchCategory} = useFetchProjectCategory({projectCategoryId})

  useEffect(()=>{
    fetchCategory()
  },[])

  
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Food$Craft Projects</h4>
      {loading?<Spinner/> :
      (
      <div className="flex ">
        <div className=" grid grid-cols-3 gap-4 mt-8  w-full ">
          {projectCategory.map((food)=>{
            return (
              <ProjectCard key={food?.id} img={ss} height={186} width={389} title={food?.title} owner={`By ${food?.name}`}
               expander={<TextExpander collapsedNumber={34}>{food?.about}</TextExpander>}
                startPrice={food?.amount.toLocaleString('en-US')} endPrice={food?.amount.toLocaleString('en-US')} backers="0 backers" days={`${calculateDaysLeft(food?.duration,formattedDate)} days left`}/>
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

export default Food$Craft

