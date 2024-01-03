import ShapeState from "../ShapeState";
import { useStateContext } from "../../context/StateContext";
import "./index.css";
import rArrow from "../../assets/rigtharrow.png";
import FinalState from "./components/FinalState";
import ColorState from "./components/ColorState";
import { useCtxContext } from "../../context/CtxContext";

export default function StateContainer() {
  const stateContext = useStateContext();
  const ctxContext = useCtxContext();
  const theme = ctxContext.selectedTheme;
  return (
    <>
      <div className="state-container">
        <div className="state-boxes">
          <div className={`box ${theme}-box`}>
            <ColorState currentColor={stateContext.SelectedColor} />
          </div>
          <div className={`box ${theme}-box`}>
            <ShapeState currentShape={stateContext.SelectedShape} />
          </div>
        </div>
        <div className="arrow">
          <img src={rArrow} alt="" width="100px" />
        </div>
        <div className="final-state-wrapper">
          <div className="final-state">
            <FinalState />
          </div>
        </div>
      </div>
    </>
  );
}
