import Image from "next/image";
const Navbar = ()=>{
    return(
        <header className="fixed top-0 left-0 right-0  max-h-fit bg-slate-900/50  backdrop-blur-sm ">
            <div className="max-w-full border-b border-white/20  container">
                <div className="py-3 mx-10 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <a href="/"className="text-xl font-semibold">.todolist</a>
                    </div>
                    <div className=" flex flex-row items-center text-sm">
                        <ul className="flex flex-row">
                            <li className="border-r border-white/20">
                                <a href="/" className="px-4 text-sky-500 font-semibold">My Todo</a>
                            </li>
                            <li>
                                <a href="/" className="px-4 hover:font-semibold">Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flew-row">
                        <h1 className="pr-4 text-sm border-r border-white/20 ">Zaky Maulana Al Bajili</h1>
                        <div className="pl-4 text-sm "> logo</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar