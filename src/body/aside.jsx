import { useContext, useMemo, useState, useEffect } from "react";
import CardObject from "../components/CardObject.jsx";
import ComposantsContext from "../../contexte/composants_ship_context.jsx";

export default function Aside() {
  const { composants = [] } = useContext(ComposantsContext);
  const [valeur, setValeur] = useState("");
  const [data, setData] = useState(null);

  const normalizedComposants = useMemo(() => {
    if (!Array.isArray(composants)) return [];
    return composants.map((c) => ({
      ...c,
      name: String(c?.Name ?? c?.name ?? "").trim(),
    }));
  }, [composants]);

  const composantsFiltres = useMemo(() => {
    const q = (valeur || "").trim().toLowerCase();
    if (!q) return normalizedComposants;
    return normalizedComposants.filter((c) =>
      (c.name || "").toLowerCase().includes(q)
    );
  }, [normalizedComposants, valeur]);

  useEffect(() => {
    if (composantsFiltres.length === 0) {
      setData(<p className="text-white/60 p-4">Aucun résultat</p>);
    } else {
      setData(
        composantsFiltres.map((item) => (
          <CardObject
            key={item.id ?? item.Name ?? item.name}
            composant={item}
          />
        ))
      );
    }
  }, [composantsFiltres]);

  return (
    <div className="flex flex-col w-[30vw] h-[90vh] bg-black rounded-2xl ">
      <div className="flex relative w-full bg-black h-[10vh] z-10 p-2">
        <input
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
          className="flex border-2 w-full border-white/20 text-white rounded-full bg-zinc-900/100 h-[3rem] p-4"
          type="text"
          placeholder="Objet"
        />
      </div>
      <div className="flex flex-col gap-4 h-full overflow-y-auto overflow-x-hidden scrollbar-dark pr-2">
        {data}
      </div>
    </div>
  );
}
