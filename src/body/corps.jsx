import { useContext, useEffect, useState } from "react";
import StationsContext from "../../contexte/stations_context";
import ComposantsContext from "../../contexte/composants_ship_context";

export default function Corps() {
  const { stationSelected, stations } = useContext(StationsContext);
  const { composantsByStation, addComposantToStation } =
    useContext(ComposantsContext);
  
  
  // const [composantsForThisStation, setcomposantsForThisStation] = useState({})
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

  function handleDrop(e) {
  e.preventDefault();
  console.log("DROP EVENT", e);
  if (!stationSelected) {
    console.log("No station selected");
    return;
  }

  const data = e.dataTransfer.getData("composant");
  console.log("dataTransfer:", data);
  if (!data) return;

  const composant = JSON.parse(data);
  console.log("Composant à ajouter:", composant);

  const payload = {...composant, quantity:composant?.quantity ?? 0,}

  addComposantToStation(stationSelected.uuid, payload);
}

  function handleDragOver(e) {
    e.preventDefault();
  }

  const composantsForThisStation =
    composantsByStation[stationSelected?.uuid] || [];

  


  return (
    <div className="flex w-[70vw] h-full bg-zinc-950 rounded-2xl gap-6 relative">
      <div className="grid w-full gap-4">
        <img
          className="w-full h-[90vh] row-span-full col-span-full object-cover rounded-2xl"
          src={currentImg}
          alt={stationSelected?.name || "Aucune Station"}
        />

        {/* zone  de drop */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        ></div>

        <div className="row-start-1 col-start-1 flex flex-col w-full gap-1">
          <label className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-2 text-xl">
            {stationSelected
              ? stationSelected.name
              : "Aucune station sélectionnée"}
          </label>

          {/* Liste des composants déposés */}
          <div className="grid grid-cols-8 gap-2 text-white">
            {composantsForThisStation.map((c, i) => (
              <div key={i} className="relative bg-zinc-800 rounded-xl p-2 text-sm"><div className="absolute -top-2 -right-2 rounded-full size-[2rem] bg-zinc-950 text-white"></div>
              {/* {c.quantity} */}
                {c.Name || c.name} <img src={c.image_url} alt="image_article" className="size-[8rem] object-contain -mb-[1rem]"/>
                <div className="h-[2rem] w-full rounded-full bg-zinc-950 text-white justify-between items-center p-1">{c.Size}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
