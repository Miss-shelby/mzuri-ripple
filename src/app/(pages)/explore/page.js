import React from 'react'
import { ProjectCard } from '@/app/_components/ProjectCard';
import Link from 'next/link';


const ExplorePage = () => {
    const allProjects = [
        {
          image: "/clean2.png",
          title: "Clean Bagmati",
          location: "Kathmandu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: "Rs. 1,00,000",
          endPrice: "Rs. 1,00,00,000",
         
        },
        {
            image: "/accident.png",
          title: "Accident Victim",
          location: "Kathmandu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
          startPrice: "Rs. 1,00,000",
          endPrice: "Rs. 10,00,000",
         
        },
        {
          title: "Build a Shelter",
          image: "/shelter.png",
          location: "Kathmandu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: "Rs. 10,000",
          endPrice: "Rs. 1,00,000",
          
        },
        {
            title: "Eathquake Victim",
            image: "/EarthQuake.png",
            location: "Gorkha",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
            startPrice: "Rs. 10,000",
            endPrice: "Rs. 1,00,000",
           
          },
          {
            title: "Help Kids Study",
            image: "/kids.png",
            location: "Pokhara",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
            startPrice: "Rs. 10,000",
            endPrice: "Rs. 1,00,000",
           
          },
          {
            title: "Save Rhino",
            image: "/rhino.png",
            location: "Chitwan",
            description:
              "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
            startPrice: "Rs. 10,000",
            endPrice: "Rs. 1,00,000",
           
          },
          {
            image: "/clean2.png",
            title: "Clean Bagmati",
            location: "Kathmandu",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
            startPrice: "Rs. 1,00,000",
            endPrice: "Rs. 1,00,00,000",
           
          },
          {
              image: "/accident.png",
            title: "Accident Victim",
            location: "Kathmandu",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
            startPrice: "Rs. 1,00,000",
            endPrice: "Rs. 10,00,000",
           
          },
          {
            title: "Build a Shelter",
            image: "/shelter.png",
            location: "Kathmandu",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
            startPrice: "Rs. 10,000",
            endPrice: "Rs. 1,00,000",
            
          },
          {
              title: "Eathquake Victim",
              image: "/EarthQuake.png",
              location: "Gorkha",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
              startPrice: "Rs. 10,000",
              endPrice: "Rs. 1,00,000",
             
            },
            {
              title: "Help Kids Study",
              image: "/kids.png",
              location: "Pokhara",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
              startPrice: "Rs. 10,000",
              endPrice: "Rs. 1,00,000",
             
            },
            {
              title: "Save Rhino",
              image: "/rhino.png",
              location: "Chitwan",
              description:
                "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
              startPrice: "Rs. 10,000",
              endPrice: "Rs. 1,00,000",
             
            },
      ];
  return (
    <div className='w-full max-w-[1920px] mx-auto min-h-screen  px-[10rem] bg-white'>
      <h4 className='text-black-100 font-bold text-2xl mt-10 ' >Explore</h4>
      <div className='grid grid-cols-3 gap-4 mt-6  w-full'>
      {allProjects.map((project)=>{
        return (
            <ProjectCard key={project.title} title={project.title} 
            description={project.description} 
            startPrice={project.startPrice} endPrice={project.endPrice} location={project.location}
             img={project.image} height={186} width={389}/>
        )
      })}
      </div>
      <div className='flex justify-center mt-[53px]'>
    <button className='font-medium mb-16 px-[30px] rounded-[6px] py-2 text-lg bg-custom-blue text-center text-white'>
     <Link href="/getstarted"> Load More</Link></button>
      </div>
    </div>
  )
}

export default ExplorePage
