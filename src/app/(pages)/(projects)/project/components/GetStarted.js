import { CiSearch } from "react-icons/ci";
import NigeriaStatesDropDown from "@/app/_components/NigeriaStateDropdown/NigeriaStates"

 const GetStarted = ({handleNext,formValues,handleInputChange})=>{
    return (
      <>
       <div>
              <h2 className='pt-3 text-xl font-medium text-center'>Let’s Get  <span className='uppercase font-bold '>Started</span></h2>
              <label className='text-black-100 font-medium block w-full mt-6'>
                What’s Your Name?
                <input type='text' name="name" value={formValues.name} minLength="8" required onChange={handleInputChange} className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
              </label>
              <NigeriaStatesDropDown formValues={formValues} handleInputChange={handleInputChange}/>
              <label className='text-black-100 font-medium block w-full mt-6'>
               Where do You Live?
                <input type='text' value={formValues.address} name="address" minLength="8" required onChange={handleInputChange} className='input focus:none h-9 input-bordered input-custom-brown w-full mt-3' />
              </label>
             <div className='relative'>
              <input type='text' placeholder='Zip Code' className='custom-placeholder pl-7 input focus:none text-sm h-9 input-bordered input-custom-brown w-full mt-3' />
             <span className='inline-flex absolute left-2 mr-5 top-[65%] transform -translate-y-1/2 '><CiSearch /></span>
             </div>
              <label className='text-black-100 font-medium block w-full mt-6'>
                What are you fundraising for?
                <select required onChange={handleInputChange} name="category" value={formValues.category} className="select select-bordered text-[13px] w-full h-10 min-h-10 mt-3">
                  <option >Choose a category</option>
                  <option value="669d9bc7ea1a4f4b5f0296ec">Design and Tech</option>
                  <option value="669d9ff40eb0c5acbe1ee8f0">Arts&Illustration</option>
                  <option value="669da01f0eb0c5acbe1ee8f2">Film</option>
                  <option value="669da0360eb0c5acbe1ee8f4">Music</option>
                  <option value="669da0530eb0c5acbe1ee8f6">Food & Craft</option>
                  <option value="669da05f0eb0c5acbe1ee8f8">Game</option>
                </select>
              </label>
              <div className='flex justify-end text-right w-full mb-4'>
                <button className='btn bg-custom-blue hover:bg-custom-blue
                 text-white text-right w-[10.5rem]  text-lg font-medium  mt-6 h-10 min-h-10' onClick={handleNext}>Next</button>
              </div>
            </div>
      </>
    )
  }

  export default GetStarted