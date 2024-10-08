import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { settingsStore } from "../../context/settings_store";
import { FormInputProps } from "../../types/formInputProps";

export default function InputName({ onChange }: FormInputProps) {
  return (
    <>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          First name
        </label>
        <div className="mt-2.5">
          <input
            onChange={onChange}
            type="text"
            name="first_name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last_name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2.5">
          <input
            onChange={onChange}
            type="text"
            name="last_name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}
