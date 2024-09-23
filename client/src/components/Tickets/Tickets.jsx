import { useState } from "react";
import { FaBus, FaPlane, FaTrain, FaTaxi } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

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
  const [clickedButton, setClickedButton] = useState("Bus");
  const [screen, setScreen] = useState("search");
  
  const [from, setFrom] = useState("Dikili");
  const [to, setTo] = useState("Konya");
  const [date, setDate] = useState(new Date());

  const [name, setName] = useState("John");
  const [email, setEmail] = useState("Doe");
  const [phone, setPhone] = useState("000 000 00 00");

  const handleClick = (name) => {
    setClickedButton(name);
  };

  const handleTakeClick = () => {};

  const searchClick = () => {
    setScreen("notscreen");
  };

  return (
    <div className="my-14 md:mt-20">
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

        <div className="flex justify-center items-center py-20">
          <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md items-center px-4 py-4">
            {screen === "search" ? (
              <div className="p-5 grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Nereden */}
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm text-gray-600 dark:text-gray-200">Nereden</span>
                  <input type="text" className="text-lg font-semibold text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600" placeholder={from} value={from} onChange={(e) => {setFrom(e.target.value)}} />
                </div>

                {/* Arrows (Swap) */}
                <div className="flex justify-center items-center">
                  <button className="text-gray-600 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-6 6m0 0l-6-6m6 6V4" />
                    </svg>
                  </button>
                </div>

                {/* Nereye */}
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm text-gray-600 dark:text-gray-200">Nereye</span>
                  <input type="text" className="text-lg font-semibold text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600" placeholder={to} value={to} onChange={(e) => {setTo(e.target.value)}} />
                </div>

                {/* Gidiş Tarihi */}
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm  text-gray-600 dark:text-gray-200">Gidiş Tarihi</span>
                  <Datetime value={date} onChange={(date) => { setDate(date); }} input={true} className="w-60 py-3 text-gray-600" />
                </div>

                {/* Otobüs Ara Butonu */}
                <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700" onClick={searchClick}>
                  Ara
                </button>              
              </div>
            ) : (
              <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Name */}
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm text-gray-600 dark:text-gray-200">Name</span>
                  <input type="text" className="text-lg font-semibold text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600" placeholder={name} value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>

                {/* Email */}
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm text-gray-600 dark:text-gray-200">Email</span>
                  <input type="text" className="text-lg font-semibold text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600" placeholder={email} value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>

                {/* Phone */}
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm text-gray-600 dark:text-gray-200">Phone</span>
                  <input type="text" className="text-lg font-semibold text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600" placeholder={phone} value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                </div>

                {/* Button */}
                <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700" onClick={handleTakeClick}>Al</button> 
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Tickets;