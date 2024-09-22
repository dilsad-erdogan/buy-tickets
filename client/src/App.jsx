import React from "react"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Product from "./components/Product/Product"
import Tickets from "./components/Tickets/Tickets"
import LoginPopup from "./components/LoginPopup/loginPopup"

function App() {
  const [loginPopup, setLoginPopup] = React.useState(false);

  const toggleLoginPopup = () => {
    setLoginPopup((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 overflow-hidden min-h-screen flex flex-col">
      <Navbar toggleLoginPopup={toggleLoginPopup} />
      <Tickets />
      <Product />
      <Footer />

      {/* Login Popup */}
      <LoginPopup loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup}/>
    </div>
  )
}

export default App
