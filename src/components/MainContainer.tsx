import StateProvider from "../context/StateContext";
import StateContainer from "./StateContainer";
import OptionsBar from "./OptionsBar";
import { useCtxContext } from "../context/CtxContext";
import "./MainContainer.css";
import CtxContainer from "./CtxContainer";

export default function MainContainer() {
  const ctxContext = useCtxContext();
  const colorScheme = ctxContext.selectedTheme;

  return (
    <StateProvider>
      <div style={{ textAlign: "start" }}>
        <h4 className="consumer-heading">Theme context consumer</h4>
        <div className={`main-container ${colorScheme}-main-container`}>
          <OptionsBar />
          <div className="dashboard">
            <StateContainer />
            <CtxContainer />
          </div>
        </div>
      </div>
    </StateProvider>
  );
}
