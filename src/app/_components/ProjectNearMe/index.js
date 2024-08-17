import React from 'react'
import { ProjectCard } from '../ProjectCard';
import TextExpander from '../shared/TextExpander';
import Spinner from '../spinner';
import Link from 'next/link';
import { MdOutlineNavigateNext } from 'react-icons/md';

const ProjectNearMe = ({allProjects,isLoading,error}) => {
    const ProjectsNear = [
        {
          image: "/clean2.png",
          title: "Clean Bagmati",
          location: "Kathmandu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: " 1,00,000",
          endPrice: " 1,00,00,000",
         
        },
        {
            image: "/accident.png",
          title: "Accident Victim",
          location: "Kathmandu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
          startPrice: " 1,00,000",
          endPrice: " 10,00,000",
         
        },
        {
          title: "Build a Shelter",
          image: "/shelter.png",
          location: "Kathmandu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: " 10,000",
          endPrice: " 1,00,000",
          
        },
        {
            title: "Eathquake Victim",
            image: "/EarthQuake.png",
            location: "Gorkha",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
            startPrice: " 10,000",
            endPrice: " 1,00,000",
           
          },
          {
            title: "Help Kids Study",
            image: "/kids.png",
            location: "Pokhara",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
            startPrice: " 10,000",
            endPrice: "1,00,000",
           
          },
          {
            title: "Save Rhino",
            image: "/rhino.png",
            location: "Chitwan",
            description:
              "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
            startPrice: " 10,000",
            endPrice: " 1,00,000",
           
          },
      ];
      const moreProjects = allProjects.slice(0,6)
     
     
      
  return (
    <div>
      <h4 className='text-black-100 font-bold text-2xl mt-20 ' >More Projects</h4>
      {isLoading?(<Spinner/>) : error?<p className='text-red-500 capitalize font-medium mt-4'>Failed to load more projects😓 </p> :(
      <div className='grid grid-cols-3 gap-4 mt-6  w-full'>
      {moreProjects.map((project)=>{
        return (
            <ProjectCard key={project?.id} title={project?.title} 
            description={
              <TextExpander collapsedNumber={50}>
                {project?.about}
              </TextExpander>
            }
            startPrice={project?.amount} endPrice={project?.amount} location={project?.address}
             img="/kids.png" height={186} width={389}/>
        )
      })}
      </div>
      )}
      <div className="flex text-right items-center justify-end mt-4 mb-[122px] ">
      <p className=" text-black-100 font-medium capitalize text-lg"><Link href='/explore'>See more projects</Link> </p>
        <p className=""><MdOutlineNavigateNext /></p>
      </div>
    </div>
  )
}

export default ProjectNearMe
