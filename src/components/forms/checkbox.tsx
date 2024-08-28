import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Checkbox({ term, onChange }: { term: any, onChange: any }) {
  const [agreed, setAgreed] = useState<boolean>(false);

  const handleChange = () => {
    setAgreed(!agreed);
    onChange(term.id, !agreed);
  }

  return (
    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2" key={term.id}>
      <div className="flex h-6 items-center">
        <Switch
          checked={agreed}
          onChange={handleChange}
          className={classNames(
            agreed ? "bg-indigo-600" : "bg-gray-200",
            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          )}
        >
          <span className="sr-only">{term.title}</span>
          <span
            aria-hidden="true"
            className={classNames(
              agreed ? "translate-x-3.5" : "translate-x-0",
              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
      </div>
        <a
          href={term.link}
          className="font-semibold text-indigo-600"
          target="_blank"
        >
          {term.title}
        </a>
    </Switch.Group>
  );
}
