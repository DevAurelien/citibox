export default function CardStation({ station_name }) {
  return (
    <div className="flex m-auto w-full aspect-square bg-stone-600 rounded-xl justify-center items-center">
      <div className="relative h-full w-full"><img className="object-cover h-full w-full rounded-xl" src="https://media.starcitizen.tools/thumb/1/13/ARC-L1-Exterior-Alpha3.12.png/400px-ARC-L1-Exterior-Alpha3.12.png.webp" alt="" /><span className="absolute top-2 left-4 text-white">{station_name}</span></div>
    </div>
  );
}
