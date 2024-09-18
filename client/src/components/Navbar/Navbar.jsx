import { IoMdSearch } from "react-icons/io";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 relative z-40">
        <div className="py-4">
            <div className="flex justify-around items-center">
                {/* Logo section */}
                <div className="items-center p-3">
                    <a href="#" className="text-purple-800 dark:text-purple-200 font-semibold tracking-widest text-2xl uppercase sm:text-3xl">bu bilet</a>
                </div>

                {/* Navbar right section */}
                <div className="flex justify-between items-center gap-4">
                    {/* Search section */}
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search" className="search-bar" />
                        <IoMdSearch className="text-xl text-purple-800 group-hover:text-purple-800 dark:text-purple-200 absolute top-1/2 -translate-y-1/2 right-3 duration-200"/>
                    </div>

                    {/* Dark mode section */}
                    <div>
                        <Darkmode />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar