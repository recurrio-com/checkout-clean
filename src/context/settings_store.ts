import { create } from "zustand";
import { Configuration } from "../types/configuration";

interface SettingsStore {
  currency: string
  settingsUri: string
  config: Configuration
  formData: Record<string, unknown>
  token: string
  formResponse: Record<string, unknown>
  renderImage: (encodedImage: string) => void
  setCurrency: (newCurrency: string) => void
  updateForm: (obj: Record<string, any>) => void
  invoiceId: number
  loadSettingsAsync: (token: string) => void
  pollPaymentStatusAsync: () => void
  startPaymentPoll: () => void
  submitPaymentAsync: () => Promise<any>
}

export const settingsStore = create<SettingsStore>((set, get) => ({
  invoiceId: 0,
  currency: "USD",
  apiUri: "http://api.localrecurrio.com:3000/v1/merchants/",
  settingsUri: "http://pay.localrecurrio.com:3000/v1/",
  token: "",
  formData: {},
  formResponse: {},
  config: {
    secureToken: "",
    paymentUri: "",
    segmentation: "b2c",
    totalAmount: 0,
    vatAmount: 0,
    paymentMethod: "unknown",
    init: false,
    currency: "n/a",
    terms: [],
    form: {
      name: false,
      email: false,
      phone: false,
      terms: [],
    },
  },
  loadSettingsAsync: async (token: string) => {
    let uri = `${get().settingsUri}${token}/settings`;
    if(document.location.href.includes('localhost')) {
      uri = `${document.location.href}public/data.json`
    }
    const response = await fetch(uri);
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

    const response = await fetch(get().config.paymentUri as string, {
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

    return {ok: true, payment: responseBody}
  },
  startPaymentPoll: async () => {
    const pollUri = `${get().settingsUri}/${get().token}/status`;

    const intervalID = setInterval(async () => {
      const response = await fetch(pollUri);
      if (!response.ok) {
        alert(response.statusText);
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
  
      if(data.status == "approved"){
        clearInterval(intervalID);
        alert("Payment was successful");
        window.location.href = data.redirect_url
        return
      }
      switch (data.next_action) {
        case 'wait_for_status_update':
          // continue poll
        break;
        case 'render_image':
          get().renderImage(data.image_data)
        break;
        default:
          console.log('not sure how to handle response instructions')
      }
    }, 5000);


  },
  renderImage: (encodedImage: string) => {
    //base64 encoded image
    const image = document.getElementById("qrImg") as HTMLImageElement
    image.classList.remove("invisible")
    image.src = 'data:image/png;base64,' + encodedImage
  },
  pollPaymentStatusAsync: async () => {

  },
  setCurrency: (newCurrency: string) => {
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
