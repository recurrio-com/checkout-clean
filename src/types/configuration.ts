export interface Configuration {
    init: boolean;
    currency: string;
    totalAmount: number;
    vatAmount: number;
    paymentMethod: string;
    segmentation: string;
    form: Form
    secureToken: string;
    paymentUri: string
    terms: Array<string>;
  }
  
  interface Form {
    name: boolean;
    email: boolean;
    phone: boolean;
    terms: Array<string>;
  }