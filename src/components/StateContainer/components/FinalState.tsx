import { useStateContext } from "../../../context/StateContext";
import GreenTriangle from "../../../assets/triangle.png";
import BlueTriangle from "../../../assets/BlueTriangle.png";
import GreenSquare from "../../../assets/GreenSquare.png";
import BlueSquare from "../../../assets/BlueSquare.png";

export default function FinalState() {
  const stateContext = useStateContext();
  const currentShape = stateContext.SelectedShape;
  const currentColor = stateContext.SelectedColor;

  const currentShapeColor = `${currentColor}-${currentShape}`;
  return (
    <div className={` ${currentShapeColor}`}>
      <img
        src={currentColor === "green" ? GreenTriangle : BlueTriangle}
        className={`shape state-triangle state-${currentColor}`}
        width="70px"
      />
      <img
        src={currentColor === "green" ? GreenSquare : BlueSquare}
        className={`shape state-square state-${currentColor}`}
        width="55px"
      />
    </div>
  );
}
