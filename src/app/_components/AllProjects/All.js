import Image from "next/image";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { ProjectCard } from "../ProjectCard";
import Link from "next/link";
const bika = "/Bikah.png";
const scooter ="/ElectricScooter.png";
const library ="/library.png"
const All = () => {
  const featuredProducts = [
    {
      image: "/Bikah.png",
      title: "Gaun Bikas Project",
      owner: "By Province No. 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. Turpis nec integer malesuada iaculis. Venenatis, ut nulla nibh convallis. Sapien luctus in nullam nisi, mi vulputate ultrices convallis diam.",
      startPrice: "Rs. 1,00,000",
      endPrice: "Rs. 1,00,00,000",
      backers: "250 backers ",
      days: "36 days left",
    },
    {
      image: "/ElectricScooter.png",
      title: "Electric Scooter",
      owner: "By Kismat Shah",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
      startPrice: "Rs. 1,00,000",
      endPrice: "Rs. 10,00,000",
      backers: "250 backers ",
      days: "36 days left",
    },
    {
      title: "Open Library",
      image: "/ElectricScooter.png",
      owner: "By Humla’s Resident",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. ",
      startPrice: "Rs. 10,000",
      endPrice: "Rs. 1,00,000",
      backers: "250 backers ",
      days: "36 days left",
    },
  ];
  return (
    <div className="w-full">
      <h4 className="font-bold text-xl my-8">Featured Projects</h4>
      <div className="flex w-full ">
        <div className=" mr-[20px] w-full ">
        <ProjectCard img={bika} height={450} width={680} title='Gaun Bikas Project' owner='By Province No. 1'
         longDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, 
         lobortis ac nunc ut malesuada aliquet nulla sodales. Turpis nec integer malesuada iaculis.
          Venenatis, ut nulla nibh convallis. Sapien luctus in nullam nisi, mi vulputate ultrices convallis diam.'
          startPrice='Rs. 1,00,000' endPrice="Rs. 1,00,00,000" backers="250 backers" days="36 days left"/>
        </div>
          <div className="flex flex-col ">
            <ProjectCard  height={130} width={500}  title='Electric Scooter' owner='By Kismat Shah'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. '
              startPrice='Rs. 1,00,000' endPrice="Rs. 1,00,00,000" backers="250 backers" days="36 days left" img={scooter}/>
              <div className="mt-3">
                 <ProjectCard height={130} width={500} title='Open Library' owner='By Humla’s Resident'
               description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, lobortis ac nunc ut malesuada aliquet nulla sodales. '
              startPrice='Rs. 1,00,000' endPrice="Rs. 1,00,00,000" backers="250 backers" days="36 days left" img={library}/>
                
              </div>
          </div>
      </div> 
      <div className="flex text-right items-center justify-end mt-10">
      <p className=" text-black-100 font-medium "><Link href='/explore'>See all projects</Link> </p>
        <p className=""><MdOutlineNavigateNext /></p>
      </div>
    </div>
  );
};

export default All;


