import { useState } from "react";
import { FaBus, FaPlane, FaTrain, FaTaxi } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";

const Vehicles = [
  {
    id: 1,
    name: "Bus",
    icon: <FaBus></FaBus>,
  },
  {
    id: 2,
    name: "Plane",
    icon: <FaPlane></FaPlane>,
  },
  {
    id: 3,
    name: "Train",
    icon: <FaTrain ></FaTrain>,
  },
  {
    id: 4,
    name: "Ferry",
    icon: <FaSailboat ></FaSailboat>,
  },
  {
    id: 5,
    name: "Taxi",
    icon: <FaTaxi ></FaTaxi>,
  },
];

const Tickets = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (name) => {
    setClickedButton(name);
  };

  const searchClick = () => {};

  return (
    <div className="container my-14 md:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 gap-y-8">
            {Vehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex justify-center">
                    <button onClick={() => handleClick(vehicle.name)} className={`${ clickedButton === vehicle.name ? "text-purple-800 bg-purple-200 dark:text-purple-200 dark:bg-purple-800" : "text-purple-200 bg-purple-800 hover:text-purple-800 hover:bg-purple-200 dark:text-purple-800 dark:bg-purple-200 dark:hover:text-purple-200 dark:hover:bg-purple-800"} cursor-pointer hover:scale-125 duration-300 py-2 px-8 rounded-full relative z-10 flex justify-center items-center gap-4`}>
                        {vehicle.icon}
                        {vehicle.name}
                    </button>
                </div>
            ))}
        </div>

        <div className="pt-10 justify-center items-center flex">
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-3">
                <div className="p-8 m-8 mr-0 pr-0 gap-6">
                    <div className="m-5">
                        <input type="text" placeholder="Nereden" className="w-[300px] transition-all duration-300 rounded-full border border-purple-800 px-3 py-1 focus:outline-none dark:border-purple-200 dark:bg-gray-800 group-hover:dark:bg-gray-700" />
                    </div>
                    <div className="m-5">
                        <input type="text" placeholder="Nereye" className="w-[300px] transition-all duration-300 rounded-full border border-purple-800 px-3 py-1 focus:outline-none dark:border-purple-200 dark:bg-gray-800 group-hover:dark:bg-gray-700" />
                    </div>
                </div>

                <div className="py-8 my-8">
                    <div className="m-5">Calender</div>
                </div>

                <div className="p-8 m-8 pl-0 ml-0 max-w-[400px]">
                    <button onClick={() => searchClick()} className="text-white bg-green-700 dark:text-gray-800 dark:bg-green-100 cursor-pointer duration-300 py-2 px-8 rounded-full relative z-10">
                        <p className="m-3">Search</p>
                    </button>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Tickets