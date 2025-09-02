import CardStation from "../components/CardStation";

export default function NavLieuxnav() {
  return (
    <nav className="flex flex-col gap-4 justify-start w-[10%] h-full ml-[0.2rem] p-2 bg-zinc-950 rounded-2xl">
      {/* <div><input className="bg-white rounded-xl w-full p-1 my-[0.2rem]" type="text"/></div> */}
      <button className="bg-zinc-800 rounded-xl">Ajouter</button>
      <ul className="flex flex-col gap-4 list-none text-white"> <li className="flex"><CardStation/></li><li><CardStation/></li><li><CardStation/></li><li><CardStation/></li></ul>
    </nav>
  );
}
