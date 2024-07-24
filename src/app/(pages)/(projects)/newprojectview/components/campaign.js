import Image from "next/image"

const Campaign = ({imageUrl ,projectOwner,projectStory})=>{
    return (
        <div className=" mt-12 ">
        <div className="flex justify-between w-full mb-6 items-center">
            <p className="text-2xl text-black-100 font-semibold">Story</p>
            <button className=" btn rounded-[6px] text-lg 
            font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white px-16 hover:bg-transparent hover:text-custom-blue">Edit</button>
        </div>
        <div className="relative h-[272px] w-[800px]">
            <Image src={imageUrl} className="h-full w-full" fill alt="story image"/>
        </div>
        <div className="text-black-100 font-normal pt-8 leading-[19.5px] text-[15px]">
            <p> {projectStory}  </p>
        </div>
        </div>
    )
}
export default Campaign