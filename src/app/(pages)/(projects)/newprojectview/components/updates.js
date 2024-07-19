import Image from "next/image"

const Updates = ()=>{
    return (
        <div className=" mt-12 ">
            <div className="flex justify-between w-full mb-6 items-center">
                <p className="text-2xl text-black-100 font-semibold">Updates on the Project</p>
                <button className=" btn rounded-[6px] text-lg 
                font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white px-8 hover:bg-transparent hover:text-custom-blue">Add Update</button>
            </div>
            <div className="card w-[800px] mt-4 h-fit p-6 shadow-2xl ">
                <div className="card-body relative mt-10 flex flex-col  gap-0 border-custom-brown border ">
                 <p className="font-semibold">Update 2 :<span>Buying New RTX 3080 Ti</span></p>
                </div>
                <div className="card-body  w-full flex flex-col mt-6 pl-6 gap-0 border-custom-brown border ">
                  <p  className="text-lg font-medium  mb-4 text-black-100 flex items-center ">
                  <span className=" mr-6">
                  </span>150 people just donated</p>
                  <div className='border-black-100 border-b'></div>
                 <div className='flex items-center pt-6'>
                  <span className='mr-6'></span>
                  <p className="text-lg font-medium  mb-4 text-black-100 ">Rs.100<span className='block text-sm font-normal'>-Prajwal pun</span></p>
                 </div>
                  <div className='border-black-100 border-b'></div>
                 <div className='flex items-center pt-6'>
                  <span className='mr-6'></span>
                  <p className="text-lg font-medium  mb-4 text-black-100 ">Rs.100<span className='block text-sm font-normal'>-Prajwal pun</span></p>
                 </div>
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
export default Updates