import CardStation from "../components/CardStation";
import { useState, useEffect, useContext } from "react";
import StationsContext from "../../contexte/stations_context";

export default function NavLieuxnav() {
  const { stations, setStations, setStationSelected, stationSelected } = useContext(StationsContext);
  const [toggleDisplay, setToggleDisplay] = useState();

  useEffect(() => {
    setToggleDisplay(
      stations.map((sta, index) => (
        <CardStation key={index} station={sta} lien_image={sta.image_url} position={index} onClick={()=>setStationSelected(sta)}>
          {sta.name}
        </CardStation>
      ))
    );
  }, [stations]);


  return (
    <nav className="flex flex-col gap-4 justify-start w-[10%] h-full ml-[0.2rem] p-2 bg-zinc-950 rounded-2xl hover:overflow-y-scroll h-[200px] scrollbar-dark">
      {/* <div><input className="bg-white rounded-xl w-full p-1 my-[0.2rem]" type="text"/></div> */}
      {/* <button className="bg-zinc-800 rounded-xl">Ajouter</button> */}
      <ul
        className="flex flex-col gap-2 text-[0.6rem] text-white h-[200vh]"
      >
        {toggleDisplay}
      </ul>
    </nav>
  );
}
