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
  console.log(authUser);
  const [showEditor, setShowEditor] = useState(false)
const projectId = Cookies.get("projectId")
const token = Cookies.get("token")
  const handleUpdateStory = async (newStory) => {
    // Function to handle updated story
    const encodedStory = encodeURIComponent(newStory);
    const data = {
        project_i: projectId,
        about: encodedStory,
      };
  
    console.log("Updated story:", newStory);
    console.log("Payload to be sent:", JSON.stringify(data, null, 2));
    console.log(encodedStory);

    try {
        const response = await fetch(`${updateProjectAbout}/update_about?project_id=${projectId}&about=${encodedStory}`, {
          method: "PUT",
          headers: {
            "accept":"application/json",
            Authorization: `Bearer ${token}`
          },
        //  body: JSON.stringify(data),
        
        })
            const json = await response.json();
            if (response?.status === 200 || response?.status === 202  || response?.status === 201 ||  response.ok) {
                const sucessMessage = json?.message;
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

  const toggleEditor = () => {
    setShowEditor(!showEditor)
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between w-full mb-6 items-center">
        <p className="text-2xl text-black-100 font-semibold">Story</p>
        {authUser && (
          <button onClick={toggleEditor} className="btn rounded-[6px] text-lg font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white px-16 hover:bg-transparent hover:text-custom-blue">
            {showEditor ? 'Exit' : 'Edit'}
          </button>
        )}
      </div>
      <div>
        {showEditor && <RichTextEditor initialContent={projectStory} onDone={handleUpdateStory} />}
      </div>
      <div className="relative h-[272px] w-[800px]">
        <Image src={imageUrl} className="h-full w-full object-cover" fill alt="story image" />
      </div>
      <div className="text-black-100 font-normal pt-8 leading-[19.5px] text-[15px]">
        {/* <p>{projectStory}</p> */}
        <p dangerouslySetInnerHTML={{ __html: projectStory }}></p>
      </div>
    </div>
  )
}

export default Campaign
