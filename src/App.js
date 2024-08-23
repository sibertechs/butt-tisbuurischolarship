
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// import Card1 from './Components/Card1/Card1';
// import Card2 from './Components/Card2/Card2';
// import Navbar from './Components/Navbar/Navbar';
// import Slider from './Components/Slider/Slider';
// import Qualification from './Components/ApplicacantQualitication/Qualification';
// import FAQ from './Components/FAQ/FAQ';
// import Footer from './Components/Footer/Footer';

function App() {
  return (
//     <>
// <Navbar />
// <Slider />
// <Card1 />
// <Card2 />
// <Qualification />
// <FAQ />
// <Footer />
//     </>
<>
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
</Router>
</>
  );
}

export default App;
