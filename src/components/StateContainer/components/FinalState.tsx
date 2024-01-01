import { useStateContext } from "../../../context/StateContext";
import GreenTriangle from "../../../assets/triangle.png";
import BlueTriangle from "../../../assets/BlueTriangle.png";

export default function FinalState() {
  const stateContext = useStateContext();
  const currentShapeColor = `${stateContext.SelectedColor}-${stateContext.SelectedShape}`;
  return (
    <div className={` ${currentShapeColor}`}>
      <img
        src={
          stateContext.SelectedColor === "Blue" ? BlueTriangle : GreenTriangle
        }
        alt=""
        className="shape state-triangle"
        width="80px"
      />
    </div>
  );
}
