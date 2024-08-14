import React from "react";
import { useState, useEffect } from "react";
import { settingsStore } from "../../context/settings_store";
import Checkbox from "./checkbox";
import { Configuration } from "../../types/configuration";

interface ITerm {
  id: string
  link: string
  title: string;
  checked: boolean;
  required: boolean;
}

export default function InputTerms() {
  const conf = settingsStore((state) => state.config) as unknown as Configuration
  const state = settingsStore();
  const [terms, setTerms] = useState<ITerm[]>([]);
  const [agreed, setAgreed] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    if (conf.form.terms.length > 0) {
      setTerms(conf.form.terms as unknown as ITerm[]);
    }
  }, [conf]);

  const setChecked = (id: string, checked: boolean) => {
    agreed[id] = checked;
    state.updateForm({ name: "terms_" + id, value: checked });
    setAgreed(agreed);
  };

  let elements = terms.map(function (term: ITerm) {
    return <Checkbox term={term} onChange={setChecked} key={term.id} />;
  });

  return <>{elements}</>;
}
