import { useCtxContext } from "../../context/CtxContext";
import "./index.css";

export default function CtxContainer() {
  const ctxContext = useCtxContext();
  const theme = ctxContext.selectedTheme;

  const color = theme ==="dark" ? "#ffffff" : "#0f0d0e";
  return (
    <>
      <div className="ctx-dashboard">
        <h4 style={{ margin: "0 0", padding: "0 0" , color:color}}>
          Language context consumer
        </h4>
        <div className={`ctx-container ${theme}-ctx-container`}>:</div>
      </div>
    </>
  );
}
