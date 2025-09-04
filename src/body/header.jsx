export default function Header() {
  return (
    <nav className="flex justify-between items-center  h-20 w-full p-2">
      <div className="flex ml-8 gap-6">
        <div className="flex rounded-full bg-white size-[3rem] justify-center items-center">
          Logo
        </div>
        <div className="flex rounded-full bg-zinc-950 size-[3rem] p-2 justify-center items-center text-white">
          Logo Accueil
        </div>
        <input
          className="flex text-white rounded-full bg-zinc-950 h-[3rem] w-[30rem] p-4 justify-center items-center placeholder-shown:text-white/80 placeholder-shown:blur-[1px]"
          type="text"
          placeholder="Logo Recherche + input"
        />
      </div>
      <div className="text-white">Nom du compte + avatar</div>
    </nav>
  );
}