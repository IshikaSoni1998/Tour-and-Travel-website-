// import logo from './logo.svg';
import {Route , Routes } from 'react-router-dom';
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      </Routes>     
        <Navbar />
    </div>
  );
}

export default App;
