import "./index.css";

import StateOptions from "./components/StateOptions";
import ContextOptions from "./components/ContextOptions";
import { useCtxContext } from "../../context/CtxContext";

export default function OptionsBar() {

  const ctxContext = useCtxContext();

  return (
    <div className="options-bar">
      <StateOptions theme={ctxContext.selectedTheme} />
      <ContextOptions theme={ctxContext.selectedTheme}/>
    </div>
  );
}
