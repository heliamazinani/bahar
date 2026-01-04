import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext(null);

export function CheckoutProvider({ children }) {
  const [isStepValid, setIsStepValid] = useState(false);

  return (
    <CheckoutContext.Provider value={{ isStepValid, setIsStepValid }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext);
}
