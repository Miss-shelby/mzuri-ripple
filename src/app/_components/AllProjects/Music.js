import React, { useEffect, useState } from 'react'
import { ProjectCard } from '../ProjectCard'
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';
import { getCategory } from '../Apis/api';
import Spinner from '../spinner';
import TextExpander from '../shared/TextExpander';
import { calculateDaysLeft } from '../shared/DatesCreated/Left/Dates';
import { useFetchProjectCategory } from '../hook/custom/useFetchProjectCategory';

// images here
const ss= "/story.png";

const Music =() => {
  const projectCategoryId = '669da0360eb0c5acbe1ee8f4'
const {loading,projectCategory,fetchCategory} = useFetchProjectCategory({projectCategoryId})
  useEffect(()=>{
    fetchCategory()
  },[])

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Music Projects</h4>
      {loading?<Spinner/> :
      (
      <div className="flex ">
        <div className=" grid grid-cols-3 gap-4 mt-8  w-full ">
          {projectCategory.map((music)=>{
            return (
              <ProjectCard key={music?.id} img={ss} height={186} width={389} title={music?.title} owner={`By ${music?.name}`}
               expander={<TextExpander collapsedNumber={34}>{music?.about}</TextExpander>}
                startPrice={music?.amount.toLocaleString('en-US')} endPrice={music?.amount.toLocaleString('en-US')} backers="0 backers" days={`${calculateDaysLeft(music?.duration,formattedDate)} days left`}/>
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

export default Music
