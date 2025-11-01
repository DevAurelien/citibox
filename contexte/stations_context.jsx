import React, { createContext, useState } from "react";
import stationCitizen from "../stations.json"

const StationsContext = createContext(stationCitizen);

export function StationsProvider({ children }) {
  const [stations, setStations] = useState(stationCitizen); 
  const [stationSelected, setStationSelected] = useState(null);

  return (
    <StationsContext.Provider value={{ stations, setStations, stationSelected, setStationSelected }}>
      {children}
    </StationsContext.Provider>
  );
}

export default StationsContext;