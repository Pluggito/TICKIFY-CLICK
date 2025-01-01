import { Route,Routes } from "react-router-dom"
import Navbar from "./Frontend/Components/Navbar"
import Preference from "./Frontend/Components/Preference"
import DiscoverEvents from "./Frontend/Components/DiscoverEvents"
import Features from "./Frontend/Components/Features"
import Home from "./Frontend/Components/Home"
import Footer from "./Frontend/Components/Footer"




const App = () => {
  return (
    <div>
       <Navbar />
    <Routes>
      <Route path="/" element={
        <>
      <Home/>  
      <Preference />      
        </>
      }/>
    </Routes>

    <Footer/>

    </div>
   
  )
}

export default App
