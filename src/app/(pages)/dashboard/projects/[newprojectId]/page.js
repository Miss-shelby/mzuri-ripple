import { GetProjectsApi } from '@/app/_components/Apis/api';
import Image from 'next/image';
import React from 'react';
import { GoTag } from 'react-icons/go';
import { BsFillGeoFill } from 'react-icons/bs';
import Link from 'next/link';
import { calculateDaysLeft, DateCreated } from '@/app/_components/shared/DatesCreated/Left/Dates';
import { IoIosArrowBack } from "react-icons/io";
import ProjectIdSetter from '@/app/_components/shared/ProjectIdSetter';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const DashboardNavigation = dynamic(() => import('@/app/_components/projectsComponent/dashboardLinks'));

const ProjectDetailPage = async ({ params }) => {
  let data;
  try {
    const response = await fetch(`${GetProjectsApi}/project/${params.newprojectId}`, { next: { revalidate: 60 } });
    if (response.ok) {
      data = await response.json();
    } else {
      notFound();
    }
  } catch (error) {
    notFound();
  }

  if (!data || !data.data) {
    notFound();
  }

  const backers = data.data.backers;
  const { name, address, amount, title, about, picture_or_video, created, duration } = data.data;

  const url = `https://ripple-project-1.onrender.com/api/v1/projects/image_or_video/${params.newprojectId}`;
  const imageUrl = picture_or_video ? url : '/newproject.png';

  const dateCreated = created?.slice(0, 10);
  const projectDuration = duration?.slice(0, 10);

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const createdDate = DateCreated(dateCreated, formattedDate);
  const daysLeft = calculateDaysLeft(projectDuration, formattedDate);

  return (
    <section className='mb-5 w-full '>
      <ProjectIdSetter projectId={params.newprojectId} />
      <Link href="/dashboard/projects">
        <p className='flex items-center cursor-pointer'>
          <span><IoIosArrowBack /></span>Back
        </p>
      </Link>
      <p className='font-bold lg:text-2xl md:text-xl text-lg  lg:mb-8 mb-4 lg:pl-[3rem] mt-[20px] capitalize'>{title}</p>
      <div className='flex flex-col lg:flex-row w-full max-w-[1920px]  mx-auto  '>
        <div className="w-full  ">
          <div className='relative w-full h-[300px] sm:h-[400px]'>
            <Image src='/newproject.png' alt='Project picture' className='w-full h-full object-cover' fill priority />
          </div>
          <p className='text-black-100 mt-6 font-medium lg:text-lg text-sm text-justify capitalize'>{name} is organizing this fundraiser to benefit the society</p>
          <div className='flex flex-wrap mt-6 items-center text-black-100 text-lg font-medium'>
            <p className='border-black-100 h-8 lg:pr-4 pr-2 border-r-2'>Created {createdDate}</p>
            <p className='flex items-center lg:px-4 px-2 border-black-100 h-8 border-r-2'><GoTag /><span className='inline-flex pl-4'>Personal Use</span></p>
            <p className='flex items-center lg:pl-4 pl-2'><BsFillGeoFill /> <span className='px-5 inline-flex'>{address}</span></p>
          </div>
        </div>

        {/* Project Detail Card */}
        <div className="w-full sm:w-[300px] lg:w-full mt-6 lg:mt-0 lg:ml-12 card shadow-2xl">
          <div className="card-body gap-0 px-4 py-6">
            <div className="gradient-border"></div>
            <div id="grad"></div>
            <h2 className="text-custom-green-200 lg:text-2xl text-lg  font-bold pt-6">{amount.toLocaleString('en-US')}</h2>
            <p className='font-medium text-sm text-black-100 mt-2'>
              {backers?.length > 0
                ? backers.reduce((total, backer) => total + backer.amount, 0).toLocaleString('en-US') + " pledged"
                : "0 pledged"}

            </p>
            <p className='text-custom-green-200 text-lg lg:text-2xl font-bold pt-6 '>
              {backers?.length > 0 ? backers.length : '0'}
            </p>
            <p className='font-medium text-sm text-black-100 mt-2'>backers</p>
            <p className='text-custom-green-200 text-2xl font-bold pt-6'>{daysLeft}</p>
            <p className='font-medium text-sm text-black-100'>days to go</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn lg:text-lg text-sm  font-medium hover:bg-custom-green-100 h-10 min-h-10
               bg-custom-green-200 text-white w-full">
                <Link href={`/payment`}>Back this project</Link>
              </button>
              <button className="btn lg:text-lg text-sm  font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white w-full">Share</button>
            </div>
          </div>
        </div>
      </div>
      <UserDashboard backers={backers} projectId={params.newprojectId} projectOwner={name} imageUrl={imageUrl} projectStory={about} />
    </section>
  );
};

const projectLinks = [
  { name: 'Campaign' },
  { name: 'Updates' },
  { name: 'Comments' },
];

const UserDashboard = ({ imageUrl, projectOwner, projectId, projectStory, backers }) => (
  <div className='mt-9 mb-6'>
    <nav>
      <DashboardNavigation projectId={projectId} backers={backers} 
      links={projectLinks} projectOwner={projectOwner} imageUrl="/newproject.png" projectStory={projectStory} />
    </nav>
  </div>
);

export default ProjectDetailPage;
