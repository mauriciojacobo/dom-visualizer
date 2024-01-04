import "./ShapeState.css";
import TriangleShape from "../../../assets/triangle-shape.png";
import SquareShape from "../../../assets/square-shape.png";

type ShapeStateProps = {
  currentShape: string;
};

export default function ShapeState(props: ShapeStateProps) {
  return (
    <>
      <div
        className={`shape-container ${
          props.currentShape === "triangle" ? "triangle" : "square"
        } `}
      >
        <img
          className="stateTriangle shape"
          src={TriangleShape}
          alt=""
          width="100px"
        />

        <img
          className="stateSquare shape"
          src={SquareShape}
          alt=""
          width="110px"
        />
      </div>
    </>
  );
}
