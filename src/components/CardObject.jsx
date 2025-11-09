import { useEffect, useReducer, useState } from "react";
import { searchApi } from "../../utility/fonction";

export default function CardObject({ composant }) {
  const sizeColors = {
    1: "bg-green-700",
    2: "bg-green-600",
    3: "bg-lime-600",
    4: "bg-lime-500",
    5: "bg-yellow-500",
    6: "bg-amber-500",
    7: "bg-amber-600",
    8: "bg-orange-500",
    9: "bg-orange-600",
    10: "bg-orange-700",
    11: "bg-red-500",
    12: "bg-red-600",
    13: "bg-red-700",
    14: "bg-red-800",
    15: "bg-red-900",
    16: "bg-rose-700",
    17: "bg-rose-800",
    18: "bg-rose-900",
    19: "bg-rose-950",
    20: "bg-neutral-900",
  };

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

  // console.log("CardObject reçu:", composant);

  return (
    <div className="flex flex-col w-[25vw] bg-zinc-800 rounded-2xl p-2 ml-8 text-white">
      <div className="flex relative p-2">
        <img className="absolute h-[1vh] w-[10vw] -rotate-45 -left-10 top-10" src="./Grade/competition2.png" alt="banderole" />
        <img
          className="rounded-2xl min-h-[15vh] min-w-[15vw] max-w-[15vw]"
          src={
            composant?.image_url ||
            "https://media.starcitizen.tools/thumb/9/93/Placeholderv2.png/400px-Placeholderv2.png.webp"
          }
          alt="Objet"
        />
        {size ? (
          <div
            className={`absolute top-[15vh] -left-8 flex text-black text-3xl rounded-full ${sizeColors[size]} justify-center items-center size-[6vh]`}
          >
            {size ? `${size}` : ""}
          </div>
        ) : (
          ""
        )}
        <ul className="absolute">{caracteristiques.grade}</ul>
        <div className="h-[20vh] overflow-hidden scroll-auto">
          {/*todo description longue*/}
        </div>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {manufacturer && <p className="text-sm text-white/70">{manufacturer}</p>}
    </div>
  );
}
