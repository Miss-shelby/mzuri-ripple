import Image from "next/image";
import React from "react";
import { TbWorld } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";
import { PiChartLineUp } from "react-icons/pi";
import Link from "next/link";


const dollarImg = "/dollar.png";
const left= '/Left.png'
const right= '/Right.png'
const kids='/Helping Kids.png'
const key_icon ='/bi_key.png'
const headPhoneIcon="/headphone.png"

const data = [
  {
    icon: <TbWorld />,
    title: "Worldwide Leader",
    description: "Ripple is trusted around the world for its simple, reliable fundraising platform.",
  },
  {
    icon: <CiClock2 />,
    title: "Simple Setup",
    description: "You can personalize and share your GoFundMe in just a few minutes.",
  },
  {
    icon: <Image src={key_icon} alt="key icon" width={20} height={20} />,
    title: "Secure",
    description: "Our Trust & Safety team works around the clock to protect against fraud.",
  },
  {
    icon: <CiMobile2 />,
    title: "Mobile App",
    description: "The Ripple app makes it simple to launch and manage your fundraiser on the go.",
  },
  {
    icon: <PiChartLineUp />,
    title: "Social Reach",
    description: "Harness the power of social media to spread your story and get more support.",
  },
  {
    icon: <Image src={headPhoneIcon} alt="headphone icon" width={20} height={20} />,
    title: "Expert Advice",
    description: "Our best-in-class Customer Care agents will answer your questions, day or night.",
  },
]
const GetStarted = () => {
  return (
    <section >
      <div className=" max-w-[1920px] mx-auto px-5 w-full   lg:px-[10rem] bg-white ">

          <div className="flex flex-col items-center justify-center mt-[2rem] sm:pt-[6.4rem] text-black-100 ">
            <p className="font-medium lg:text-3xl text-2xl">How RIPPLE Works</p>
            <p className="pt-6 font-medium text-xl">
              Ripple helps under represented founders in Africa to fund raise..
              {/* <span className="block text-center "> or organization.</span> */}
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={dollarImg}
              alt="dollar image"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="font-medium text-lg text-black-100">Start a fundraiser</p>
              <ul className="list-disc font-medium text-black-100 mt-5 leading-9 ml-6">
                <li>Set your fundraiser goal</li>
                <li>Tell your story</li>
                <li>Add a picture or video</li>
                {/* <li className="text-custom-blue cursor-pointer">Watch a video tutorial</li> */}
              </ul>
            </div>
            <div className="my-4 lg:my-0">
              <p className="font-medium text-lg text-black-100">Share with friends</p>
              <ul className="list-disc font-medium text-black-100 mt-5 leading-9 ml-6">
                <li>Send emails</li>
                <li>Send text messages</li>
                <li>Share on social media</li>
                {/* <li className="text-custom-blue cursor-pointer">Watch a video tutorial</li> */}
              </ul>
            </div>
            <div>
              <p className="font-medium text-lg text-black-100">Manage Donation</p>
              <ul className="list-disc font-medium text-black-100 mt-5 leading-9 ml-6">
                <li>Accept donations</li>
                <li>Thank donors</li>
                <li>Withdraw funds</li>
              </ul>
            </div>
          </div>
        <div className="flex justify-center mb-10">
         <button className="mt-10 btn h-10 min-h-10 bg-custom-blue-200 hover:bg-custom-blue-200  text-white px-6">
         <Link href="/project">Start a Ripple</Link></button>
        </div>
    </div> 
     <div className="bg-[#fcfcff] max-w-[1920px] mx-auto px-5 lg:px-[10rem]">
     <div className=" flex justify-between flex-col lg:flex-row  items-center py-10 w-full ">
        <div className="flex items-center text-black-100  ">
            <Image className="mr-10 hidden sm:block" src={left} alt="left/back icon"width={20} height={20} quality={100}/>
            <div>
            <p className="text-lg  font-medium">Ripple Stories</p>
            <p className="text-2xl font-semibold ">Helping Kids Study</p>
            <p className=" mt-2 text-[14px] lg:w-[350px] leading-5 italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum lacinia eu, neque egestas adipiscing cras. Nulla commodo elementum dolor amet, pellentesque
                 posuere aliquet nunc. Elit tellus praesent libero habitasse dignissim justo.
                  Vitae, tincidunt egestas quam molestie eget a sem.”</p>
            <p className="text-[12px] mt-4">Chris raised Rs. 20,00,000 to help fund their study & Library needs.</p>
            </div>
        </div>
        <div className="flex items-center mt-4 lg:mt-0 after: ">
        <Image className="mr-10" src={kids} alt="kids"width={420} height={552} quality={100}/>
        <Image className="hidden sm:block" src={right} alt="left/back icon"width={20} height={20} quality={100}/>
        </div>
     </div>
     </div>
     <div className="mt-10 flex flex-col items-center justify-center  max-w-[1920px] mx-auto lg:px-[10rem] px-5 ">
        <p className="text-center text-black-100 font-semibold text-2xl">What Ripple Offers</p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
      {data.map((item, index) => (
        <div key={index} className="">
          <p className="text-lg font-medium mb-4 text-black-100 flex items-center">
            <span className="mr-4">{item.icon}</span>
            {item.title}
          </p>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>

        <div className="flex justify-center mb-10">
         <button className="mt-10 btn h-10 min-h-10 bg-custom-blue-200 hover:bg-custom-blue-200  text-white px-6">
            <Link href="/project">Start a Ripple</Link></button>
     </div>
     </div>
    </section>
  );
};

export default GetStarted;
