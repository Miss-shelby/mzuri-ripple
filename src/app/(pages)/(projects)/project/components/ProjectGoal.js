

const ProjectGoal = ({handleNext,handlePrevious,formValues,handleInputChange})=>{
    
    return (
      <>
       <div>
              <h2 className='pt-6 font-medium text-2xl text-center'>Set your <span className='font-bold uppercase'>Goal </span></h2>
              <label className='text-black-100 font-medium mt-6 w-full block'>
              How much would you like to raise?
              <input type='number'required name="amount" value={formValues.amount} onChange={handleInputChange} placeholder='#                                                                        Nr'
               className='custom-placeholder input h-9 input-bordered input-custom-brown w-full mt-3' />
              </label>
              <div className='bg-custom-light-blue text-black-100 rounded-[6px] px-4  py-[15px] mt-6'>
                <p className='text-[0.77rem]'>Keep in mind that transaction fees, including credit and debit charges, are deducted from each donation. 
                  Also make sure to have a bank account and mailing address with proper documents.Also by continuing you agree to following conditions:</p>
                   <p className='font-medium pt-4'>I am at least 18 years old.</p>
                   <p className='font-medium py-4'>I can verify a government issued ID.</p>
                   <p className='font-medium'>I can verify the legitimacy of the project.</p>
              </div>
              <div className='flex mb-9'>
                <button className='btn bg-custom-red hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
              text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
              <button className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
              text-center mx-auto mt-6 h-10 min-h-10'onClick={handleNext}>Next</button>
              </div>
             
            </div>
      </>
    )
  }
  export default ProjectGoal