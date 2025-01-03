"use client"
import React from 'react'
import ProjectNavigation from './Navigation'
import MenuPagination from './PaginationMenu';

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
      name: 'Film', 
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
        <MenuPagination allProjects={allProjects} error={error} isLoading={isLoading} links={projectLinks} />
       
        </div>
  )
}

export default AllProjects