import { Route, Routes } from 'react-router-dom';
import Navbar from "./Frontend/Components/Navbar"
import Preference from "./Frontend/Components/Preference"
import DiscoverEvents from "./Frontend/Components/DiscoverEvents"
import Features from "./Frontend/Components/Features"
import Home from "./Frontend/Components/Home"
import Footer from "./Frontend/Components/Footer"
import EventsCategory from "./Frontend/Pages/EventsCategory"
import About from "./Frontend/Pages/About"
import Pricing from "./Frontend/Pages/Pricing"
import Login from "./Frontend/Admin/Login"
import SignUp from "./Frontend/Admin/SignUp"
import Reset from "./Frontend/Admin/Reset"
import Advert from "./Frontend/Pages/Advert"
import { SideMenu } from './Frontend/Components/SideMenu';
import { useState } from 'react';



const App = () => {

 const [menu, setMenu] = useState(false);


  return (
    <div>
        <Navbar />
       <SideMenu setMenu={setMenu} menu={menu} />
      <Routes>
        <Route path="/" element={
          <>
            <Home/> 
            <Preference />
            <DiscoverEvents />
            <Features />      
          </>
        }/>

        <Route path="/eventscategory" element={<EventsCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/advert" element={<Advert/>}/>
      </Routes>

      <Footer/>


    </div>
      

  )
}

export default App
