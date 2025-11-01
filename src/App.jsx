import "./styles/App.css";
import Header from "./body/header";
import NavLieux from "./body/NavLieux";
import Corps from "./body/corps";
import Aside from "./body/aside";
import { StationsProvider } from "../contexte/stations_context";
import { ComposantsProvider } from "../contexte/composants_ship_context";

function App() {
  return (
    <StationsProvider>
      <ComposantsProvider>
        <Header />
        <div className="flex mt-[1rem] gap-4 px-2 size-full">
          <NavLieux />
          <Corps />
          <Aside />
        </div>
      </ComposantsProvider>
    </StationsProvider>
  );
}

export default App;
