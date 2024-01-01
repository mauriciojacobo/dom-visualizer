import ShapeState from "../ShapeState";
import { useStateContext } from "../../context/StateContext";
import "./index.css";
import rArrow from "../../assets/rigtharrow.png";
import FinalState from "./components/FinalState";

export default function StateContainer() {
  const stateContext = useStateContext();
  return (
    <div className="state-container">
      <div className="state-boxes">
        <div className="box">
          <ShapeState currentShape={stateContext.SelectedShape} />
        </div>
        <div className="box">
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
  );
}
