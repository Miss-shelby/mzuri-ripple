import React, { useEffect, useState } from 'react'
import { ProjectCard } from '../ProjectCard'
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';
import { getCategory } from '../Apis/api';
import Spinner from '../spinner';
import TextExpander from '../shared/TextExpander';
import { calculateDaysLeft } from '../shared/DatesCreated/Left/Dates';

// images here
const printer = "/printer.png";
const scooter ="/ElectricScooter.png";
const architect="/architect.png"
const Design =() => {
  const [design,setDesign] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const fetchCategory   = async ()=>{
      setLoading(true)
      try{
        const response = await fetch(`${getCategory}/category?category=669d9bc7ea1a4f4b5f0296ec`)
        const data = await response.json()
        if(response.status=== 200){
          console.log(data);
          setDesign(data.data)
          setLoading(false)
        }
      }catch(error){
        // console.log(error);
      }
    }
    fetchCategory()
  },[])

  const durationOne =  design[0]?.duration?.slice(0,10);
  const durationTwo =  design[1]?.duration?.slice(0,10);
  const durationThree =  design[2]?.duration?.slice(0,10);

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 

  const daysLeftOne = calculateDaysLeft(durationOne,formattedDate )
const daysLeftTwo = calculateDaysLeft( durationTwo,formattedDate)
const daysLeftThree = calculateDaysLeft(durationThree,formattedDate)
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Design & Tech Projects</h4>
      {loading?<Spinner/> :
      (
      <div className="flex ">
        <div className=" mr-[24px] w-full ">
        <ProjectCard img={printer} height={450} width={746} title={design[0]?.title} owner={`By ${design[0]?.name}`}
         expander={<TextExpander collapsedNumber={134}>{design[0]?.about}</TextExpander>}
          startPrice={design[0]?.amount.toLocaleString('en-US')} endPrice={design[0]?.amount.toLocaleString('en-US')} backers="0 backers"days={`${daysLeftOne} days left`}/>
        </div>
          <div className="flex flex-col">
            <ProjectCard  height={130} width={500}  title={design[1]?.title} owner={`By ${design[1]?.name}`}
             expander={<TextExpander collapsedNumber={25}>{design[1]?.about}</TextExpander>}
              startPrice={design[1]?.amount.toLocaleString('en-US')} endPrice={design[1]?.amount.toLocaleString('en-US')} backers="0 backers" days={`${daysLeftTwo} days left`}img={scooter}/>
              <div className="mt-5"> 
                 <ProjectCard height={130} width={500} title={design[2]?.title} owner={`By ${design[2]?.name}`}
               expander={<TextExpander collapsedNumber={25}>{design[2]?.about}</TextExpander>}
              startPrice={design[2]?.amount.toLocaleString('en-US')} endPrice={design[2]?.amount.toLocaleString('en-US')} backers="0 backers" days={`${daysLeftThree} days left`}img={architect}/>
              </div>
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

export default Design
