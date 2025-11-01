import React, { createContext, useEffect, useState } from "react";
import blade from "../Composants_ships_json/blade.json"
import bomb from "../Composants_ships_json/bomb.json"
import cargo_pod from "../Composants_ships_json/cargo_pod.json"
import cooler from "../Composants_ships_json/cooler.json"
import emp from "../Composants_ships_json/emp.json"
import fuel_nozzle from "../Composants_ships_json/fuel_nozzle.json"
import fuel_pod from "../Composants_ships_json/fuel_pod.json"
import gun_ship from "../Composants_ships_json/gun_ship.json"
import jump_module from "../Composants_ships_json/jump_module.json"
import life_support from "../Composants_ships_json/life_support.json"
import mining_laser from "../Composants_ships_json/mining_laser.json"
import missile_rack from "../Composants_ships_json/missile_rack.json"
import missiles from "../Composants_ships_json/missiles.json"
import power_plant from "../Composants_ships_json/power_plant.json"
import qed from "../Composants_ships_json/qed.json"
import quantum_drive from "../Composants_ships_json/quantum_drive.json"
import radar from "../Composants_ships_json/radar.json"
import rocket_pod from "../Composants_ships_json/rocket_pod.json"
import salvage_head from "../Composants_ships_json/salvage_head.json"
import scrapper_module from "../Composants_ships_json/scrapper_module.json"
import shield from "../Composants_ships_json/shield.json"
import ships_json from "../Composants_ships_json/ships.json"
import torpedo from "../Composants_ships_json/torpedo.json"
import tractor_beam from "../Composants_ships_json/tractor_beam.json"
import towing_beam from "../Composants_ships_json/towing_beam.json"
import weapon_mount from "../Composants_ships_json/weapon_mount.json"

const ComposantsContext = createContext();

export function ComposantsProvider({ children }) {
  const [composants, setComposants] = useState([]);
  const [ships, setShips] = useState([]); 

  const [composantsSelected, setComposantsSelected] = useState(null);
  const [shipsSelected, setShipsSelected] = useState(null);

  useEffect(()=> {
    setShips(ships_json);
    setComposants([...blade, ...bomb,...cargo_pod,...cooler,...emp,...fuel_nozzle,...fuel_pod,...gun_ship,...jump_module,...life_support,...mining_laser,...missile_rack,...missiles,...power_plant,...qed,...quantum_drive,...radar,...rocket_pod,...salvage_head,...scrapper_module,...shield,...torpedo,...towing_beam,...tractor_beam,...weapon_mount])
  },[])

  return (
    <ComposantsContext.Provider value={{ composants, setComposants }}>
      {children}
    </ComposantsContext.Provider>
  );
}

export default ComposantsContext;