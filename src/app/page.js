
"use client"
import Image from "next/image";
import { Suspense, useEffect, useState, lazy } from "react";

import { useFetchProjects } from "./_components/hook/custom/useFetchProjects";

// Lazily load components
const AllProjects = lazy(() => import("./_components/AllProjects/page"));
const RecommendedProjects = lazy(() => import("./_components/RecommendedProjects"));
const ProjectNearMe = lazy(() => import("./_components/ProjectNearMe"));
const FilterProjects = lazy(() => import("./_components/Filter"));
const ProjectFigures = lazy(() => import("./_components/ProjectFigures/ProjectFigures"));

const line = "/Line 3.png";

export default function Home() {
  const {allProjects,isLoading,error,handleFetch} = useFetchProjects()

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="mt-[6rem] w-full lg:max-w-[1920px] mx-auto px-5 lg:px-[10rem] bg-white">
      <div className="flex flex-col justify-center  lg:flex-row lg:justify-between w-full items-center ">
        <div>
          <p className="text-2xl xl:text-6xl lg:text-4xl text-black-100 lg:leading-[4rem] font-medium">
            Discover The Best and Brightest Projects
          </p>
          <p className="font-normal pt-2 lg:pt-[32px]">
            Support creative workers and see the buildup of the project with each update.
          </p>
          <p className="text-sm">Back it and believe it.</p>
        </div>
          <Suspense fallback={<div>Loading filter projects...</div>}>
            <FilterProjects allProjects={allProjects} />
          </Suspense>
        <div className="relative">
        <video autoPlay loop muted playsInline>
        <source src="/convertedgif.mp4" type="video/mp4" />
        <source src="/convertedgif.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
          {/* <Image src="/animation1.gif" alt="animation" height={377} width={600} /> */}
        </div>
      </div>
      <Suspense fallback={<div>Loading project figures...</div>}>
        <ProjectFigures />
      </Suspense>
      <Suspense fallback={<div>Loading all projects...</div>}>
        <AllProjects allProjects={allProjects} isLoading={isLoading} error={error} />
      </Suspense>
      <Suspense fallback={<div>Loading recommended projects...</div>}>
        <RecommendedProjects error={error} allProjects={allProjects} isLoading={isLoading} />
      </Suspense>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-5 w-full">
        <div className="w-full">
          <h5 className="text-black-100 lg:text-4xl text-2xl  font-[700] pt-20">
            Don’t miss new wonderful Projects
          </h5>
          <p className="text-black-100 font-medium lg:text-2xl text-xl pt-6">
            Sign up for new projects and updates
          </p>
          <div className="mt-[44px] flex flex-wrap items-center">
            <input
              placeholder="Enter Your E-mail"
              type="text"
              className="shadow-xl w-full  bg-[#F1F1F1] text-[#9D9D9D] lg:w-[38rem] pl-4 py-2 rounded-[3px]"
            />
            <button className="btn text-white w-full mt-2 lg:mt-0 lg:w-fit hover:text-custom-blue capitalize bg-custom-blue px-10 h-10 min-h-10 lg:ml-[20px] rounded-[5px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="relative">
          <video autoPlay loop muted playsInline>
          <source src="/convertedMailGif.mp4" type="video/mp4" />
          <source src="/convertedMailGif.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
          
        </div>
      </div>
      <Suspense fallback={<div>Loading projects near me...</div>}>
        <ProjectNearMe error={error} allProjects={allProjects} isLoading={isLoading} />
      </Suspense>
    </main>
  );
}

