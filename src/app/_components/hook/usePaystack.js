import { usePaystackPayment } from "react-paystack";

const TestPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
console.log(TestPublicKey);

const usePaystack = (formFields,resetFormFields) => {
  const config = {
    email: formFields?.email,
    amount: formFields?.amount * 100,
    firstName: formFields?.firstname,
    lastName: formFields?.lastname,
    publicKey: TestPublicKey,
    label: "Ripple Team",
    onSuccess: (transaction) => {
      let message = `Payment complete! Reference ${transaction.reference}`;
      console.log(message);
       // axios.post(`${VerifyPayment}${transaction.reference}`)
        // .then(function (response) {
        //   console.log(response,'sucess response');
        //   navigate('dashboard/orders', { replace: true });
        // })
        // .catch(function (error) {
        //   console.log(error,'error response');
        //   // navigate('dashboard/orders', { replace: true });
        // });
        toast.success("payment succesfull")
        // router?.push('/')
        resetFormFields();
    },
    onCancel: () => {
        toast.error("Transcation cancelled")
        // router?.push('/')
    },
  };
  const initializePayment = usePaystackPayment(config);

console.log(initializePayment);

 return initializePayment
 
};

export default usePaystack;
