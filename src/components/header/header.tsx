import React, { useState, useContext, useEffect } from "react";
import {settingsStore} from "../../context/settings_store"

interface Configuration {
  init: boolean;
  currency: string;
  totalAmount: number;
  vatAmount: number;
  paymentMethod: string;
}

export default function Header() {
  const conf =  settingsStore((state) => state.config) as unknown as Configuration;

  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [vatAmount, setVatAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  useEffect(() => {
    if (conf.init) {
      setCurrency(conf.currency);
      setTotalAmount(conf.totalAmount);
      setVatAmount(conf.vatAmount);
      setPaymentMethod(conf.paymentMethod);
    }
  }, [conf]);
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Recurrio Payment
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Pay the order of {totalAmount} <span className="uppercase">{currency}</span>, including VAT of {vatAmount}{" "}
        <span className="uppercase">{currency}</span>
      </p>
      <div className="text-gray-900 mt-10">Pay with  <span className="capitalize">{paymentMethod}</span></div>
    </div>
  );
}
