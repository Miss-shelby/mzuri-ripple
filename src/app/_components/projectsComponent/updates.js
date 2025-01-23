'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
const Updates = ({projectOwner})=>{
    const pathname = usePathname()
   
    
    return (
        <div className=" mt-20 ">
            <div className="flex flex-wrap  items-center w-full mb-4 ">
                <p className="lg:text-2xl text-lg md:text-xl  text-black-100 font-semibold">Updates on the Project</p>
                {
              pathname.includes("dashboard/projects") && ( <button className=" btn lg:ml-16 rounded-[6px] text-sm
                font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white px-4 hover:bg-transparent hover:text-custom-blue">Add Update</button>)
            }
            </div>
            <div className={`card ${pathname.includes("dashboard/projects")? "l" :""} mt-4 h-fit mb-10 shadow-2xl` }>
                <div className="card-body relative p-0 mt-4 flex flex-col px-6  gap-0  ">
                 <p className="font-semibold lg:text-lg text-sm ">Update 2 :<span className="font-medium">Buying New RTX 3080 Ti</span></p>
                </div>
               <div className="flex border-b border-black-100 pb-6 px-6 pt-4">
               <div className=' h-fit w-fit mr-4 '>
                    <Image src='/profileAvatar.png' height={45} width={45} alt='profile image'/>
                  </div>
                <div>
                    <h4 className="lg:text-lg text-sm  font-medium">{projectOwner}</h4>
                    <p>Project Founder</p>
                </div>
               </div>
                <div className="pt-6 px-6">
                    <p className="font-medium text-sm lg:text-base  pb-6">Thank you for your contribution and helping me buy RTX 3080 Ti.</p>
                    <p> Here are the things i will buy next:</p>
                    <ul className="list-disc pl-5 text-sm lg:text-base ">
                        <li>New PCIE Expansion Slot</li>
                        <li>New Motherboard</li>
                        <li>New Mouse</li>
                        <li>New Keyboard</li>
                    </ul>
                </div>
                <button class="bg-gradient-to-b from-transparent to-gray-700 text-black-100 py-2 px-4 rounded">See More</button>
            </div>

            <div className={`card ${pathname.includes("dashboard/projects")? "" :""}  h-fit  shadow-2xl` }>
                <div className="card-body relative p-0 mt-4 flex flex-col px-6  gap-0  ">
                 <p className="font-semibold lg:text-lg text-sm ">Update 1 :<span className="font-medium"> Buying New 32GB RAM</span></p>
                </div>
               <div className="flex border-b border-black-100 pb-6 px-6 pt-4">
               <div className=' h-fit w-fit mr-4 '>
                    <Image src='/profileAvatar.png' height={45} width={45} alt='profile image'/>
                  </div>
                <div>
                    <h4 className="lg:text-lg text-sm  font-medium">{projectOwner}</h4>
                    <p>Project Founder</p>
                </div>
               </div>
                <div className="pt-6 px-6">
                    <p className="font-medium pb-6 text-sm lg:text-base ">Thank you for your contribution and helping me buy RTX 3080 Ti.</p>
                </div>
            </div>
        </div>
        
    )
}
export default Updates