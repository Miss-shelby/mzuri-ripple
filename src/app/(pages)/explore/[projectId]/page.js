import { GetProjectsApi } from "@/app/_components/Apis/api";
import Image from "next/image";
import React from "react";
import { GoTag } from "react-icons/go";
import { BsFillGeoFill } from "react-icons/bs";

import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import {
  calculateDaysLeft,
  DateCreated,
} from "@/app/_components/shared/DatesCreated/Left/Dates";
import DashboardNavigation from "@/app/_components/projectsComponent/dashboardLinks";
import ProjectIdSetter from "@/app/_components/shared/ProjectIdSetter";
import { notFound } from "next/navigation";

const ProjectDetailPage = async ({ params }) => {
  const response = await fetch(
    `${GetProjectsApi}/project/${params.projectId}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    notFound();
  }
  const data = await response.json();

  // console.log(data?.data?.backers);

  const backers = data?.data?.backers;


  const {
    name,
    address,
    state,
    amount,
    title,
    about,
    picture_or_video,
    categories,
    created,
    duration,
  } = data?.data;
  const url = `https://ripple-project-1.onrender.com/api/v1/projects/image_or_video/${params.projectId}`;
  const imageUrl = picture_or_video ? `${url}` : "/newproject.png";

  const dateCreated = created?.slice(0, 10);
  const projectduration = duration?.slice(0, 10);

  // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const createdDate = DateCreated(dateCreated, formattedDate);
  const daysLeft = calculateDaysLeft(projectduration, formattedDate);
  //add loading here
  return (
    <section className=" mt-[68px] mb-5">
      <ProjectIdSetter projectId={params.projectId} />
      <p className="pl-[10rem] mb-4 cursor-pointer flex items-center capitalize"><Link href="/explore">
      <MdOutlineArrowBackIosNew /></Link><span className="inline-flex font-bold text-2xl ml-2 capiltalize">{title} </span></p>
      <div className="flex w-full max-w-[1920px] mx-auto px-[10rem]">
      
        <div>
          <div className="relative w-[800px] h-[500px]">
            <Image
              src="/newproject.png"
              alt="Project picture"
              className="w-full h-full object-cover"
              fill
              priority
            />
          </div>
          <p className="text-black-100 mt-6 font-medium text-lg">
            {name} is organizing this fundraiser to benefit the society
          </p>
          <div className="flex mt-6 items-center text-black-100 text-lg font-medium">
            <p className="border-black-100 h-8 pr-4 border-r-2">
              Created {createdDate}{" "}
            </p>
            <p className="flex items-center px-4 border-black-100 h-8   border-r-2 ">
              <GoTag />
              <span className="inline-flex  pl-4">Personal Use </span>
            </p>
            <p className="flex items-center pl-4 ">
              <BsFillGeoFill />{" "}
              <span className="px-5 inline-flex ">{address}</span>
            </p>
          </div>
        </div>
        <div className="card w-[420px] h-fit shadow-2xl ml-6 ">
          <div className="card-body gap-0 px-4 py-6">
            <div className="gradient-border"></div>
            <div id="grad"></div>
            <h2 className="text-custom-green-200 text-2xl font-bold pt-6">
              {amount.toLocaleString('en-US')}
            </h2>
            <p className="font-medium text-sm text-black-100 mt-2">
              {backers?.length > 0
                ? backers.reduce((total, backer) => total + backer.amount, 0).toLocaleString('en-US') +
                  " pledged"
                : "0 pledged"}
            </p>

            <p className="text-custom-green-200 text-2xl font-bold pt-6 ">
              {backers?.length > 0 ? backers?.length : "0"}
            </p>
            <p className="font-medium text-sm text-black-100 mt-2">backers</p>
            <p className="text-custom-green-200 text-2xl font-bold pt-6">
              {daysLeft}
            </p>
            <p className="font-medium text-sm text-black-100 ">days to go</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn text-lg font-medium hover:bg-custom-green-100 h-10 min-h-10 bg-custom-green-200 text-white Back this project w-full">
                <Link href="/payment"> Back this project</Link>
              </button>
              <button className="btn text-lg font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white Back this project w-full">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserDashboard
        backers={backers}
        projectOwner={name}
        imageUrl="/newproject.png"
        projectStory={about}
      />
    </section>
  );
};

const projectLinks = [
  { name: "campaign" },
  { name: "Updates" },
  { name: "Comments" },
];

const UserDashboard = ({ imageUrl, projectOwner, projectStory, backers }) => (
  <div className="mt-9 mb-6">
    <nav>
      <DashboardNavigation
        links={projectLinks}
        backers={backers}
        projectOwner={projectOwner}
        imageUrl={imageUrl}
        projectStory={projectStory}
      />
    </nav>
  </div>
);

export default ProjectDetailPage;
