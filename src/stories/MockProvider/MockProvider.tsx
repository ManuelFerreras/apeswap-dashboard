import React, { ReactNode } from "react";
import AppContext, { AppContextType } from "@/context/context";
import { Token } from "@/common/types";

interface MockAppProviderProps {
  children: ReactNode;
}

const MockAppProvider: React.FC<MockAppProviderProps> = ({ children }) => {
  const mockAppContext: AppContextType = {
    balances: [],
    setBalances: (balances: Token[]) => {},
  };

  return (
    <AppContext.Provider value={mockAppContext}>{children}</AppContext.Provider>
  );
};

export default MockAppProvider;
