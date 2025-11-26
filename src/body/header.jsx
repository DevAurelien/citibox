import ImageLogo from "../assets/logo/logoCitibox.png"
import home from "../assets/logo/home.png"

export default function Header() {
  return (
    <nav className="flex justify-between items-center h-[7rem] w-full p-2">
      <div className="flex ml-8 gap-6 p-2">
        <div className="flex rounded-full size-[7rem] p-1 justify-center items-center">
          <img src={ImageLogo} alt="imageLogo" />
        </div>
        <div className="flex rounded-full bg-zinc-950 size-[7rem] justify-center items-center text-white">
          <img src={home} alt="imageHome" />
        </div>
        <input
          className="flex text-white rounded-full bg-zinc-950 h-[5rem] w-[30rem] mt-2 p-4 justify-center items-center placeholder-shown:text-white/80 placeholder-shown:blur-[1px]"
          type="text"
          placeholder="Logo Recherche + input"
        />
      </div>
      <div className="text-white">Nom du compte + avatar</div>
    </nav>
  );
}