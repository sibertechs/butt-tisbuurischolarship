import React,{useRef} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Card1 from '../../Components/Card1/Card1'
import Card2 from '../../Components/Card2/Card2'
import Qualification from '../../Components/ApplicacantQualitication/Qualification'
import FAQ from '../../Components/FAQ/FAQ'
import Footer from '../../Components/Footer/Footer'
import Slider from 'react-slick/lib/slider'
import Sliders from '../../Components/Slider/Slider'

const Home = () => {
  const qualificationRef = useRef(null);
  return (
    <div>
      <Navbar />
      <Sliders />
      <Card1 />
      <Card2 />
      <Qualification ref={qualificationRef} id="Qualification"/>
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
