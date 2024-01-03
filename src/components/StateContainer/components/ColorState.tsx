import Blue from "../../../assets/bluecolor.png";
import Green from "../../../assets/greencolor.png";
import "./ColorState.css";

type ColorStateProps = {
  currentColor: string;
  theme?: string;
  lang?: string;
};

export default function ColorState(props: ColorStateProps) {
  return (
    <>
      <div className={`color-container ${props.currentColor} `}>
        <img className="stateGreen color" src={Green} />

        <img className="stateBlue color" src={Blue} />
      </div>
    </>
  );
}
