export default function Corps() {
  return (
    <div className="flex w-[70%] h-full bg-zinc-950 rounded-2xl">
      <div className="relative w-full aspect-square">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="/Checkmate.png"
          alt="Checkmate"
        />
        <input
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950 text-white rounded-full px-4 py-2 shadow-md z-10"
          type="text"
          placeholder="Stations"
        />
      </div>
    </div>
  );
}
