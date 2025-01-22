import {  Route, Routes } from 'react-router-dom';
import Navbar from './Frontend/Components/Navbar';
import Preference from './Frontend/Components/Preference';
import DiscoverEvents from './Frontend/Components/DiscoverEvents';
import Features from './Frontend/Components/Features';
import Home from './Frontend/Components/Home';
import Footer from './Frontend/Components/Footer';
import EventsCategory from './Frontend/Pages/EventsCategory';
import About from './Frontend/Pages/About';
import Pricing from './Frontend/Pages/Pricing';
import Login from './Frontend/Admin/Login';
import Reset from './Frontend/Admin/Reset';
import Advert from './Frontend/Pages/Advert';
import { SideMenu } from './Frontend/Components/SideMenu';
import {  useState } from 'react';
import Contact from './Frontend/Pages/Contact';
import Dashboard from './Frontend/Admin/Dashboard';
import CreateEvent from './Frontend/Pages/CreateEvent';
import Tickets from './Frontend/Pages/Tickets';
import AuthProvider from './Backend/Context/AuthContext';
import Signup from './Frontend/Admin/Signup'
import ForgetPassword from './Frontend/Admin/ForgetPassword';

const App = () => {
  const [menu, setMenu] = useState(false);
  const [newEvent, setNewEvent] = useState([]);
  const [isMobile, setIsMobile] = useState(false) // Adjust 768 to your breakpoint


  return (
      <AuthProvider>
        <div className="container overflow-x-hidden m-auto">
          {/* Navbar */}
          <Navbar isMobile={isMobile} setIsMobile={setIsMobile} />

          {/* Side Menu */}
          <SideMenu setMenu={setMenu} menu={menu} />

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home menu={menu} />
                  <Preference />
                  <DiscoverEvents newEvent={newEvent} setNewEvent={setNewEvent}/>
                  <Features />
                </>
              }
            />
            <Route path="/eventscategory" element={<EventsCategory newEvent={newEvent} setNewEvent={setNewEvent} />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login menu={menu} />} />
            <Route path='signup-page' element={<Signup/> } />
            <Route path="/reset" element={<Reset />} />
            <Route path="/advert" element={<Advert />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/createevents' element={<CreateEvent/>} />
            <Route path='/tickets/:Id' element={<Tickets />} />
            <Route path='/forgetpassword' element={<ForgetPassword/> }/>
          </Routes>

          {/* Footer */}
          <Footer menu={menu} />
        </div>
      </AuthProvider>
  );
};

export default App;
