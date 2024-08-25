// "use client"
// import Image from "next/image";
// import AllProjects from "./_components/AllProjects/page";
// import RecommendedProjects from "./_components/RecommendedProjects";
// import ProjectNearMe from "./_components/ProjectNearMe";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { Suspense, useEffect, useState } from "react";
// import axios from "axios";
// import { GetProjectsApi } from "./_components/Apis/api";
// import FilterProjects from "./_components/Filter";
// import { toast } from "react-toastify";
// import ProjectFigures from "./_components/ProjectFigures/ProjectFigures";
// const line = "/Line 3.png";

// export default function Home() {
 
//   const [allProjects,setAllProjects] = useState([])
//   const [isLoading,setIsLoading] = useState(true)
//   const[error,setError] = useState('')
//     const handleFetch = ()=>{
//       setIsLoading(true)
//       axios.get(`${GetProjectsApi}`,{
//       })
//      .then(function (response) {
//     if(response.status === 200){
//       setAllProjects(response.data.data)
//       console.log(allProjects);
//       setIsLoading(false)
//     }
  
//     })
//    .catch(function (error) {
//     // handle error
//     console.log(error);
//     setError(error)
   
//     setIsLoading(false)
//      });
//     }
//     useEffect(()=>{
//       handleFetch()
    
      
//      },[])



//   return (
//     <main className="pt-[4rem] w-full max-w-[1920px] mx-auto   px-[10rem] bg-white">
//       <div className="flex flex-col lg:flex-row  justify-between w-full items-center">
//           <div>
//             <div>
//               <p className="text-4xl xl:text-6xl lg:text-4xl text-black-100 leading-[4rem] font-medium">
//                 Discover The Best and brightest Projects</p>
//               <p className=" font-normal  pt-[32px]">
//                 Support creative worker and see the buildup of the project with each
//                 updates.
//               </p>
//               <p className="text-sm "> Back it and believe it.</p>
//             </div>
//            <FilterProjects allProjects={allProjects}/>
//           </div>
//           <div className="relative ">
//             <Image src="/animation1.gif" alt="animation" height={377} width={600}/>
//           </div>
//       </div>
//         <Suspense><ProjectFigures/></Suspense>
//       <AllProjects allProjects={allProjects} isLoading={isLoading} error={error}/>
//       <RecommendedProjects error={error}  allProjects={allProjects}  isLoading={isLoading} />

//       <div className="flex items-center justify-between mt-5">
//         <div>
//           <h5 className="text-black-100 text-4xl font-[700] pt-20">
//             Don’t miss new wonderful Projects
//           </h5>
//           <p className="text-black-100 font-medium text-2xl pt-6">
//             Sign up for new projects and updates
//           </p>
//           <div className="mt-[44px] flex items-center">
//             <input
//               placeholder="Enter Your E-mail"
//               type="text"
//               className="shadow-xl bg-[#F1F1F1] text-[#9D9D9D] w-[38rem] pl-4 py-2 rounded-[3px]"
//             />
//             <button className="btn text-white hover:text-custom-blue capitalize  bg-custom-blue px-10 h-10 min-h-10  ml-[20px] rounded-[5px]">
//               subscribe
//             </button>
//         </div>
//         </div>
//         <div className="relative ">
//             <Image src="/mail.gif" alt="animation" height={300} width={300}/>
//           </div>
//       </div>
//       <ProjectNearMe error={error} allProjects={allProjects} isLoading={isLoading} />
//     </main>
//   );
// }


"use client"
import Image from "next/image";
import { Suspense, useEffect, useState, lazy } from "react";
import axios from "axios";
import { GetProjectsApi } from "./_components/Apis/api";
import { toast } from "react-toastify";

// Lazily load components
const AllProjects = lazy(() => import("./_components/AllProjects/page"));
const RecommendedProjects = lazy(() => import("./_components/RecommendedProjects"));
const ProjectNearMe = lazy(() => import("./_components/ProjectNearMe"));
const FilterProjects = lazy(() => import("./_components/Filter"));
const ProjectFigures = lazy(() => import("./_components/ProjectFigures/ProjectFigures"));

const line = "/Line 3.png";

export default function Home() {
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const handleFetch = () => {
    setIsLoading(true);
    axios.get(`${GetProjectsApi}`)
      .then(function (response) {
        if (response.status === 200) {
          setAllProjects(response.data.data);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="pt-[4rem] w-full max-w-[1920px] mx-auto px-[10rem] bg-white">
      <div className="flex flex-col lg:flex-row justify-between w-full items-center">
        <div>
          <div>
            <p className="text-4xl xl:text-6xl lg:text-4xl text-black-100 leading-[4rem] font-medium">
              Discover The Best and Brightest Projects
            </p>
            <p className="font-normal pt-[32px]">
              Support creative workers and see the buildup of the project with each update.
            </p>
            <p className="text-sm">Back it and believe it.</p>
          </div>
          <Suspense fallback={<div>Loading filter projects...</div>}>
            <FilterProjects allProjects={allProjects} />
          </Suspense>
        </div>
        <div className="relative">
          <Image src="/animation1.gif" alt="animation" height={377} width={600} />
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
      <div className="flex items-center justify-between mt-5">
        <div>
          <h5 className="text-black-100 text-4xl font-[700] pt-20">
            Don’t miss new wonderful Projects
          </h5>
          <p className="text-black-100 font-medium text-2xl pt-6">
            Sign up for new projects and updates
          </p>
          <div className="mt-[44px] flex items-center">
            <input
              placeholder="Enter Your E-mail"
              type="text"
              className="shadow-xl bg-[#F1F1F1] text-[#9D9D9D] w-[38rem] pl-4 py-2 rounded-[3px]"
            />
            <button className="btn text-white hover:text-custom-blue capitalize bg-custom-blue px-10 h-10 min-h-10 ml-[20px] rounded-[5px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="relative">
          <Image src="/mail.gif" alt="animation" height={300} width={300} />
        </div>
      </div>
      <Suspense fallback={<div>Loading projects near me...</div>}>
        <ProjectNearMe error={error} allProjects={allProjects} isLoading={isLoading} />
      </Suspense>
    </main>
  );
}

