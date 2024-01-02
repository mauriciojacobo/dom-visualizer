import GreenTriangle from "../../../assets/triangle.png";
import BlueTriangle from "../../../assets/BlueTriangle.png";
import GreenSquare from "../../../assets/GreenSquare.png";
import BlueSquare from "../../../assets/BlueSquare.png";

import { useStateContext } from "../../../context/StateContext";

export default function FinalState() {
  const stateContext = useStateContext();
  const currentShape = stateContext.SelectedShape;
  const currentColor = stateContext.SelectedColor;

  const currentShapeColor = `${currentColor}-${currentShape}`;
  return (
    <div className={` ${currentShapeColor}`}>
      <img
        src={GreenTriangle}
        className={`shape state-greentriangle `}
        width="70px"
      />
      <img
        src={BlueTriangle}
        className={`shape state-bluetriangle `}
        width="70px"
      />
      <img
        src={ GreenSquare }
        className={`shape state-greensquare `}
        width="55px"
      />
      <img
        src={ BlueSquare }
        className={`shape state-bluesquare `}
        width="55px"
      />
    </div>
  );
}
