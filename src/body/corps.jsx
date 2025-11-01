import CardObject from "../components/CardObject";
import StationsContext from "../../contexte/stations_context";
import { useContext, useState } from "react";

export default function Corps() {

  const {stationSelected} = useContext(StationsContext);
  
  return (
    <div className="flex w-[70%] h-full bg-zinc-950 rounded-2xl">
      <div className="grid w-full aspect-square">

        <img
          className="w-full h-full row-span-full col-span-full object-cover rounded-2xl"
          src={stationSelected ? stationSelected.image_url : "/Checkmate.png"}
          alt={stationSelected ? stationSelected.name : "Checkmate"}
        />
        <div className="row-start-1 col-start-1 flex flex-col w-full gap-1">
          <label htmlFor="" className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-2 text-xl">{stationSelected ? stationSelected.name : "Aucune station sélectionnée"}</label>
          {/* <input
            className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-4"
            type="text"
            placeholder="Stations"
          /> */}
          <div className="grid grid-cols-2 gap-2">
            <CardObject/> 
            <CardObject/>
            <CardObject/>
          </div>
        </div>
      </div>
    </div>
  );
}
