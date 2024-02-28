import {create} from "zustand"

export const settingsStore  = create((set) => ({
    currency: 'USD',
    setCurrency: (newCurrency) => {
        console.log(newCurrency)
        set((state) => ( {currency: newCurrency}))
    }
}))