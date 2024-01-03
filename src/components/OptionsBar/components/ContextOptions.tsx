import { useCtxContext } from "../../../context/CtxContext";
import "./ContextOptions.css";

type ContextOptionsProps = {
  theme: string;
};

export default function ContextOptions(props: ContextOptionsProps) {
  const ctxContext = useCtxContext();
  const theme = props.theme;
  return (
    <div className={`state-options ${theme}-state-options `}>
      <h3> Cambia el Contexto</h3>
      <div className="context-option-container">
        <div className="lang-container">
          <div
            className={`language ${theme}-option-box`}
            onClick={() => ctxContext.setSelectedLang("es")}
            role="button"
            tabIndex={0}
          >
            <p> es 🇪🇸 </p>
          </div>
          <div
            className={`language ${theme}-option-box`}
            onClick={() => ctxContext.setSelectedLang("en")}
            role="button"
            tabIndex={0}
          >
            <p>en 🇺🇸 </p>
          </div>
        </div>
        <div className="theme-container">
          <div
            className="theme"
            onClick={() => ctxContext.setSelectedTheme("dark")}
            role="button"
            aria-disabled={ctxContext.selectedTheme === "dark"}
            tabIndex={0}
          >
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <p> dark</p>
            <span className="material-symbols-outlined" style={{}}>
              dark_mode
            </span>
          </div>
          <div
            className="theme"
            onClick={() => ctxContext.setSelectedTheme("light")}
            role="button"
            tabIndex={0}
          >
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <p> light</p>
            <span className="material-symbols-outlined">wb_sunny</span>
          </div>
        </div>
      </div>
    </div>
  );
}
