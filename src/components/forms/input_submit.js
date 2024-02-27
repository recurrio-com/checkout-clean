import React from "react";
import { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InputSubmit() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState("SEK");

  return (
    <div className="mt-10">
    <button
      type="submit"
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Pay order of {totalAmount} {currency}
    </button>
  </div>

    );
}
