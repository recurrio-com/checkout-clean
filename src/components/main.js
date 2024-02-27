import React, { Component } from "react";
import { useState, useEffect } from "react";
import InputCompany from "./forms/input_company";
import InputEmail from "./forms/input_email";
import Header from "./header/header";
import InputPhone from "./forms/input_phone";
import InputTerms from "./forms/input_terms";
import InputSubmit from "./forms/input_submit";
import Footer from "./footer/footer";

export default function Main({ state }) {
  const [segmentation, setSegmentation] = useState("b2c");
  const [vatAmount, setVatAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("swish");

  useEffect(() => {}, []);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 roboto-regular">
      {/*header*/}
      <Header></Header>
      {/*header-end*/}
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/*company*/}
          {segmentation == "b2b" ? <InputCompany /> : null}
          {/*company-end*/}
          {/*email*/}
          <InputEmail />
          {/*email-end*/}
          {/*phone*/}
          <InputPhone />
          {/*phone-end*/}
          <InputTerms />
        </div>
        
        {/*submit*/}
        <InputSubmit />
        {/*submit-end*/}
        {/*footer*/}
        <Footer />
        {/*footer-end*/}
      </form>
    </div>
  );
}
