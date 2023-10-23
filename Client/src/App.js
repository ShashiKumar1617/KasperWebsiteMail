import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Pages/HomePage/Home';
import AboutPage from './Pages/AboutPage/AboutPage';
import Career from './Pages/Career/Career';
import Contact from './Pages/Contact/Contact';
import Webdevelopment from './Pages/ServicesPages/Webdevelopment';
import AppDevelopment from './Pages/ServicesPages/AppDevelopment';
import DigitalMarketing from './Pages/ServicesPages/DigitalMarketing';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='About-us' element={<AboutPage />} />
          <Route path='Career' element={<Career />} />
          <Route path='Contact-us' element={<Contact />} />
          <Route path='Web-Development' element={<Webdevelopment />} />
          <Route path='App-Development' element={<AppDevelopment/>} />
          <Route path='Digital-Marketing' element={<DigitalMarketing/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
