import CardObject from "../components/CardObject";

export default function Corps() {
  return (
    <div className="flex w-[70%] h-full bg-zinc-950 rounded-2xl">
      <div className="grid w-full aspect-square">
        <img
          className="w-full h-full row-span-full col-span-full object-cover rounded-2xl"
          src="/Checkmate.png"
          alt="Checkmate"
        />
        <div className="row-start-1 col-start-1 flex flex-col w-full gap-4">
          <input
            className="h-[3rem] w-full bg-zinc-950 text-white rounded-full my-2 p-4"
            type="text"
            placeholder="Stations"
          />
          <div className="grid grid-cols-2 gap-1">
            <CardObject/>
            <CardObject/>
            <CardObject/>
          </div>
        </div>
      </div>
    </div>
  );
}
