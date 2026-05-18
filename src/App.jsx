import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
const App = () => {
  return (
    <div className="overflow-hidden w-screen h-auto text-white font-thin bg-gray-950">
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App