import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Input from "react-phone-number-input/input";
import "react-phone-number-input/style.css";


const PhoneNumberInput = () => {
  const [phoneValue, setPhoneValue] = useState("");
  return (
    <div className="mt-8">
      <p>Number:{phoneValue}</p>
      <PhoneInput className='input h-9 input-bordered input-custom-brown w-full mt-3 focus:outline-none'
     defaultCountry='NG'
     international
    //  countries={'NG'}
     countryCallingCodeEditable={false}
        placeholder="Enter phone number"
        value={phoneValue}
        onChange={setPhoneValue}/>
        {/* input with only one country */}
      {/* <Input country="NG" value={phoneValue} onChange={setPhoneValue} /> */}
    </div>
  );
};

export default PhoneNumberInput;

import {
	formatPhoneNumber,
	formatPhoneNumberIntl,
	isPossiblePhoneNumber,
	isValidPhoneNumber
} from 'react-phone-number-input'

export const ValidatePhoneNumberInput = () => {
    const [value, setValue] = useState("");
    return (
      <div className="mt-8">
        <p>Number:{value}</p>
        <PhoneInput defaultCountry="NG"
         international
         countryCallingCodeEditable={false}
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/>

       <p> Is possible: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}</p>
       <p>Is valid: {value && isValidPhoneNumber(value) ? 'true' : 'false'}</p>
       {/* <p>National: {value && formatPhoneNumber(value)}</p> 
       <p> International: {value && formatPhoneNumberIntl(value)}</p> */}
       {value &&isValidPhoneNumber(value) === false && 
       <p className="text-red-500">error:{value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}</p> }
       
      </div>
    );
  };
  
  