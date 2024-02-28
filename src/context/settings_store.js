import {create} from "zustand"
import json from "../data.json"

export const settingsStore  = create((set, get) => ({
    currency: 'USD',
    apiUri: 'public/data.json',
    token: '',
    config: {
        init: false,
        currency: 'n/a',
        form: {
            name: false,
            email: false,
            phone: false,
            terms: []
        }
    },
    loadSettingsAsync: async () => {
        let hej = 1
        const response = await fetch(get().apiUri)
        if (!response.ok) {
            alert(response.statusText)
            throw new Error(`${response.status} ${response.statusText}`);
          }
        const data = await response.json()

        set({
            config: data,
        })  
    },
    setCurrency: (newCurrency) => {
        console.log(newCurrency)
        set((state) => ( {currency: newCurrency}))
    }
}))