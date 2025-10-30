import CardStation from "../components/CardStation";
import { useState, useEffect } from "react";
import stationCitizen from "../../stations.json"

export default function NavLieuxnav() {

  const [stations, setStations] = useState(stationCitizen);
  const [toggleDisplay, setToggleDisplay] = useState()

  useEffect(()=>{
    
  },[])

  return (
    <nav className="flex flex-col gap-4 justify-start w-[10%] h-full ml-[0.2rem] p-2 bg-zinc-950 rounded-2xl">
      {/* <div><input className="bg-white rounded-xl w-full p-1 my-[0.2rem]" type="text"/></div> */}
      <button className="bg-zinc-800 rounded-xl">Ajouter</button>
      <div className="flex flex-col gap-4 text-xs list-none text-white">{stations.map((sta, index) => (<CardStation key={index} station={sta} lien_image={sta.image_url}>{sta.name}</CardStation>))}</div> 
    </nav>
  );
}
