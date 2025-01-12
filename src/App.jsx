import { Route, Routes } from 'react-router-dom';
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
import SignUp from './Frontend/Admin/SignUp';
import Reset from './Frontend/Admin/Reset';
import Advert from './Frontend/Pages/Advert';
import { SideMenu } from './Frontend/Components/SideMenu';
import { useState } from 'react';
import Contact from './Frontend/Pages/Contact';
import Dashboard from './Frontend/Admin/Dashboard';
import CreateEvent from './Frontend/Pages/CreateEvent';

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="container overflow-x-hidden m-auto">
      {/* Navbar */}
      <Navbar />

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
              <DiscoverEvents />
              <Features />
            </>
          }
        />
        <Route path="/eventscategory" element={<EventsCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login menu={menu} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/advert" element={<Advert />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/createevents' element={<CreateEvent/>} />
      </Routes>

      {/* Footer */}
      <Footer menu={menu} />
    </div>
  );
};

export default App;
