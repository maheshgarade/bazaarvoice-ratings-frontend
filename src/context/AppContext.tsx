"use client";

import { Device } from "@/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  productData: Device | null;
  setProductData: (data: Device | null) => void;
  isLoading: boolean; // Loader visibility state
  setIsLoading: (loading: boolean) => void; // Function to control the loader
  // Add additional states here in the future
}

// Create context
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create provider
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productData, setProductData] = useState<Device | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        productData,
        setProductData,
        isLoading,
        setIsLoading,
      }}
    >
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
