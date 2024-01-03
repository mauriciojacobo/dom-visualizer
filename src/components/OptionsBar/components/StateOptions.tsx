import SquareShape from "../../../assets/square-shape.png";
import TriangleShape from "../../../assets/triangle-shape.png";
import Blue from "../../../assets/bluecolor.png";
import Green from "../../../assets/greencolor.png";

import { useStateContext } from "../../../context/StateContext";

type StateOptionsProps = {
    theme:string,
}

export default function StateOptions(props:StateOptionsProps) {
  const stateContext = useStateContext();
  const theme = props.theme;
  return (
    <div className={`state-options ${theme}-state-options`}>
    <h3>Cambia el estado</h3>
    <div className="state-options-container">      
    <div className="shapes option">
        <div className={`option-box ${theme}-option-box`} onClick={() => stateContext.setSelectedShape("square")}>
          <img src={SquareShape} className="shape-option" />
        </div>
        <div className={`option-box ${theme}-option-box`} onClick={() => stateContext.setSelectedShape("triangle")}>
          <img src={TriangleShape} className="shape-option" />
        </div>
      </div>

      <div className="colors option">
        <div className="color-box" 
            onClick={() => stateContext.setSelectedColor("green")} >
          <img
            src={Green}
            className="color-option"
          />
        </div>
        <div className="color-box" onClick={() => stateContext.setSelectedColor("blue")}>
          <img
            src={Blue}
            className="color-option"
          />
        </div>
      </div>

      </div>

    </div>
  );
}
