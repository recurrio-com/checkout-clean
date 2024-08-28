import React from "react";
import { useEffect, useState, useContext } from "react";
import Header from "./header/header";
import InputSubmit from "./forms/input_submit";
import Form from "./forms/form";
import Footer from "./footer/footer";
import { settingsStore } from "../context/settings_store";
import Loader from "./loader";

export const Main = () => {
  const submitPayment = settingsStore((state) => state.submitPaymentAsync)
  const isLoading = settingsStore((state) => state.isLoading)

  const state = settingsStore();


  useEffect(() => { }, []);

  const onSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    state.updateForm({ name: "payment_method", value: "swish" });

    const response = submitPayment().then((response) => {
      if (response.ok) {
        if (response.payment.status === "approved") {
          alert("Payment was successful");
          return
        }

        if (response.payment.next_action === "wait_for_status_update") {
          //poll payment for succes/fail
          state.startPaymentPoll()
        }

        if (response.payment.next_action === "render_image") {
          state.startPaymentPoll()
        }

      }
    });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 roboto-regular">
      <Header isLoading={isLoading}></Header>
      <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <Form isLoading={isLoading} />
        <Loader isLoading={isLoading} />
        <InputSubmit isLoading={isLoading} /> 
        <Footer />
      </form>
    </div>
  );
};

export default Main;
