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

const GetStarted = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pt-[6.4rem] text-black-100 ">
        <p className="font-medium text-3xl">How KICKSTARTER Works</p>
        <p className="pt-6 font-medium text-xl">
          KickStarter is the best place to fundraise, whether you are an
          individual, group,
          <span className="block text-center "> or organization.</span>
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
      <div className="flex justify-between ">
        <div>
          <p className="font-medium text-lg text-black-100">Start a fundraiser</p>
          <ul className="list-disc font-medium text-black-100 mt-5 leading-9 ml-6">
            <li>Set your fundraiser goal</li>
            <li>Tell your story</li>
            <li>Add a picture or video</li>
            <li className="text-custom-blue cursor-pointer">Watch a video tutorial</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-lg text-black-100">Share with friends</p>
          <ul className="list-disc font-medium text-black-100 mt-5 leading-9 ml-6">
            <li>Send emails</li>
            <li>Send text messages</li>
            <li>Share on social media</li>
            <li className="text-custom-blue cursor-pointer">Watch a video tutorial</li>
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
         <Link href="/newproject">Start a Kickstarter</Link></button>
     </div>
     <div className="bg-[#fcfcff]">
     <div className=" flex justify-between items-center py-10 w-full max-w-[1920px] mx-auto ">
        <div className="flex items-center text-black-100  ">
            <Image className="mr-10" src={left} alt="left/back icon"width={20} height={20} quality={100}/>
            <div>
            <p className="text-lg  font-medium">Kickstarter Stories</p>
            <p className="text-2xl font-semibold ">Helping Kids Study</p>
            <p className=" mt-2 text-[14px] w-[350px] leading-5 italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum lacinia eu, neque egestas adipiscing cras. Nulla commodo elementum dolor amet, pellentesque
                 posuere aliquet nunc. Elit tellus praesent libero habitasse dignissim justo.
                  Vitae, tincidunt egestas quam molestie eget a sem.”</p>
            <p className="text-[12px] mt-4">Chris raised Rs. 20,00,000 to help fund their study & Library needs.</p>
            </div>
        </div>
        <div className="flex items-center">
        <Image className="mr-10" src={kids} alt="kids"width={420} height={552} quality={100}/>
        <Image className="" src={right} alt="left/back icon"width={20} height={20} quality={100}/>
        </div>
     </div>
     </div>
     <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-center text-black-100 font-semibold text-2xl">What KICKSTARTER Offers</p>
        <div className="flex justify-between w-full  mt-10">
            <div className="w-[250px]">
                <p className="text-lg font-medium  mb-4 text-black-100 flex items-center">
                    <span className=" mr-4"><TbWorld /></span>Worlwide Leader</p>
                <p className="text-sm">Kickstarter is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
            <div className="w-[250px]">
                <p  className="text-lg font-medium  mb-4 text-black-100 flex items-center">
                <span className=" mr-4"><CiClock2 /></span>Simple Setup</p>
                <p className="text-sm">You can personalize and share your GoFundMe in just a few minutes.</p>
            </div>
            <div className="w-[250px]">
                <p  className="text-lg font-medium  mb-4 text-black-100 flex items-center">
                <span className=" mr-4"> <Image src={key_icon} alt="key icon" width={20} height={20}/> </span>Secure</p>
                <p className=" text-sm">Our Trust & Safety team works around the clock to protect against fraud. </p>
            </div>
        </div>
        <div className="flex justify-between w-full  my-10">
            <div className="w-[250px]">
                <p className="text-lg font-medium  mb-4 text-black-100 flex items-center">
                <span className=" mr-4"><CiMobile2 /></span>Mobile App</p>
                <p className="text-sm">The Kickstarter app makes it simple to launch and manage your fundraiser on the go.</p>
            </div>
            <div className="w-[250px]">
                <p  className="text-lg font-medium  mb-4 text-black-100 flex items-center">
                <span className=" mr-4"><PiChartLineUp />
                </span>Social Reach</p>
                <p className="text-sm">Harness the power of social media to spread your story and get more support.</p>
            </div>
            <div className="w-[250px]">
                <p  className="text-lg font-medium  mb-4 text-black-100 flex items-center">
                <span className=" mr-4"> <Image src={headPhoneIcon} alt="earphone icon" width={20} height={20}/> </span> Expert Advice</p>
                <p className=" text-sm">Our best-in-class Customer Care agents will answer your questions, day or night. </p>
            </div>
        </div>
        <div className="flex justify-center mb-10">
         <button className="mt-10 btn h-10 min-h-10 bg-custom-blue-200 hover:bg-custom-blue-200  text-white px-6">
            <Link href="/newproject">Start a Kickstarter</Link></button>
     </div>
     </div>
    </section>
  );
};

export default GetStarted;
