import { useEffect, useState } from "react";
import { searchApi } from "../../utility/fonction";

export default function CardObject() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   searchApi("api.fleetyards.net/v1/components") // api.fleetyards.net/v1/commodities
  //     .then((result) => setData(result))
  //     .catch((err) => setData("Erreur"));
  // }, []);

  return (
    <div className="flex flex-col my-2 h-[10%] w-full">
      <img className="rounded-2xl" src="./Panther.png" alt="Objet" />
      <div>
        {/* {data ? JSON.stringify(data) : "Chargement..."} */}
        {data && console.log(data)}
      </div>
    </div>
  );
}