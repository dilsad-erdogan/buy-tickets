import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Tickets from "./components/Tickets/Tickets"

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 overflow-hidden min-h-screen flex flex-col">
      <Navbar />
      <Tickets />
      <Footer />
    </div>
  )
}

export default App
