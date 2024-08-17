'use client'
import Link from "next/link";
import Campaign from "./campaign";
import Comments from "./comment";
import ProfileCard from "./profileCard";
import Updates from "./updates";
import { useState } from "react";
import CampaignAuth from "./campaignTwo";
import { usePathname } from "next/navigation";
const DashboardNavigation = ({ links,imageUrl,projectOwner,projectStory,backers,projectId}) => {
    const [section,setSection] = useState(links[0].name)
    const pathname = usePathname()
    return (
      <>
      <div className={`flex text-sm justify-center    h-auto border-1  border-t  border-b ` } >
        <div className={`flex w-full    max-w-[1920px] mx-auto ${pathname.includes("dashboard/projects")? " px-[2rem]": "px-[10rem]"}  `}>
            <div className="flex justify-center pt-5 ">
              {links.map((link)=>{
                  return <li key={link.name}
                  className={`cursor-pointer capitalize list-none text-lg font-medium mr-10   ${section === link.name? "p-0 border-b-4 border-black " : ""}`}
                    onClick={()=> setSection(link.name)}>{link.name}</li>
              })}
            </div>
            <div className={`py-4 ${pathname.includes("dashboard/projects")? " ml-[15rem]": "ml-[30rem]"} `}>
            
            <button className="btn text-lg font-medium h-10 min-h-10 bg-custom-green-200 text-white hover:bg-custom-green-100 w-full">
              <Link href="/payment">Back this project</Link> </button>
            </div>
        </div>
      </div>
      <div className={`flex justify-between  w-full 
         max-w-[1920px] mx-auto  ${pathname.includes("dashboard/projects")?" px-[2rem]": "px-[10rem]"}  `}>
      <div>
            {section === "campaign"&& <Campaign  projectOwner={projectOwner} imageUrl ={imageUrl } projectStory={projectStory} />}
              {section === "Campaign" && <CampaignAuth projectOwner={projectOwner} projectId={projectId} imageUrl ={imageUrl } projectStory={projectStory} />}
            {section === "Updates" && <Updates projectOwner={projectOwner} />}
            {section === "Comments" && <Comments projectOwner={projectOwner} imageUrl ={imageUrl } projectStory={projectStory}/>}
       </div>
       <ProfileCard projectOwner={projectOwner} backers={backers}  projectStory={projectStory}/>
      </div>
      </>
    )
  }

 export default DashboardNavigation ; 