import React from 'react'
import { ProjectCard } from '../ProjectCard';

const ProjectNearMe = () => {
    const ProjectsNear = [
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
    <div>
      <h4 className='text-black-100 font-bold text-2xl mt-20 ' >Projects Near You</h4>
      <div className='grid grid-cols-3 gap-4 mt-6 mb-[122px] w-full'>
      {ProjectsNear.map((project)=>{
        return (
            <ProjectCard key={project.title} title={project.title} 
            description={project.description} 
            startPrice={project.startPrice} endPrice={project.endPrice} location={project.location}
             img={project.image} height={100} width={100}/>
        )
      })}
      </div>

    </div>
  )
}

export default ProjectNearMe
