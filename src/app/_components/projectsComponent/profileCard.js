import Image from 'next/image'
import React, { useState } from 'react'
import { PiChartLineUp } from 'react-icons/pi'
import { LuDollarSign } from "react-icons/lu";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaImage } from 'react-icons/fa';
const ProfileCard = ({projectOwner,backers}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('/profileAvatar.png');
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  };
  return (
    <div>
         <div className="card w-[400px] mt-20 h-fit p-6 shadow-2xl ml-6">
                <div className="card-body relative mt-10 flex flex-col items-center gap-0 border-custom-brown border ">
                <input type="file"   id="file-upload" name="selectedFile"
                  className="hidden file-input file-input-ghost w-full mt-6 h-20 " onChange={ handleFileChange} />
                  <label  htmlFor="file-upload"
                    className='cursor-pointer flex items-center justify-center  absolute z-10 -top-10 h-fit w-fit'>
                      <div className='relative rounded-full  h-auto w-auto aspect-square'>
                      <Image src={preview} objectFit="cover" className='rounded-full'   height={75} width={75}  alt='profile image'/>
                      </div>
                  </label>
                  {/* <div className='absolute z-10 -top-10 h-fit w-fit'>
                    <Image src='/profileAvatar.png' height={75} width={75} alt='profile image'/>
                  </div> */}
                  <h4 className='font-semibold text-black-100 text-2xl pt-6 capitalize'>{projectOwner}</h4>
                    <p className='font-medium text-black-100 pt-4'>Project Founder</p>
                </div>
                <div className="card-body  w-full flex flex-col mt-6 pl-6 gap-0 border-custom-brown border ">
                  <p  className="text-lg font-medium  mb-4 text-black-100 flex items-center ">
                  <span className=" mr-6"><PiChartLineUp />
                  </span>{backers?.length > 0? `${backers.length}`:"0"} people just donated</p>
                  <div className='border-black-100 border-b'></div>
                  {backers?.length > 0? backers.map((backer)=>{
                    return ( <div key={backer.id} className='flex items-center pt-6'>
                    <span className='mr-6'><TbCurrencyNaira /></span>
                    <p className="text-lg font-medium  mb-4 text-black-100 capitalize">{backer?.backer_name}<span className='block text-sm font-normal'>
                      {backer.amount.toLocaleString('en-US')}</span></p>
                    <div className='border-black-100 border-b'></div>
                   </div>)
                  }) : (
                    <div className='flex items-center pt-6'>
                  <span className='mr-6'><TbCurrencyNaira /></span>
                  <p className="text-lg font-medium  mb-4 text-black-100 "> 0.00<span className='block text-sm font-normal'>-</span></p>
                 </div>
                  )}
                
                 
                 
                  <div className='border-black-100 border-b'></div>
                 <div className='flex mt-6'>
                  <button className='btn mr-6 bg-transparent h-10 min-h-10 text-lg  text-black-100 border border-custom-green-200'>See all</button>
                  <button className='btn bg-transparent h-10 min-h-10 text-lg  text-black-100 border border-custom-green-200'>See top donation</button>
                 </div>
                </div>
            </div>
    </div>
  )
}

export default ProfileCard