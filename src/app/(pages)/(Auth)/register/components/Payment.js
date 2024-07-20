import Link from "next/link"


const PaymentGateway = ({handlePrevious,submitForm,loading})=>{
    return (
      <>
       <div>
              <h2 className='pt-5  text-2xl font-medium  text-center'>Register Your   <span className='font-bold'>Payment Way</span></h2>
              <div className='flex justify-between mt-7 items-center'>
              <p className='text-black-100 text-lg font-medium '>Choose your payment option   </p>
              <p className='text-base font-normal'>Skip</p>
              </div>
              <div className=''>
                <button className='btn  border-custom-green-100 hover:bg-custom-green-100
                 text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your E-Sewa Account</button>
                  <button className='btn  border-custom-green-100 hover:bg-custom-green-100
                 text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your Khalti Account</button>
                  <button className='btn  border-custom-green-100 hover:bg-custom-green-100
                 text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your Thaili Account</button>
                  <button className='btn  border-custom-green-100 hover:bg-custom-green-100
                 text-black-100 w-full mx-auto font-medium text-center mt-6 h-10 min-h-10'>Connect Your FonePay Account</button>
                   <button className='btn  border-custom-green-100 hover:bg-custom-green-100
                 text-black-100 w-full mx-auto  font-medium text-center mt-6 h-10 min-h-10'>Connect Your Paypal Account</button>
              </div>
              <div className='flex mb-[3.7rem]'>
              <button type='submit'  isdisabled={loading} className='btn bg-custom-blue hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
              text-center mx-auto mt-6 h-10 min-h-10' onClick={submitForm}>
                  {loading? 'loading...' :'Finish'}</button>
                <button  className='btn bg-custom-red hover:bg-custom-red text-white w-[10.5rem] text-lg font-medium 
              text-center mx-auto mt-6 h-10 min-h-10'onClick={handlePrevious}>Back</button>
              </div>
            </div>
      </>
    )
  }

export default PaymentGateway
  