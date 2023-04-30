import { Token } from "@/common/types";
import { createContext, Context } from "react";

interface IAppContext {
  balances: Token[];
  setBalances: (balances: Token[]) => void;
}

export type AppContextType = IAppContext;

const AppContext: Context<AppContextType> = createContext({} as AppContextType);

export default AppContext;
