"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Register from "./components/Register";
import PersonalInfo from "./components/PersonalInfo";
import PaymentGateway from "./components/Payment";
import { useRegister } from "@/app/_components/hook/custom/useRegister";


const tabs = ["register", "personal-info"];
const RegisterPage = () => {
  const {loading,onSubmitHandler,defaultValues,formSchema} = useRegister()
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  //handling the steps navigation
  const handlePrevious = () => {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
      setActiveTab(tabs[step - 2]);
    }
  };
  const handleNext = () => {
    if (step < tabs.length) {
      setStep((curStep) => curStep + 1);
      setActiveTab(tabs[step]);
    }
  };


  return (
    <div className="flex justify-center items-center pb-[67px] pt-16">
      <div>
        <Image src="/register.png" alt="cowry image" height={500} width={440} />
      </div>
      <Formik
        onSubmit={onSubmitHandler}
        validationSchema={formSchema}
        initialValues={defaultValues}
      >
        {({ values, handleChange, submitForm, errors }) => {
          return (
            <Form className="bg-custom-green flex flex-col px-[30px] w-[26rem] h-[650px]">
              <ul className="steps pt-14">
                {tabs.map((tab, index) => {
                  return (
                    <li
                      key={tab}
                      className={`step ${
                        step - 1 >= index ? " step-primary" : ""
                      }`}
                    ></li>
                  );
                })}
              </ul>
              {activeTab === "register" && (
                <Register
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
              )}
              {activeTab === "personal-info" && (
                <PersonalInfo
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                  submitForm={submitForm}
                  loading={loading}
                 
                />
              )}
              {/* {activeTab === "payment-gateway" && (
                <PaymentGateway
                  handleNext={handleNext}
                  submitForm={submitForm}
                  loading={loading}
                  handlePrevious={handlePrevious}
                />
              )} */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterPage;
