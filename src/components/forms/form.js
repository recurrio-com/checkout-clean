import React from "react";
import { useState } from "react";
import InputCompany from "./input_company";
import InputEmail from "./input_email";
import InputPhone from "./input_phone";
import InputTerms from "./input_terms";
import InputName from "./input_name";


export default function Form() {
  const [segmentation, setSegmentation] = useState("b2c");
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <InputName />
      {segmentation == "b2b" ? <InputCompany /> : null}
      <InputEmail />
      <InputPhone />
      <InputTerms />
    </div>
  );
}
