import { FaImage } from "react-icons/fa";

const ProjectSetUp = ({handlePrevious,formValues,handleInputChange,submitForm,loading})=>{
   
    return (
      <>
       <div>
          <h2 className='pt-4 text-2xl font-medium text-center'>Setup your  <span className='uppercase font-bold '>RIPPLE </span></h2>
          <label className='text-black-100 font-medium mt-6 w-full block'>
          What’s Your Ripple Title?
              <input type='text' minLength="8" name="projectTitle" required value={formValues.projectTitle} onChange={handleInputChange}
               className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
           </label>
           <label className='text-black-100 font-medium mt-6 w-full block'>
          What’s Your Ripple Duration?
              <input type='date' name="projectDuration" required value={formValues.projectDuration} onChange={handleInputChange}
               className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
           </label>
           <label className='text-black-100 font-medium mt-6 w-full block'>
           What’s Your Ripple About?
           <textarea value={formValues.projectAbout} name="projectAbout" onChange={handleInputChange} 
           required minLength="150" className='custom-placeholder input h-14 input-bordered input-custom-brown w-full mt-3'></textarea>
           </label>
           <div>
           
           <p  className='text-black-100 font-medium my-6 w-full block'>Add a Photo/Video</p>
           <input type="file"   id="file-upload" name="selectedFile"
           className="hidden file-input file-input-ghost w-full mt-6 input-bordered input-custom-brown h-20 " onChange={handleInputChange} />
           <label  htmlFor="file-upload"
            className='cursor-pointer flex items-center justify-center w-full h-14 border border-custom-brown'>
           <FaImage className='text-xl'/>
           </label>
           {formValues.selectedFile && <span className="ml-2">{formValues.selectedFile.name}</span>}
           </div>
              <div className='flex mb-9'>
                <button className='btn bg-custom-red hover:bg-custom-red text-white w-[10.5rem] text-lg font-medium 
              text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
  
  
              <button 
               disabled={loading} 
              onClick={submitForm} 
              className= {`btn ${loading ? 'bg-gray-400' : 'bg-custom-blue'}
               hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium  text-center mx-auto mt-6 h-10 min-h-10`}> 
               {loading?<span className="Btnloader"></span>:'Finish'}</button>
              </div>
            </div>
      </>
    )
  }

  export default ProjectSetUp