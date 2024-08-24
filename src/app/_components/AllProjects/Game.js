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

const Games =() => {
  const [games,setGames] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const fetchCategory   = async ()=>{
      setLoading(true)
      try{
        const response = await fetch(`${getCategory}/category?category=669da05f0eb0c5acbe1ee8f8`)
        const data = await response.json()
        if(response.status=== 200){
          console.log(data);
          setGames(data.data)
          setLoading(false)
        }
      }catch(error){
        // console.log(error);
      }
    }
    fetchCategory()
  },[])
  
  
  
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Games Projects</h4>
      {loading?<Spinner/> :
      (
      <div className="flex ">
        <div className=" grid grid-cols-3 gap-4 mt-8  w-full ">
          {games.map((game)=>{
            return (
              <ProjectCard key={game?.id} img={ss} height={186} width={389} title={game?.title} owner={`By ${game?.name}`}
               expander={<TextExpander collapsedNumber={34}>{game?.about}</TextExpander>}
                startPrice={game?.amount.toLocaleString('en-US')} endPrice={game?.amount.toLocaleString('en-US')} backers="0 backers" days={`${calculateDaysLeft(game?.duration,formattedDate)} days left`}/>
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

export default Games

