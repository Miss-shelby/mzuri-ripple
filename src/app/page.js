import Image from "next/image";
import AllProjects from "./_components/AllProjects/page";
import RecommendedProjects from "./_components/RecommendedProjects";
import ProjectNearMe from "./_components/ProjectNearMe";
import { TbCurrencyNaira } from "react-icons/tb";
const line = "/Line 3.png";
const search = "/bi_search.png";
export default function Home() {
  return (
    <main className="pt-[4rem] w-full max-w-[1920px] mx-auto   px-[10rem] bg-white">
      <div className="flex justify-between w-full items-center">
          <div>
            <div>
              <p className="text-6xl text-black-100 leading-[4rem] font-medium">
                Discover The Best and brightest Projects</p>
              <p className=" font-normal  pt-[32px]">
                Support creative worker and see the buildup of the project with each
                updates.
              </p>
              <p className="text-sm "> Back it and believe it.</p>
            </div>
            <div className="mt-[32px] flex items-center">
              <input
                placeholder="Search Projects"
                type="text"
                className="shadow-xl bg-[#F1F1F1] text-[#9D9D9D] w-[25rem] pl-4 py-2 rounded-[3px]"
              />
              <button className="btn btn-square bg-[#0069D9] ml-[20px] w-9 h-9 min-h-9 rounded-[4px]">
                <Image src={search} height={15} width={15} alt="search icon" />
              </button>
            </div>
          </div>
          <div className="relative ">
            <Image src="/animation1.gif" alt="animation" height={377} width={600}/>
          </div>
      </div>
      <p className="text-center font-medium text-lg  pt-10 pb-7">
        Within The Last Day
      </p>
      <div className="bg-[#F5F5F5] flex justify-between px-[3rem] w-full py-4 mb-[4rem]">
        <div className="flex flex-col items-center justify-center text-black-100">
          <p className="text-[28px] font-[600] ">50</p>
          <p className="font-medium text-lg">Projects Funded</p>
        </div>
        <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2">
          {" "}
        </div>
        <div className="flex flex-col items-center justify-center text-black-100">
          <p className="text-[28px] font-[600] flex items center"><span className="inline-flex items-center"><TbCurrencyNaira /></span> 1,00,00,000</p>
          <p className="font-medium  text-lg">Towards Creative Work</p>
        </div>
        <div className="inline-block border-l border-1 h-15 border-[#525252] ml-2">
          {" "}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[28px] font-[600]">15,000</p>
          <p className="font-medium text-lg">Project Backing</p>
        </div>
      </div>
      <AllProjects />
      <RecommendedProjects />
      <div className="flex items-center justify-between">
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
            <button className="btn text-white  bg-custom-blue px-10 h-10 min-h-10  ml-[20px] rounded-[5px]">
              suscribe
            </button>
        </div>
        </div>
        <div className="relative ">
            <Image src="/mail.gif" alt="animation" height={300} width={300}/>
          </div>
      </div>
      <ProjectNearMe />
    </main>
  );
}
