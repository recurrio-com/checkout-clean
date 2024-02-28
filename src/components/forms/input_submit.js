import React from "react";
import { useState, useEffect } from "react";
import {settingsStore} from "../../context/settings_store"

export default function InputSubmit() {
  const conf =  settingsStore((state) => state.config)
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  useEffect(() => {
    if (conf.init) {
      setCurrency(conf.currency);
      setTotalAmount(conf.totalAmount);
    }
  }, [conf]);

  return (
    <div className="mt-10">
    <button
      type="submit"
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Pay order of {totalAmount} <span className="uppercase">{currency}</span>
    </button>
  </div>

    );
}
