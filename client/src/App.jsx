import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Product from "./components/Product/Product"
import Tickets from "./components/Tickets/Tickets"

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 overflow-hidden min-h-screen flex flex-col">
      <Navbar />
      <Tickets />
      <Product />
      <Footer />
    </div>
  )
}

export default App
