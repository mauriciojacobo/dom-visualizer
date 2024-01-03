import { ReactNode, createContext, useContext, useState } from "react";

type CtxContext = {
  selectedLang: string;
  selectedTheme: string;
  setSelectedLang: (_: string) => void;
  setSelectedTheme: (_: string) => void;
};

type CtxContextProviderProps = {
  children: ReactNode;
};

const CtxContext = createContext<CtxContext | undefined>(undefined);

export const useCtxContext = () => {
  const ctxContext = useContext(CtxContext);

  if (ctxContext === undefined) {
    throw new Error("CtxContext must be inside a contex provider}");
  }

  return ctxContext;
};

export default function CtxContextProvider(props: CtxContextProviderProps) {
  const [selectedLang, setSelectedLang] = useState("es");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const ctxProviderValues = {
    selectedLang: selectedLang,
    selectedTheme: selectedTheme,
    setSelectedLang: setSelectedLang,
    setSelectedTheme: setSelectedTheme,
  };

  return (
    <CtxContext.Provider value={ctxProviderValues}>
      {props.children}
    </CtxContext.Provider>
  );
}
