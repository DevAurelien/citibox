import { useEffect, useState } from "react";
import { searchApi } from "../../utility/fonction";

export default function CardObject({composant}) {

  // useEffect(() => {
  //   searchApi("api.fleetyards.net/v1/components") // api.fleetyards.net/v1/commodities
  //     .then((result) => setData(result))
  //     .catch((err) => setData("Erreur"));
  // }, []);

  const title = composant?.Name ?? composant?.name ?? "Nom inconnu";
  const manufacturer = composant?.Manufacturer ?? composant?.manufacturer ?? "";

  // debug : vérifie l'objet reçu dans la console du navigateur
  // console.log("CardObject reçu:", composant);

  return (
    <div className="flex flex-col my-2 w-full bg-zinc-800 rounded-2xl p-3 text-white">
      <img className="rounded-2xl mb-2" src={composant?.image_url || "./Panther.png"} alt="Objet" />
      <h3 className="text-lg font-semibold">{title}</h3>
      {manufacturer && <p className="text-sm text-white/70">{manufacturer}</p>}
    </div>
  );
}

