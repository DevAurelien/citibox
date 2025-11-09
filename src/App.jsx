import "./styles/App.css";
import Header from "./body/header.jsx";
import NavLieux from "./body/navLieux.jsx";
import Corps from "./body/corps.jsx";
import Aside from "./body/aside.jsx";
import { StationsProvider } from "../contexte/stations_context.jsx";
import { ComposantsProvider } from "../contexte/composants_ship_context.jsx";

function App() {
  return (
    <StationsProvider>
      <ComposantsProvider>
        <Header />
        <div className="flex mt-[1rem] size-full h-[85vh] gap-4">
          <NavLieux />
          <Corps />
          <Aside />
        </div>
      </ComposantsProvider>
    </StationsProvider>
  );
}

export default App;
