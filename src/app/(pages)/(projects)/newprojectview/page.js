import Image from 'next/image';
import React from 'react'

const NewPojectView = () => {
    const projectName ='PC Building Project';
    const projectImage ='/pc.png';
    const projectOwner='Monik';
    const location ='Kathmandu, Nepal'

  return (
    <section className=' mt-[68px]'>
          <p className='font-bold text-2xl mb-8'>{projectName}</p>
        <div className='flex w-full'>
            <div>
               <div className='relative w-[700px] h-[500px]'>
                <Image src={projectImage} alt={projectName} className='w-full h-full' fill priority/>
               </div>
                <p className='text-black-100 mt-6 font-medium text-lg'>{projectOwner} is organizing this fundraiser to benefit himself</p>
                <div className='flex mt-6 text-black-100 text-lg font-medium'>
                    <p>Created 1 day ago <span className='px-5'>|</span></p>
                    <p className='pr-4'>Personal Use <span></span></p>
                    <p>{location} <span className='px-5'>|</span></p>
                </div>
            </div>
            <div className="card w-[420px] h-fit shadow-2xl ml-6">
                <div className="card-body gap-0 px-4 py-6">
                <div className="gradient-border"></div>
                <div id="grad"></div>
                    <h2 className="text-custom-green-100 text-2xl font-bold pt-6">Rs. 10,000</h2>
                    <p className='font-medium text-sm text-black-100 mt-2'>pledged of Rs. 1,00,000 goal</p>
                    <p className='text-custom-green-100 text-2xl font-bold pt-6 '>150</p>
                    <p className='font-medium text-sm text-black-100 mt-2'>backers</p>
                    <p className='text-custom-green-100 text-2xl font-bold pt-6'>10</p>
                    <p className='font-medium text-sm text-black-100 '>days to go</p>
                    <div className="card-actions justify-center mt-6">
                        <button className="btn text-lg font-medium h-10 min-h-10 bg-custom-green-100 text-white Back this project w-full">Back this project</button>
                        <button className="btn text-lg font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white Back this project w-full">Share</button>
                    </div>
                </div>
            </div>
        </div>
        <UserDashboard/>
    </section>
  )
}

export default NewPojectView


export const UserDashboard=()=>{
    return (
        <div className='mt-9 mb-6'>
            <nav className=' border-1 py-6 border-t  border-b my-9'>
              
            </nav>
        </div>
    )
}