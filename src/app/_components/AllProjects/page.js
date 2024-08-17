"use client"
import React from 'react'
import ProjectNavigation from './Navigation'

const AllProjects = ({allProjects,isLoading,error}) => {
  const projectLinks = [
    {
      name: 'All',
      
    },
    {
      name: 'Design &Tech',
     
    },
    {
      name: 'Art &Illustration', 
    },
    {
      name: 'Flim', 
    },
    {
      name: 'Music', 
    },
    {
      name: 'Food & Craft', 
    },
    {
      name: 'Game', 
    },
  ];
  return (
    <div>
        <ProjectNavigation allProjects={allProjects} error={error} isLoading={isLoading} links={projectLinks} />
        </div>
  )
}

export default AllProjects