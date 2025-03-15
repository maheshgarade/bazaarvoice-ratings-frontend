"use client";

import { Device } from "@/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  productData: Device | null;
  setProductData: (data: Device | null) => void;
  // Add additional states here in the future
}

// Create context
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create provider
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productData, setProductData] = useState<Device | null>(null);

  return (
    <AppContext.Provider value={{ productData, setProductData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
