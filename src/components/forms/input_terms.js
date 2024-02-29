import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { settingsStore } from "../../context/settings_store";
import Checkbox from "./checkbox";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InputTerms() {
  const conf = settingsStore((state) => state.config);
  const [terms, setTerms] = useState([]);

  const [term, setTerm] = useState({ title: "default", content: "" });
  const [agreed, setAgreed] = useState({});

  useEffect(() => {
    if (conf.form.terms.length > 0) {
      setTerms(conf.form.terms);
    }
  }, [conf]);

  const isChecked = (id) => {
    if (agreed[id]) {
      return true;
    } else {
      return false;
    }
  };

  const setChecked = (id, checked) => {
    agreed[id] = checked;

    console.log(agreed);
    setAgreed(agreed);
  };

  let elements = terms.map(function (term) {
    return <Checkbox term={term} onChange={setChecked} />;
  });

  return <>{elements}</>;
}
