import StateProvider from "../context/StateContext";
import StateContainer from "./StateContainer";
import "./MainContainer.css";
import OptionsBar from "./OptionsBar";

export default function MainContainer() {
  return (
    <StateProvider>
      <div className="main-container">
        <OptionsBar />
        <StateContainer />
      </div>
    </StateProvider>
  );
}
