import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages//HomePage/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Skills from './components/pages/skills/Skills';



function App() {
  return (
<div className='App'>


<Navbar />
<Home />


</div> 

    



  )
}

export default App;