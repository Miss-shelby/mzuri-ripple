// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
// import { useAuth } from '@/app/_components/Providers/Providers';
// import { useRouter } from 'next/navigation'
// import PaystackPop from "@paystack/inline-js";
// import { toast } from 'react-toastify';

// const PaymentPage =  () => {
//   const {authUser,userProject}= useAuth()
//   const [loading, setLoading] = useState(false);
//   const router = useRouter(); 
//   console.log(authUser,userProject);
//   const [formFields,setFormFields] = useState({
//     email:authUser?.email || '',
//     firstname: authUser?.full_name || '',
//     lastname: '',
//     amount: ''
//   })

//   const handleFormValue=(e)=>{
//     setFormFields({
//       ...formFields,
//       [e.target.name]:e.target.value,
//     })
//   }
  
//   const payWithPayStack = (e) => {
   
//     e.preventDefault();

//     const payStack = new PaystackPop();
//     payStack.newTransaction({
//       key: "pk_test_907eb64312b409f14c9d14559c314ff3aaf6554e",
//       amount: formFields.amount * 100,
//       // ref:processingBooking.id.toString(),
//       email:formFields.email,
//       firstName:formFields.firstname,
//       lastName:formFields.lastname,
//       onSuccess(transaction) {
//         let message = `Payment complete! Reference ${transaction.reference}`;
//         console.log(message);
//         // axios.post(`${VerifyPayment}${transaction.reference}`)
//         // .then(function (response) {
//         //   console.log(response,'sucess response');
//         //   navigate('dashboard/orders', { replace: true });
//         // })
//         // .catch(function (error) {
//         //   console.log(error,'error response');
//         //   // navigate('dashboard/orders', { replace: true });
//         // });
//         toast.success("payment succesfull")
//         router?.push('/')
//         setFormFields("")
//       },
//       onCancel() {
//         toast.error("Transcation cancelled")
//         // navigate('/dashboard/orders', { replace: true });
//       },
//     });
//   };

//   console.log(formFields);



//   return (
//     <div className='flex justify-center items-center pb-[67px] pt-[62px]'>
//         <div>
//       <Image src="/payment.avif" alt='cowry image' height={200} width={365} />
//         </div>
//           <form className='bg-custom-green flex flex-col px-[30px] w-[26rem]' onSubmit={payWithPayStack}>
//               <h2 className='pt-8 font-bold text-center text-2xl'>Make <span className='font-medium'>Payments</span></h2>
//               <label className='text-black-100 font-medium mt-7'>E-mail</label>
//               <input value={formFields.email} onChange={handleFormValue} type='text' name='email' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
//               <label className='text-black-100 font-medium mt-7'>Firstname:</label>
//               <input value={formFields.firstname} onChange={handleFormValue} type='text' name='firstname' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
//               <label className='text-black-100 font-medium mt-7'>Lastname:</label>
//               <input value={formFields.lastname} onChange={handleFormValue} type='text' name='lastname' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
//               <label className='text-black-100 font-medium mt-7'>Amount:</label>
//               <input value={formFields.amount} onChange={handleFormValue} type='number' name='amount' required className='input h-9 input-bordered input-custom-brown w-full mt-3' />
//               <button type='submit' 
//                 disabled={loading} 
//               className={`btn ${loading ? 'bg-gray-400' : 'bg-custom-blue'} hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium text-center mx-auto my-8 h-10 min-h-10`}>
//                 {loading?<span className="Btnloader"></span> :'Pay'}</button>
              
            
              
//           </form>
         
//     </div>
//   )
// }

// export default PaymentPage
const PaymentPage=()=>{
    return( 
        <div>

            <p>Hello payment</p>
        </div>
    )
}
export default PaymentPage