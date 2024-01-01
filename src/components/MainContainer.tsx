import StateProvider from "../context/StateContext";
import DivContainer from "./DivContainer";
import StateContainer from "./StateContainer";
import "./MainContainer.css";

export default function MainContainer() {
  return (
    <StateProvider>
      <div className="main-container">
        <StateContainer />
      </div>
    </StateProvider>
  );
}
