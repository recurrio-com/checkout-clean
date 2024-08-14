import React from "react";
import { useState } from "react";
import InputCompany from "./input_company";
import InputEmail from "./input_email";
import InputPhone from "./input_phone";
import InputTerms from "./input_terms";
import InputName from "./input_name";
import { settingsStore } from "../../context/settings_store";
import { Configuration } from "../../types/configuration";

export default function Form({isLoading}: {isLoading: boolean}) {
  const conf = settingsStore((state) => state.config) as unknown as Configuration;
  const state = settingsStore();
  const [segmentation, setSegmentation] = useState("b2c");
  if(isLoading) {
    return <></>
  }
  
  const onFormChange = (e: React.ChangeEvent<any>) => {
    state.updateForm({ name: e.target.name, value: e.target.value });
  }
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      {conf.form.name ? <InputName onChange={onFormChange} /> : null}
      {conf.segmentation == "b2b" ? <InputCompany onChange={onFormChange} /> : null}
      {conf.form.email ? <InputEmail onChange={onFormChange} /> : null}
      {conf.form.phone ? <InputPhone onChange={onFormChange} /> : null}
      <InputTerms />
      <img className="invisible" src="#" id="qrImg" />
    </div>
  );
}
