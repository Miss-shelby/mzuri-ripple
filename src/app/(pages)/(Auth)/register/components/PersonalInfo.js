import PhoneNumberInput, { ValidatePhoneNumberInput } from "@/app/_components/phoneNumber/PhoneNumberInput";

const PersonalInfo = ({
  submitForm,
  handlePrevious,
  loading,
  values,
  handleChange,
  errors,
}) => {

  
  
  return (
    <>
      <div>
        <h2 className="pt-6 font-bold text-2xl text-center">
          Register Your <span className="font-medium">Personal Info</span>
        </h2>
        <label className="text-black-100 font-medium mt-6 w-full block">
          Name
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={values.fullname}
            className="input h-9 input-bordered input-custom-brown w-full mt-3 focus:outline-none"
          />
          <p className="text-red-500">{errors.fullname}</p>
        </label>
        <label className="text-black-100 font-medium  mt-6 w-full block">
          Date of Birth
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            value={values.dob}
            className="input h-9 input-bordered input-custom-brown w-full mt-3 focus:outline-none"
          />
          <p className="text-red-500">{errors.dob}</p>
        </label>
        <label className="text-black-100 font-medium  mt-6 w-full block">
          Phone No.
          <input
            type="tell"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="+234xxxxxxx"
            value={values.phoneNumber}
            className="input h-9 input-bordered input-custom-brown w-full mt-3 focus:outline-none "
          />
          <p className="text-red-500">{errors.phoneNumber}</p>
        </label>
        {/* <PhoneNumberInput/> */}
        {/* <ValidatePhoneNumberInput/> */}
        <label className="text-black-100 font-medium  mt-6 w-full block">
          Address
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={values.address}
            className="input h-9 input-bordered input-custom-brown w-full mt-3 focus:outline-none"
          />
          <p className="text-red-500">{errors.address}</p>
        </label>
        <div className="flex flex-wrap mb-12">
        <button
        type="submit"
        disabled={loading}
        className={`btn ${loading ? "bg-gray-400" : "bg-custom-blue"}
          hover:bg-custom-blue text-white w-[10.5rem]  text-lg font-medium text-center mx-auto mt-6 h-10 min-h-10 flex items-center justify-center relative`}
        onClick={submitForm}
        style={loading ? { backgroundColor: '#cbd5e1' } : {}}
      >
        {loading ? (
          <div className="flex items-center justify-center ">
            <span className="Btnloader"></span>
        </div>
        ) : (
          "Finish"
        )}
      </button>

          <button
            className="btn bg-custom-red hover:bg-custom-blue text-white w-[10.5rem] text-lg font-medium 
              text-center mx-auto mt-6 h-10 min-h-10"
            onClick={handlePrevious}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
