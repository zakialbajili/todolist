import Image from "next/image";
const Navbar = ()=>{
    return(
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900 ">
            <header className=" min-h-fit border-b border-white/20 max-w-full container">
                <div className="py-3 mx-10 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <a href="/"className="text-xl font-semibold">.todolist</a>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-5 flex flex-row items-center text-sm border-r border-white/20">
                            <ul className="flex flex-row p-0">
                                <li>
                                    <a href="/" className="px-4 hover:font-semibold">Docs</a>
                                </li>
                                <li>
                                    <a href="/" className="px-4 hover:font-semibold">About</a>
                                </li>
                                <li>
                                    <a href="/" className="px-4 hover:font-semibold">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-row text-sm">
                                <li className="py-2 px-3 mr-3 bg-green-900/30 hover:bg-green-700/50 backdrop-blur-lg border border-green-900/70 rounded-md">
                                    <a href="/login" className=" rounded-lg ">Sign In</a>
                                </li>
                                <li className="py-2 px-3 bg-white/20 hover:bg-white/40 backdrop-blur-lg border border-white/50 rounded-md">
                                    <a href="/regist" className="">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </main>
    )
}
export default Navbar