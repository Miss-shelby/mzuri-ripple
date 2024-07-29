import { CiSearch } from "react-icons/ci";
import NigeriaStatesDropDown from "@/app/_components/NigeriaStateDropdown/NigeriaStates"

 const GetStarted = ({handleNext,formValues,handleInputChange})=>{
    return (
      <>
       <div>
              <h2 className='pt-6 text-2xl font-medium text-center'>Let’s Get  <span className='uppercase font-bold '>Started</span></h2>
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
                  <option value="Design and Tech">Design and Tech</option>
                  <option value="Arts&Illustration">Arts&Illustration</option>
                  <option value="Film">Film</option>
                  <option value="Music">Music</option>
                  <option value="Food &Craft">Food & Craft</option>
                  <option value="Game">Game</option>
                </select>
              </label>
              <div className='flex justify-end text-right w-full mb-9'>
                <button className='btn bg-custom-blue hover:bg-custom-blue
                 text-white text-right w-[10.5rem]  text-lg font-medium  mt-6 h-10 min-h-10' onClick={handleNext}>Next</button>
              </div>
            </div>
      </>
    )
  }

  export default GetStarted