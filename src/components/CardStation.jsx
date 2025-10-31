export default function CardStation({children, lien_image }) {

  return (
    <div className="flex m-auto w-full aspect-square bg-stone-600 rounded-xl justify-center items-center">
      <div className="relative h-full w-full "><img className="object-cover h-full w-full rounded-xl" src={lien_image} alt="" /><span className="absolute top-0 left-2 text-white">{children}</span></div>
    </div>
  );
}
