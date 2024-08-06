import Image from "next/image"

const Updates = ({projectOwner})=>{
    return (
        <div className=" mt-12 ">
            <div className="flex justify-between w-full mb-6 items-center">
                <p className="text-2xl text-black-100 font-semibold">Updates on the Project</p>
                <button className=" btn rounded-[6px] text-lg 
                font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white px-8 hover:bg-transparent hover:text-custom-blue">Add Update</button>
            </div>
            <div className="card w-[760px] mt-4 h-fit  shadow-2xl ">
                <div className="card-body relative p-0 mt-4 flex flex-col px-6  gap-0  ">
                 <p className="font-semibold text-lg">Update 2 :<span className="font-medium">Buying New RTX 3080 Ti</span></p>
                </div>
               <div className="flex border-b border-black-100 pb-6 px-6 pt-4">
               <div className=' h-fit w-fit mr-4 '>
                    <Image src='/profileAvatar.png' height={45} width={45} alt='profile image'/>
                  </div>
                <div>
                    <h4 className="text-lg font-medium">{projectOwner}</h4>
                    <p>Project Founder</p>
                </div>
               </div>
                <div className="pt-6 px-6">
                    <p className="font-medium pb-6">Thank you for your contribution and helping me buy RTX 3080 Ti.</p>
                    <p> Here are the things i will buy next:</p>
                    <ul className="list-disc pl-5">
                        <li>New PCIE Expansion Slot</li>
                        <li>New Motherboard</li>
                        <li>New Mouse</li>
                        <li>New Keyboard</li>
                    </ul>
                </div>
                <button class="bg-gradient-to-b from-transparent to-gray-700 text-black-100 py-2 px-4 rounded">See More</button>
            </div>

            <div className="card w-[760px] mt-8 h-fit  shadow-2xl ">
                <div className="card-body relative p-0 mt-4 flex flex-col px-6  gap-0  ">
                 <p className="font-semibold text-lg">Update 1 :<span className="font-medium"> Buying New 32GB RAM</span></p>
                </div>
               <div className="flex border-b border-black-100 pb-6 px-6 pt-4">
               <div className=' h-fit w-fit mr-4 '>
                    <Image src='/profileAvatar.png' height={45} width={45} alt='profile image'/>
                  </div>
                <div>
                    <h4 className="text-lg font-medium">{projectOwner}</h4>
                    <p>Project Founder</p>
                </div>
               </div>
                <div className="pt-6 px-6">
                    <p className="font-medium pb-6">Thank you for your contribution and helping me buy RTX 3080 Ti.</p>
                </div>
            </div>
        </div>
        
    )
}
export default Updates