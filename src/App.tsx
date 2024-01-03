import "./App.css";
import MainContainer from "./components/MainContainer.tsx";
import CtxContextProvider from "./context/CtxContext.tsx";
function App() {
  return (
    <CtxContextProvider>
      <MainContainer />
    </CtxContextProvider>
  );
}

export default App;
