import React from 'react'
import { ProjectCard } from '../ProjectCard'
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';

// images here
const printer = "/printer.png";
const scooter ="/ElectricScooter.png";
const architect="/architect.png"


const Design = () => {
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Featured Projects</h4>
      <div className="flex ">
        <div className=" mr-[24px] w-full ">
        <ProjectCard img={printer} height={474} width={746} title='3D Printer' owner='By Someone'
         longDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, 
         lobortis ac nunc ut malesuada aliquet nulla sodales. Turpis nec integer malesuada iaculis.
          Venenatis, ut nulla nibh convallis. Sapien luctus in nullam nisi, mi vulputate ultrices convallis diam.'
          startPrice='Rs. 1,00,000' endPrice="Rs. 1,00,00,000" backers="250 backers" days="36 days left"/>
        </div>
          <div className="flex flex-col">
            <ProjectCard  height={130} width={500}  title='Electric Scooter' owner='By Kismat Shah'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. '
              startPrice='Rs. 1,00,000' endPrice="Rs. 1,00,00,000" backers="250 backers" days="36 days left" img={scooter}/>
              <div className="mt-3">
                 <ProjectCard height={130} width={500} title='Architect Design' owner='By Someone'
               description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. '
              startPrice='Rs. 1,00,000' endPrice="Rs. 1,00,00,000" backers="250 backers" days="36 days left" img={architect}/>
                
              </div>
          </div>
      </div> 
      <div className="flex text-right items-center justify-end mt-10">
      <p className=" text-black-100 font-medium "><Link href='/explore'>See all projects</Link> </p>
        <p className=""><MdOutlineNavigateNext /></p>
      </div>
    </div>
  )
}

export default Design
