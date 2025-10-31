import CardObject from "../components/CardObject";
import StationsContext from "../../contexte/stations_context";

export default function Corps() {

  let station_name;

  const toggleStation = () => {
    
  }
  
  return (
    <div className="flex w-[70%] h-full bg-zinc-950 rounded-2xl">
      <div className="grid w-full aspect-square">
        <img
          className="w-full h-full row-span-full col-span-full object-cover rounded-2xl"
          src="/Checkmate.png"
          alt="Checkmate"
        />
        <div className="row-start-1 col-start-1 flex flex-col w-full gap-1">
          <label htmlFor="" className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-4 text-xl">{station_name}</label>
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
