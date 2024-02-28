import React from "react";
import { useEffect, useState, useContext } from "react";
import Header from "./header/header";
import InputSubmit from "./forms/input_submit";
import Form from "./forms/form";
import Footer from "./footer/footer";

export const Main = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 roboto-regular">
      <Header></Header>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <Form />
        <InputSubmit />
        <Footer />
      </form>
    </div>
  );
}

export default Main;
