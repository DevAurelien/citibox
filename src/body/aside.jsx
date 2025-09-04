import CardObject from "../components/CardObject.jsx"

export default function Aside() {
  return (
    <div className="flex-col w-[30%] h-full bg-zinc-950 rounded-2xl">
        <input
          className="flex mt-2 border-2 border-white/30 text-white rounded-full bg-zinc-950 h-[3rem] w-full p-4"
          type="text"
          placeholder="Objet"
        />
        <CardObject/>
    </div>
  )
}
