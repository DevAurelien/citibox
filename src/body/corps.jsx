import { useContext, useEffect, useState } from "react";
import StationsContext from "../../contexte/stations_context";
import ComposantsContext from "../../contexte/composants_ship_context";

export default function Corps() {
  const { stationSelected, stations } = useContext(StationsContext);
  const { composantsSelected } = useContext(ComposantsContext);

  const [imageCache, setImageCache] = useState({});
  const [currentImg, setCurrentImg] = useState("/citibox.png");

  useEffect(() => {
    if (!stations || stations.length === 0) return;

    stations.forEach((station) => {
      if (!station.png_url) return; 
      const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(
        station.png_url
      )}`;
      const img = new Image();
      img.src = proxyUrl;
      img.onload = () => {
        setImageCache((prev) => ({ ...prev, [station.uuid]: proxyUrl }));
      };
    });
  }, [stations]);

  useEffect(() => {
    if (!stationSelected) {
      setCurrentImg("/citibox.png");
      return;
    }

    if (stationSelected.png_url && imageCache[stationSelected.uuid]) {
      setCurrentImg(imageCache[stationSelected.uuid]);
    } else if (stationSelected.image_url) {
      setCurrentImg(stationSelected.image_url);
    } else {
      setCurrentImg("/citibox.png");
    }
  }, [stationSelected, imageCache]);

  return (
    <div className="flex w-[70vw] h-full bg-zinc-950 rounded-2xl z-1">
      <div className="grid w-full">
        <img
          className="w-full h-[90vh] row-span-full col-span-full object-cover rounded-2xl"
          src={currentImg}
          alt={stationSelected?.name || "Aucune Station"}
        />
        <div className="row-start-1 col-start-1 flex flex-col w-full gap-1">
          <label
            htmlFor=""
            className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-2 text-xl"
          >
            {stationSelected
              ? stationSelected.name
              : "Aucune station sélectionnée"}
          </label>
          <div className="grid grid-cols-2 gap-2"></div>
        </div>
      </div>
    </div>
  );
}






{/* <input
            className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-4"
            type="text"
            placeholder="Stations"
          /> */}