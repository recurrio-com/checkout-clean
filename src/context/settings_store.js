import { create } from "zustand";
import json from "../data.json";

export const settingsStore = create((set, get) => ({
  currency: "USD",
  apiUri: "http://api.localrecurrio.com:3000/v1/merchant/1/payments",
  settingsUri: "http://pay.localrecurrio.com:3000/v1/5dc3cbc5-b2c9-40b4-837b-9536d6e58b0b/settings",
  token: "",
  formData: {},
  formResponse: {},
  config: {
    init: false,
    currency: "n/a",
    form: {
      name: false,
      email: false,
      phone: false,
      terms: [],
    },
  },
  loadSettingsAsync: async () => {
    let hej = 1;
    const response = await fetch(get().settingsUri);
    if (!response.ok) {
      alert(response.statusText);
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    set({
      config: data,
    });
  },
  submitPaymentAsync: async () => {
    // validate formdata
    // send to api
    // check for response
    // if redirect, do it
    // if qr code, do it
    // if error message, show it
    // if iframe, show it
    let postBody = {
        ...get().formData,
      token: get().token,
      secure_token: get().config.secureToken,
      invoice_id: get().invoiceId,
    };

    const response = await fetch(get().config.paymentUri, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    });
    if (!response.ok) {
      alert(response.statusText);
//      throw new Error(`${response.status} ${response.statusText}`);
    }
    const responseBody = await response.json();
    console.log(responseBody);

    set({
      formResponse: responseBody,
    });
  },
  setCurrency: (newCurrency) => {
    console.log(newCurrency);
    set((state) => ({ currency: newCurrency }));
  },
  updateForm: (obj) => {
    set({
      formData: {
        ...get().formData,
        [obj.name]: obj.value
      }
    })
  }
}));
