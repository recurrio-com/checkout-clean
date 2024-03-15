import React from "react";
import { useState } from "react";
import InputCompany from "./input_company";
import InputEmail from "./input_email";
import InputPhone from "./input_phone";
import InputTerms from "./input_terms";
import InputName from "./input_name";
import { settingsStore } from "../../context/settings_store";

export default function Form() {
  const conf = settingsStore((state) => state.config);

  const [segmentation, setSegmentation] = useState("b2c");
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      {conf.form.name ? <InputName /> : null}
      {conf.segmentation == "b2b" ? <InputCompany /> : null}
      {conf.form.email ? <InputEmail /> : null}
      {conf.form.phone ? <InputPhone /> : null}
      <InputTerms />
      <img className="invisible" src="#" id="qrImg" />
    </div>
  );
}
