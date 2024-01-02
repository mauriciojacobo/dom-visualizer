import StateProvider from "../context/StateContext";
import StateContainer from "./StateContainer";
import "./MainContainer.css";
import OptionsBar from "./OptionsBar";
import CtxContextProvider from "../context/CtxContext";

export default function MainContainer() {
  return (
    <StateProvider>
      <CtxContextProvider>
        <div className="main-container">
          <OptionsBar />
          <StateContainer />
        </div>
      </CtxContextProvider>
    </StateProvider>
  );
}
