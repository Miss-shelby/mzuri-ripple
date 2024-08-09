import Image from "next/image"
import { TbCurrencyNaira } from "react-icons/tb";
export const ProjectCard = ({img,title,owner,description="",expander,startPrice,endPrice,backers,days,height,width,location,longDescription })=>{

    return (
      <div className="card card-compact bg-base-100 shadow-xl rounded-[3px]">
      <div className="relative w-full h-auto" >
        <Image
          src={img}
          quality={100}
         height={height}
         width={width}
        layout="responsive"
        objectFit="cover"
          alt="project_Image"
          className=" w-full h-auto"
  
        />
      </div>
      <div className="card-body w-full">
        <div className="flex justify-between items-center text-black-100">
        <h2 className="card-title font-bold text-lg flex-grow-0">{title} </h2>
           <p className="text-sm font-medium flex-grow-0">{location}</p>
        </div>
        <p className="text-black-100 font-[500] flex-grow-0">{owner}</p>
        {description && description.length < 200? <p className="text-[13px] leading-[17.07px] font-normal flex-grow-0">{description}
        </p> : <p className="text-sm font-normal flex-grow-0 py-[2px]">
        {longDescription }</p> }
        {expander}
        <div className="flex w-full justify-between ">
          <p className="text-custom-green-100 text-xl font-medium flex-grow-0 flex items-center"><span className="inline-flex items-center"><TbCurrencyNaira /></span>{startPrice}</p>
          <p className="text-custom-green-100  text-xl font-medium flex-grow-0 flex items-center"><span className="inline-flex items-center"><TbCurrencyNaira /></span >{endPrice}</p>
        </div>
        <div className="gradient-border"></div>
        <div id="grad"></div>
        <div className="flex text-custom-black  justify-between font-medium text-[0.7rem]">
          <p className="flex-grow-0">{backers}</p>
          <p className="flex-grow-0">{days}</p>
        </div>
      </div>
    </div>
    
    )
}

export const RecommendedProjectCard = ({img,img2,title,owner,description,startPrice,endPrice,backers,days,height,width,profilename,location,height2,width2})=>{
    return (
      <div className="card card-compact bg-base-100 shadow-xl rounded-[3px]">
      <figure className={`relative w-full h-auto`}>
        <Image
          src={img}
          quality={100}
         height={height}
         width={width}
         layout="responsive"
          alt="project image"
  
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title font-bold text-lg">{title}</h2>
        <p className="text-black-100 font-[500] flex-grow-0">{owner}</p>
        <p className="text-[13px] font-normal flex-grow-0">{description}</p>
        <div className="flex w-full justify-between ">
          <p className="text-custom-green-100 text-xl font-medium flex-grow-0 flex items-center"><span className="inline-flex items-center"><TbCurrencyNaira /></span>{startPrice}</p>
          <p className="text-custom-green-100 text-xl font-medium flex-grow-0 flex items-center"><span className="inline-flex items-center"><TbCurrencyNaira /></span>{endPrice}</p>
        </div>
        <div className="gradient-border"></div>
        <div id="grad"></div>
        <div className="flex text-custom-black  justify-between font-medium text-[0.7rem]">
          <p className="flex-grow-0">{backers}</p>
          <p className="flex-grow-0">{days}</p>
        </div>
        <hr className="my-6"/>
        <div className="flex items-center ">
        <figure className={`relative `}>
        <Image
          src={img2}
          quality={100}
         height={height2}
         width={width2}
         layout="responsive"
          alt="avatar"
        />
      </figure>
      <div className="ml-[24px]  text-black-100">
        <h4 className=" text-lg font-medium">{profilename}</h4>
        <p>{location}</p>
      </div>
        </div>
      </div>
    </div>
    
    )
  }