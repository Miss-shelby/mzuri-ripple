"use client"
import React, { useState } from 'react'
import Arts from './Arts'
import All from './All'
import Design from './Design'

const ProjectNavigation = ({ links}) => {
  const [section,setSection] = useState("All")
  return (
    <>
    <div className=' flex text-sm mt-[103px]'>
        {links.map((link)=>{
            return <li key={link.name}
             className={`cursor-pointer list-none text-lg font-medium mr-6 ${section === link.name? "  border-b-2 border-[#0069D9] " : ""}`}
              onClick={()=> setSection(link.name)}>{link.name}</li>
        })}
    </div>
    <div>
      {section === "All" && <All/>}
      {section === "Art &Illustration" && <Arts/>}
      {section === "Design &Tech" && <Design/>}
    </div>
    </>
  )
}

export default ProjectNavigation