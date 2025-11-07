import { useEffect, useReducer, useState } from "react";
import { searchApi } from "../../utility/fonction";

export default function CardObject({ composant }) {
  const [srcLogoTaille, setsrcLogoTaille] = useState("");
  // useEffect(() => {
  //   searchApi("api.fleetyards.net/v1/components") // api.fleetyards.net/v1/commodities
  //     .then((result) => setData(result))
  //     .catch((err) => setData("Erreur"));
  // }, []);

  const title = composant?.Name ?? composant?.name ?? "Nom inconnu";
  const manufacturer = composant?.Manufacturer ?? composant?.manufacturer ?? "";
  const size = composant?.Size ?? composant?.size ?? "";
  const grade = composant?.Grade ?? composant?.grade ?? "";
  const classe = composant?.Classe ?? composant?.classe ?? "";
  const caracteristiques = [
    grade ? ` Grade : ${grade} ` : "",
    classe ? `Classe : ${classe}` : "\n",
  ];

  useEffect(() => {
    if (size <= 5 && size != 0) setsrcLogoTaille(`./Taille/${size}.png`);
  }, []);

  // console.log("CardObject reçu:", composant);

  return (
    <div className="flex flex-col my-2 w-full bg-zinc-800 rounded-2xl p-3 text-white">
  <div className="flex items-start gap-2 relative">
    <div className="relative"> 
      <img
        className="rounded-2xl mb-2 size-[20vh]"
        src={composant?.image_url || "./Panther.png"}
        alt="Objet"
      />
      {srcLogoTaille && (
        <img 
          src={srcLogoTaille} 
          className="absolute top-0 left-0 size-[8vh] z-10"
          style={{ transform: 'translate(-30%, -28%)' }}
        />
      )}
    </div>
    <ul>{caracteristiques}</ul>
  </div>
  <h3 className="text-lg font-semibold">{title}</h3>
  {manufacturer && <p className="text-sm text-white/70">{manufacturer}</p>}
</div>
  );
}
