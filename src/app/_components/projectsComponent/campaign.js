'use client'
import { updateProjectAbout } from "@/app/_components/Apis/api"
import RichTextEditor from "@/app/_components/Editor/RichTextEditor"
import { useAuth } from "@/app/_components/Providers/Providers"
import Cookies from "js-cookie"
import Image from "next/image"
import { useState } from "react"
import { toast } from "react-toastify"

const Campaign = ({ imageUrl, projectOwner, projectStory }) => {
  const { authUser } = useAuth()    
  return (
    <div className="mt-12">
      <div className="flex justify-between w-full mb-6 items-center">
        <p className="text-2xl text-black-100 font-semibold">Story</p>
       
      </div>
      <div>
      </div>
      <div className={`relative h-[272px] w-[800px]`}>
        <Image src={imageUrl} className="h-full w-full object-cover" fill alt="story image" />
      </div>
      <div className="text-black-100 font-normal pt-8 leading-[19.5px] text-[15px]">
        <p>{projectStory}</p>
      </div>
    </div>
  )
}

export default Campaign
