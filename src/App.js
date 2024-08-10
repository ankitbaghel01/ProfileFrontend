import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Modal from './Component/Modal/Modal';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Projects from './Component/Projects/Projects';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
const App = () => {
  return (
    <div className='App'>
        <Navbar/>
      
      <Home/>
      <About/>
      <Services/>
      <Projects/>
     <Footer/>
      <Modal/>
    </div>
  )
}

export default App
