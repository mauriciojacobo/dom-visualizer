import { ReactNode, createContext, useContext, useState } from "react";

type StateContextProps = {
  SelectedColor: string;
  SelectedShape: string;
  setSelectedShape: (_: string) => void;
  setSelectedColor: (_: string) => void;
};

type StateProviderProps = {
  children: ReactNode;
};

export const StateContext = createContext<StateContextProps | undefined>(
  undefined,
);

export function useStateContext(): StateContextProps {
  const selectedDiv = useContext(StateContext);

  if (selectedDiv === undefined) {
    throw new Error("StateContext must be inside a context provider");
  }

  return selectedDiv;
}

export default function StateProvider(props: StateProviderProps) {
  const [selectedShape, setSelectedShape] = useState("triangle");
  const [selectedColor, setSelectedColor] = useState("blue");

  const initialContextValue = {
    SelectedShape: selectedShape,
    SelectedColor: selectedColor,
    setSelectedShape: setSelectedShape,
    setSelectedColor:setSelectedColor,
  };

  return (
    <StateContext.Provider value={initialContextValue}>
      {props.children}
    </StateContext.Provider>
  );
}
