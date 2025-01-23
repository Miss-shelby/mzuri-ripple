'use client'
import { GetProjectsApi, updateProjectAbout } from "@/app/_components/Apis/api"
import RichTextEditor from "@/app/_components/Editor/RichTextEditor"
import { useAuth } from "@/app/_components/Providers/Providers"
import Cookies from "js-cookie"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const CampaignAuth = ({ imageUrl, projectOwner, projectStory,projectId}) => {
  const { authUser } = useAuth()
  const [updatedProjectStory,setUpdatedProjectStory] = useState(projectStory)
  const [showEditor, setShowEditor] = useState(false)
 
  const token = Cookies.get("token")


  const fetchProjectStory = async () => {
      try {
        const response = await fetch(`${GetProjectsApi}/project/${projectId}`, {
          method: "GET",
          headers: {
            "accept": "application/json",
            Authorization: `Bearer ${token}`
          }
        })
        const json = await response.json()


        if (response?.status === 200 || response?.status === 202  || response?.status === 201 ||  response.ok) {
          console.log(json.data,'user story here');
          setUpdatedProjectStory(json?.data?.about)
          return;
        } else if(response?.status === 400 || response?.status === 401 ||  response?.status === 403 ||response?.status === 404 ){
          toast.error(json?.message ||  json?.detail || json?.error || json?.data ||        response?.statusText ||
            "An error occured"
        );
        return;
        }else{
          toast.error(json?.message || json?.detail || json?.error || json?.data ||  response?.statusText || "An error occured" );
          return;
        }
      } catch (error) {
        toast.error("A server error occurred while fetching project story")
        console.log(error)
      }
    
  }

  useEffect(() => {
    fetchProjectStory()

    return () => {
      setUpdatedProjectStory("")
      setShowEditor(false)
    }
  },[]) 

  const handleUpdateStory = async (newStory) => {
    // Function to handle updated story
    const encodedStory = encodeURIComponent(newStory);
    const data = {
        project_i: projectId,
        about: encodedStory,
      };
      if(projectId){
        try {
            const response = await fetch(`${updateProjectAbout}/update_about?project_id=${projectId}&about=${encodedStory}`, {
              method: "PUT",
              headers: {
                "accept":"application/json",
                Authorization: `Bearer ${token}`
              },
             body: JSON.stringify(data),
            
            })
                const json = await response.json();
                if (response?.status === 200 || response?.status === 202  || response?.status === 201 ||  response.ok) {
                    const sucessMessage = json?.message;
                    setUpdatedProjectStory(json?.data?.about)
                   toast.success(sucessMessage)
                   setShowEditor(false);
                   return;
                 
                }
                else if(response?.status === 400 || response?.status === 401 ||  response?.status === 403 ||response?.status === 404 ){
                    toast.error(json?.message ||  json?.detail || json?.error || json?.data ||        response?.statusText ||
                        "An error occured"
                    );
                    return;
                }
                 else {
                    toast.error(json?.message || "Failed to fetch project story");
                }
            } catch (error) {
                toast.error("A server error occurred while fetching project story");
                console.log(error);
            }
      }
  }


  const toggleEditor = () => {
    setShowEditor(!showEditor)
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between  w-full mb-6 items-center">
        <p className="lg:text-2xl md:text-xl text-lg  text-black-100 font-semibold">Story </p>
        {authUser && (
          <button onClick={toggleEditor} className=" btn rounded-[6px] text-sm  lg:text-lg font-medium
           lg:h-10 lg:min-h-10 min-h-5 h-5 
           bg-custom-blue lg:mt-4 text-white lg:px-16  border-none hover:bg-transparent hover:text-custom-blue">
            {showEditor ? 'Exit' : 'Edit'}
          </button>
        )}
      </div>
      <div>
        {showEditor && <RichTextEditor initialContent={projectStory} onDone={handleUpdateStory} />}
      </div>
      <div className="relative  h-[100px] lg:h-[272px] ">
        <Image src={imageUrl} className="h-full w-full object-cover" fill alt="story image" />
      </div>
      <div className="text-black-100 font-normal pt-8 leading-[19.5px] lg:text-[15px] text-[13px]">
        {/* <p>{projectStory}</p> */}
        <p dangerouslySetInnerHTML={{ __html: updatedProjectStory }}></p>
      </div>
    </div>
  )
}

export default CampaignAuth
