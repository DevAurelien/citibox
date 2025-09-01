import "./styles/App.css";
import Header from "./body/header";
import NavLieux from "./body/NavLieux";
import Corps from "./body/corps";
import Aside from "./body/aside";

function App() {
  return (
    <>
      <Header />
      <div className="flex mt-[1rem] gap-4 px-2 size-full">
        <NavLieux />
        <Corps />
        <Aside/>
      </div>
    </>
  );
}

export default App;
