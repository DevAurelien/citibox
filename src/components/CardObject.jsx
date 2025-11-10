import { useEffect, useReducer, useState } from "react";
// import { searchApi } from "../../utility/fonction";
import { ReactComponent as MilitaryLogo } from "../assets/Grade/gun2.svg?react"
import { ReactComponent as CivilLogo } from "../assets/Grade/civil2.svg?react"
import { ReactComponent as IndustrialLogo } from "../assets/Grade/gear2.svg?react"
import { ReactComponent as StealthLogo } from "../assets/Grade/stealth2.svg?react"
import { ReactComponent as CourseLogo } from "../assets/Grade/course.svg?react"
import { ReactComponent as FavoriLogo } from "../assets/Grade/favori.svg?react"

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
  
  const [filled, setFilled] = useState(false);
  const [favorisObjet, setFavorisObjet] = useState([]);
  // useEffect(() => {
  //   searchApi("api.fleetyards.net/v1/components") // api.fleetyards.net/v1/commodities
  //     .then((result) => setData(result))
  //     .catch((err) => setData("Erreur"));
  // }, []);

  const logoMap = {
    "Military":MilitaryLogo,
    "Civilian":CivilLogo,
    "Industrial":IndustrialLogo,
    "Stealth":StealthLogo,
    "Competition":CourseLogo,
  }

  const Logo = composant.Classe ? logoMap[composant.Classe] : null;

  const title = composant?.Name ?? composant?.name ?? "Nom inconnu";
  const manufacturer = composant?.Manufacturer ?? composant?.manufacturer ?? "";
  const size = composant?.Size ?? composant?.size ?? "";
  const grade = composant?.Grade ?? composant?.grade ?? "";
  const classe = composant?.Classe ?? composant?.classe ?? "";
  const caracteristiques = [
    grade ? ` Grade : ${grade} ` : "",
    classe ? `Classe : ${classe}` : "\n",
  ];

// console.log(composant)

  return (
    <div className="flex flex-col w-[25vw] bg-zinc-800 rounded-2xl p-2 ml-8 text-white">
      <div className="flex relative p-2">
        <img
          className="select-none pointer-events-auto rounded-2xl min-h-[15vh] min-w-[15vw] max-w-[15vw]"
          draggable={false}
          src={
            composant?.image_url ||
            "https://media.starcitizen.tools/thumb/9/93/Placeholderv2.png/400px-Placeholderv2.png.webp"
          }
          alt="Star_citizen_unavailable"
        />
        
        
      <div className="absolute flex h-[20vh] bg-zinc-600/70 w-[6vh] -top-2 -left-8 rounded-4xl">
          <FavoriLogo onClick={() => setFilled(!filled)}
        style={{ color: filled ? '#FFD700' : 'transparent' }} className="absolute size-[6vh]"/> {/* #ffed00*/}
          {Logo && <Logo className="absolute top-[7vh] rounded-full size-[6vh] text-white"/>}
          {size ? (
          <div
            className={`absolute flex top-[14vh] text-black text-3xl rounded-full ${sizeColors[size]} justify-center items-center size-[6vh]`}
          >
            {size ? `${size}` : ""}
          </div>
        ) : (
          ""
        )}
        {/* <Logo className="absolute size-15 text-white"></Logo> */}
      </div>
        <ul className="relative text-sm">{caracteristiques}</ul>
        <div className="h-[20vh] overflow-hidden scroll-auto">
          {/*todo description longue*/}
        </div>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {manufacturer && <p className="text-sm text-white/70">{manufacturer}</p>}
    </div>
  );
}
