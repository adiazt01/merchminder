"use client";

interface SalesContextInterface {
  selectedSale: Sale | null;
  setSelectedSale: (sale: Sale) => void;
}

import { Sale } from "@prisma/client";
import { createContext, useContext, useState } from "react";

export const SalesContext = createContext<SalesContextInterface>({
    selectedSale: null,
    setSelectedSale: () => {},
});

export const SalesProvider = ({ children }:{
    children: React.ReactNode;
}) => {
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);

  return (
    <SalesContext.Provider value={{ selectedSale, setSelectedSale }}>
      {children}
    </SalesContext.Provider>
  );
};
