"use client";

import { Client, Sale, SaleToProduct } from "@prisma/client";
import { createContext, useContext, useState } from "react";

type SaleWithDetails = Sale & {
  client: Client;
  saleItems: SaleToProduct[];
};

interface SalesContextInterface {
  selectedSale: SaleWithDetails | null;
  setSelectedSale: (sale: SaleWithDetails) => void;
}


export const SalesContext = createContext<SalesContextInterface>({
    selectedSale: null,
    setSelectedSale: () => {},
});

export const SalesProvider = ({ children }:{
    children: React.ReactNode;
}) => {
  const [selectedSale, setSelectedSale] = useState<SaleWithDetails | null>(null);

  return (
    <SalesContext.Provider value={{ selectedSale, setSelectedSale }}>
      {children}
    </SalesContext.Provider>
  );
};
