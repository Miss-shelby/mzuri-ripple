import React from 'react'
import { RecommendedProjectCard } from '../ProjectCard'

const RecommendedProjects = () => {
    const RecommendedProject = [
        {
          image: "/doctor.png",
          title: "Help Asian Woman",
          owner: "By Province No. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: "Rs. 1,00,000",
          endPrice: "Rs. 1,00,00,000",
          backers: "250 backers ",
          days: "36 days left",
          profileName:"Shan chi",
          location:"Jumla, Nepal",
          image2:"/avatar.png"
        },
        {
            image: "/clean.png",
          title: "Clean Bagmati",
          owner: "By Kismat Shah",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales.  ",
          startPrice: "Rs. 1,00,000",
          endPrice: "Rs. 10,00,000",
          backers: "250 backers ",
          days: "36 days left",
          profileName:"Minister of Kathmandu",
          location:"Kathmandu, Nepal",
          image2:"/womanMinister.png"
        },
        {
        title: "Build Dog Shelter",
        image: "/Dog.png",
          owner: "By Humla’s Resident",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: "Rs. 10,000",
          endPrice: "Rs. 1,00,000",
          backers: "250 backers ",
          days: "36 days left",
          profileName:"Sharshlov Amatya",
          location:"Kathmandu, Nepal",
          image2:"/sharshlov.png"
        },
      ];
  return (
    
    <div>
        <h4 className='text-black-100 font-bold text-2xl mt-[6rem] mb-7'>Recommended Projects</h4>
        <div className='flex w-full space-x-4'>
            {RecommendedProject.map((project)=>{
                return (<RecommendedProjectCard  title={project.title} height={100} width={100}
                    img={project.image} startPrice={project.startPrice} endPrice={project.endPrice}
                     description={project.description} days={project.days} 
                     key={project.title} backers={project.backers}
                     img2={project.image2} profilename={project.profileName} location={project.location}
                     height2={10} width2={10}
                     />)
            })}
            <hr/>
        </div>
        <p className='text-black-100 font-500 text-right mt-10 mr-4'>See all recommendation</p>
        </div>
        
  )
}

export default RecommendedProjects