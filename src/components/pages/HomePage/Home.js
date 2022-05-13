import React from 'react'
import Hero1 from '../../Hero1.js'
import Hero from '../../Hero.js'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data.js'
import Footer from '../footer/Footer.js'
import About from '../about/About.js'
import Skills from '../skills/Skills.js'
import Contact from '../contact/Contact.js'

// import ImageSlider from '../../ImageSlider.js'
// import {SliderData} from '../../SliderData'


function Home() {
  return (
    <>
      <Hero1 {...homeObjOne}    id="home"    />
      <About {...homeObjTwo}    id="about"   />
      <Skills {...homeObjThree} id="skills"  />
      <Contact {...homeObjFour} id="contact" />
      <Footer />
    </>
  )
}

export default Home
