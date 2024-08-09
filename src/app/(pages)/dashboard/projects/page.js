"use client";

import { useEffect, useState } from "react";
import { getUserProjects } from "@/app/_components/Apis/api";
import Cookies from "js-cookie";
import Image from "next/image";
import { ProjectCard } from "@/app/_components/ProjectCard";
import TextExpander from "@/app/_components/shared/TextExpander";
import Link from "next/link";
import Spinner from "@/app/_components/spinner";
import { DateCreated } from "@/app/_components/shared/DatesCreated/Left/Dates";

const UserProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");

    const fetchProjects = async () => {
      if (token) {
        setLoading(true);
        const response = await fetch(`${getUserProjects}`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await response.json();
        console.log(json);
        setProjects(json.data);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);



  
  // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); 

console.log(projects);
  return (
        <div className="pt-4 text-custom-black flex flex-col items-center justify-center w-full ">
      <h2 className="mb-6 text-lg font-medium capitalize">my projects</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {projects.length > 0? (
          <div className="grid grid-cols-2 items-center justify-center gap-x-10 gap-y-6   w-full">
            {projects.map((project) => {
              return (
                <Link
                  href={`/dashboard/projects/${project.id}`}
                  key={project.id}
                >
                  <div className="card bg-base-100 image-full w-96 rounded-lg  shadow-xl ">
                    <figure>
                      <Image fill
                        src="/story.png"
                        alt="project image"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{project.title}</h2>
                      <p>Created {DateCreated(project.created.slice(0,10),formattedDate)}</p>
                      <div className="card-actions justify-end">
                        <button className="btn border-0 text-lg hover:bg-custom-blue text-center font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white">
                          <Link href={`/dashboard/projects/${project.id}`}>View</Link></button>
                      </div>
                    </div>
                  </div>
                 
                </Link>
              );
            })}
          </div>
          ) :<p>You havent created a project yet,click <Link className="underline text-custom-blue" href="/project">here</Link> to get you started</p>}
        </div>
      )}
    </div>
  );
};

export default UserProjects;
