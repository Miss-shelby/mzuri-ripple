import React from 'react'
import { RecommendedProjectCard } from '../ProjectCard'
import Spinner from '../spinner';
import { calculateDaysLeft } from '../shared/DatesCreated/Left/Dates';
import TextExpander from '../shared/TextExpander';

const RecommendedProjects = ({allProjects,isLoading}) => {
    const RecommendedProject = [
        {
          image: "/doctor.png",
          title: "Help Asian Woman",
          owner: "By Province No. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
          startPrice: " 1,00,000",
          endPrice: " 1,00,00,000",
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
          startPrice: " 1,00,000",
          endPrice: " 10,00,000",
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
          startPrice: " 10,000",
          endPrice: " 1,00,000",
          backers: "250 backers ",
          days: "36 days left",
          profileName:"Sharshlov Amatya",
          location:"Kathmandu, Nepal",
          image2:"/sharshlov.png"
        },
      ];

      const newProjects = allProjects.slice(-3)
      console.log(newProjects,'latest projects');
      

       // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 
  
  return (
    
    <div>
        <h4 className='text-black-100 font-bold text-2xl mt-[6rem] mb-7'>Latest Projects</h4>
        {isLoading? 
        (<Spinner/>)
         : 
        (
        <div className='flex w-full space-x-4'>
            {newProjects.map((project)=>{
                return (<RecommendedProjectCard   title={project?.title} height={100} width={100}
                    img='/Dog.png' startPrice={project?.amount} endPrice={project?.amount}
                    // description={project?.about}
                    description={
                      <TextExpander collapsedNumber={50}>
                        <p dangerouslySetInnerHTML={{ __html: project?.about }} className="text-[13px] font-normal flex-grow-0"></p>
                      </TextExpander>
                    }
                     days={calculateDaysLeft(project?.duration,formattedDate)} 
                     key={project?.title} backers="0"
                     img2='/sharshlov.png' profilename={project?.name} location={project?.address}
                     height2={10} width2={10}
                     />)
            })}
            <hr/>
        </div>
        )
        }
        {/* <p className='text-black-100 font-500 text-right mt-10 mr-4'>See all recommendation</p> */}
        </div>
        
  )
}

export default RecommendedProjects