
import { GetProjectsApi } from '@/app/_components/Apis/api';
import Image from 'next/image';
import React from 'react';
import { GoTag } from 'react-icons/go';
import { BsFillGeoFill } from 'react-icons/bs';
import Link from 'next/link';
import { calculateDaysLeft, DateCreated } from '@/app/_components/shared/DatesCreated/Left/Dates';
import DashboardNavigation from '@/app/_components/projectsComponent/dashboardLinks';
import { IoIosArrowBack } from "react-icons/io";
import ProjectIdSetter from '@/app/_components/shared/ProjectIdSetter';


const ProjectDetailPage = async ({ params }) => {
  
console.log(params.newprojectId,'id here');

  const response = await fetch(`${GetProjectsApi}/project/${params.newprojectId}`,{cache:'no-store'});

  const data = await response.json();
  const backers = data?.data?.backers;
  console.log(backers,'backers here');

  const { name, address, state, amount, title, about, picture_or_video, created, duration } = data?.data;

  const url = `https://ripple-project-1.onrender.com/api/v1/projects/image_or_video/${params.newprojectId}`;
  const imageUrl = picture_or_video ? `${url}` : '/newproject.png';

  const dateCreated = created?.slice(0, 10);
  const projectDuration = duration?.slice(0, 10);

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const createdDate = DateCreated(dateCreated, formattedDate);
  const daysLeft = calculateDaysLeft(projectDuration, formattedDate);

  return (
    <section className=' mb-5 '>
      <ProjectIdSetter projectId={params.newprojectId}/>
      <p className='flex items-center cursor-pointer'><span><Link href="/dashboard/projects "><IoIosArrowBack /></Link></span>Back</p>
      <p className='font-bold text-2xl mb-8 pl-[3rem] mt-[20px]'>{title}</p>
      <div className='flex w-full max-w-[1920px] mx-auto px-[2rem]'>
        <div>
          <div className='relative w-[600px] h-[400px]'>
            <Image src="/newproject.png" alt='Project picture' className='w-full h-full object-cover' fill priority />
          </div>
          <p className='text-black-100 mt-6 font-medium text-lg'>{name} is organizing this fundraiser to benefit the society</p>
          <div className='flex mt-6 items-center text-black-100 text-lg font-medium'>
            <p className='border-black-100 h-8 pr-4 border-r-2'>Created {createdDate}</p>
            <p className='flex items-center px-4 border-black-100 h-8 border-r-2'><GoTag /><span className='inline-flex pl-4'>Personal Use</span></p>
            <p className='flex items-center pl-4'><BsFillGeoFill /> <span className='px-5 inline-flex'>{address}</span></p>
          </div>
        </div>
        <div className="card w-[300px] h-fit shadow-2xl ml-12">
          <div className="card-body gap-0 px-4 py-6">
            <div className="gradient-border"></div>
            <div id="grad"></div>
            <h2 className="text-custom-green-200 text-2xl font-bold pt-6">{amount.toLocaleString('en-US')}</h2>
            <p className='font-medium text-sm text-black-100 mt-2'>pledged of 0 goal</p>
            <p className='text-custom-green-200 text-2xl font-bold pt-6 '>
                      {backers?.length > 0? backers?.length : '0'}
                    </p>
            <p className='font-medium text-sm text-black-100 mt-2'>backers</p>
            <p className='text-custom-green-200 text-2xl font-bold pt-6'>{daysLeft}</p>
            <p className='font-medium text-sm text-black-100'>days to go</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn text-lg font-medium hover:bg-custom-green-100 h-10 min-h-10 bg-custom-green-200 text-white w-full">
                <Link href="/payment">Back this project</Link>
              </button>
              <button className="btn text-lg font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white w-full">Share</button>
            </div>
          </div>
        </div>
      </div>
      <UserDashboard backers={backers}  projectOwner={name} imageUrl="/newproject.png" projectStory={about} />
    </section>
  );
};

const projectLinks = [
  { name: 'Campaign' },
  { name: 'updates' },
  { name: 'comments' },
];

const UserDashboard = ({ imageUrl, projectOwner, projectStory,backers }) => (
  <div className='mt-9 mb-6'>
    <nav>
      <DashboardNavigation backers={backers} links={projectLinks} projectOwner={projectOwner} imageUrl="/newproject.png" projectStory={projectStory} />
    </nav>
  </div>
);

export default ProjectDetailPage;
