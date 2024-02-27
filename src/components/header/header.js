import React, { useState, useEffect } from "react";

export default function Header() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [currency, setCurrency] = useState("SEK");

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Recurrio Payment
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Pay the order of {totalAmount} {currency}, including VAT of {vatAmount}{" "}
        {currency}
      </p>
      <div className="text-gray-900 mt-10">Pay with Swish</div>
    </div>
  );
}
