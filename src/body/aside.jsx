import { useContext, useMemo, useState } from "react";
import CardObject from "../components/CardObject.jsx";
import ComposantsContext from "../../contexte/composants_ship_context.jsx";

export default function Aside() {
  const { composants = [] } = useContext(ComposantsContext);
  const [valeur, setValeur] = useState("");

  const normalizedComposants = useMemo(() => {
    if (!Array.isArray(composants)) return [];
    return composants.map(c => ({
      ...c,
      name: String(c?.Name ?? c?.name ?? "").trim()
    }));
  }, [composants]);

  const composantsFiltres = useMemo(() => {
    const q = (valeur || "").trim().toLowerCase();
    if (!q) return normalizedComposants;
    return normalizedComposants.filter(c => (c.name || "").toLowerCase().includes(q));
  }, [normalizedComposants, valeur]);

  return (
    <div className="flex-col w-[30%] h-full bg-zinc-950 rounded-2xl overflow-y-auto">
      <input
        value={valeur}
        onChange={(e) => setValeur(e.target.value)}
        className="flex mt-2 border-2 border-white/30 text-white rounded-full bg-zinc-950 h-[3rem] w-full p-4"
        type="text"
        placeholder="Objet"
      />

      {composantsFiltres.length === 0 ? (
        <p className="text-white/60 p-4">Aucun résultat</p>
      ) : (
        composantsFiltres.map(item => (
          <CardObject key={item.id ?? item.Name ?? item.name} composant={item} />
        ))
      )}
    </div>
  );
}