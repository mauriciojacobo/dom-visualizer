import { useState } from "react";
import "./DivContainer.css";
import ShapeState from "./ShapeState";

export default function DivContainer() {
  const [currentShape, setCurrentShape] = useState("triangle");

  const changeShape = () => {
    setCurrentShape(currentShape === "triangle" ? "square" : "triangle");
  };

  return (
    <>
      <div
        className="divn"
        style={{
          height: "200px",
          width: "500px",
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          borderRadius: 30,
        }}
      >
        <ShapeState currentShape={currentShape} />
      </div>
      <button onClick={changeShape}>Change Shape</button>
    </>
  );
}
