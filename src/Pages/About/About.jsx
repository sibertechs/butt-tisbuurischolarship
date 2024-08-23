import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import {BiArrowToRight} from "react-icons/bi"
import {FaArrowRight} from "react-icons/fa"
import CountUp from 'react-countup';
import {} from "react-icons/gi"
import { useSpring, animated } from 'react-spring';
import ScrollTrigger from 'react-scroll-trigger';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import FAQ from '../../Components/FAQ/FAQ';
import Footer from '../../Components/Footer/Footer';
import BG from "./Images/BG.jpeg";
import logo from "./Images/logo.png";
import LEADER from "./Images/LEADER.jpg";
import CARD1 from "./Images/CARD1.jpg";
import CARD2 from "./Images/CARD2.jpg";
import VISION  from "./Images/VISION.png"
import MISSION  from "./Images/MISSION.png"
import ECONOMIC from  "./Images/ECONOMIC.png"
import USER from "./Images/USER.png"
import CEDI from "./Images/CEDI.png"
import INST from "./Images/INST.png"
import "./CSS/About.css";

const About = () => {
  const [isCounting, setIsCounting] = useState(false);
  const navigate = useNavigate();
  const qualificationRef = useRef(null);
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  
  return (
    <div>
      <Navbar />
      <div className="justify-center items-center max-w-[1240px] flex flex-col w-full mx-auto">
        <div className='flex-col my-[9rem]'>
        <div className='w-full grid  justify-center'>
            <img src={BG} alt="" className='flex' />
          </div>
          <div className='my-20 md:mx-[-2rem] md:px- md:px-16'>
            <div className='md:mx-0 grid lg:grid-cols-2 gap-8 mx-[2rem]'>
              <div className='px-4'>
              <div className='mb-4 text-[1.4rem] font-bold  text-center w-full'>
              <h1 className='text-[#483bdd]'>About Butt Tis buuri  Scholarship Fund</h1>
            </div>
           
            <p data-aos="fade-up" className='text-justify text-[1rem]'>
                Butt-tis Buuri Scholarship Fund is a non-profit organization that provides financial support for brilliant but needy students from Bawku West District in Ghana to access tertiary, vocational, and apprenticeship training programs. We aim to increase access to education, skills training, and financial services for young people who need support to pursue further education
              </p>
          
           
              <p data-aos="fade-up" className="text-justify text-[1rem] my-4">
                  Our Scholarship Fund was established on June 4th, 2022, by <span className='font-bold text-black'>Dr. John Kingsley Krugu</span> to celebrate his birthday. After speaking with tertiary students from the Kusaug Toende area, Dr. Krugu saw how many of them were struggling to stay in school due to financial challenges. Drawing from his experience of overcoming obstacles to access tertiary education, he created this fund to help young people reach their full potential.
                </p>
        

              <p data-aos="fade-up" className='text-justify text-[1rem] my-4'>
              The Scholarship is an educational endowment that targets high/technical school graduates from all backgrounds. Our goal is to stimulate and nurture each beneficiary student's physical, intellectual, creative, emotional, social, and moral development.
                </p>
               

                
               
              <p data-aos="fade-up" className='text-justify text-[1rem] my-4'>
              Education is the key to empowering students to become productive community citizens. Tertiary training, vocational training, and apprenticeships allow students to communicate, cooperate, and work with educators and employers to improve their future employment prospects. We aim to provide students with practical experiences that help develop positive attitudes toward being dependable, responsible, and cooperative.
                </p>
              


               
              <p data-aos="fade-up" className="text-justify text-[1rem] my-4" >
              We are grateful for the support of <span className='font-bold text-black'>Dr. John Kingsley Krugu</span> and other philanthropies, benevolent individuals, and organizations who contribute to our cause. Together, we can help young people from Bawku West District access education and training opportunities that can transform their lives and contribute to the development of their communities.
                </p>
           
                <div className='flex bg-[#483bdd] py-3 px-8 text-xl w-[14rem] font-bold text-white rounded-md'>
                   <Link to="/#Qualification" className='h-[]' onClick={() => scrollToRef(qualificationRef)}>
                    Apply now
                  </Link>
                <FaArrowRight className='mt-2 mx-2' />   
                </div>

              </div>
              
              <div data-aos="fade-up-right"className="flex flex-col img1">
                <img src={LEADER} alt="" className='w-[] flex mx-auto md:mx-auto'/>
              </div>
         
            </div>
          </div>
          
          <div className="justify-center items-center mt-[-3rem] flex flex-col md:mx-0 mx-4">
            <h2 className='font-bold  my-4 text- text-[#483bdd]'>Our Values</h2>
            <div  className='grid lg:grid-cols-3 grid-cols-1 md:mx-4 gap-8 d1'>
             
              <div data-aos="fade-down-right"className='flex flex-col justify-center items-center p-6 bg-white shadow-md hover:shadow-2xl hover:cursor-pointer duration-700 ease-in-out'>
                <img src={VISION} className='w-[250px] cursor-pointer hover:scale-x-150 duration-700 ease-in-out' alt="" />
                <h3 className='mt-4 text-center font-mono mb-4  text-[#483bdd] font-bold text-2xl' > Our Vision</h3>
                <p className=' text-justify'>
                In unwavering dedication to inclusivity and equal opportunity, we firmly believe that every individual, regardless of background or circumstance, should have accessible and attainable pathways to education and training. Our commitment extends to fostering an environment where the pursuit of knowledge is not just encouraged but made genuinely available for all.
                </p>
              </div>
            
             
              <div data-aos="fade-up-left" className='flex flex-col justify-center items-center p-6 bg-white shadow-md hover:shadow-2xl hover:cursor-pointer duration-700 ease-in-out'>
                <img src={MISSION} className='w-[250px] cursor-pointer hover:scale-x-150 duration-700 ease-in-out' alt="" />
                <h3 className='mt-4 text-center font-mono mb-4  text-[#483bdd] font-bold text-2xl' > Our Mission</h3>
                <p className=' text-justify'>
                We strive to eliminate financial and other barriers to higher education and training through a sincere commitment to needy students and their families. We consciously try to reach out to those with exceptional economic, educational and training needs. We are dedicated to providing high-quality service in a fair, sensitive, and confidential environment to all needy students, regardless of background, religion, partisan affiliation, or lifestyle.
                </p>
              </div>
           
              <div data-aos="fade-down-left" className='flex flex-col justify-center items-center p-6 bg-white shadow-md hover:shadow-2xl hover:cursor-pointer duration-700 ease-in-out'>
                <img src={ECONOMIC} className='w-[250px] cursor-pointer hover:scale-x-150 duration-700 ease-in-out' alt="" />
                <h3 className='mt-4 text-center font-mono mb-4  text-[#483bdd] font-bold text-2xl' >Education and Economic Empowerment</h3>
                <p className=' text-justify'>
                In our pursuit to enhance and uplift the quality of life for individuals, we are dedicated to implementing thoughtful and sustainable corporate social responsibility interventions. Our commitment extends beyond mere contributions, aiming to create lasting positive impacts that resonate with communities and foster meaningful change, ultimately enhancing the well-being of people.
                </p>
              </div>
              </div>

              <div className='container mx-auto my-8 '>
              <div className='grid lg:grid-cols-3 gap-8  px-4'>
              <div  data-aos="zoom-in" className='flex justify-center bg-white py-2 shadow-xl'>
                    <img src={USER} sizes='' className='w-[3rem] px-0 py-6' />
                    <span className='flex flex-col mx-4'>
                      <CountUp start={0} end={532} duration={2} delay={0.5}>
                        {({ countUpRef }) => (
                        <h1 ref={countUpRef} className='text-[3rem] font-bold text-[#483bdd]' />
                        )}
                      </CountUp>
                      <h5 className=''>Applicants</h5>
                    </span>
                  </div>

                    <div data-aos="zoom-in-up" className='flex justify-center bg-white py-6 px-4 shadow-xl'>
                        <img src={CEDI} sizes='' className='w-[3rem] px-0 py-6'/>
                        <span className='flex flex-col mx-4'>
                          <h1 className='text-[2rem] font-bold text-[#483bdd]'>
                            <CountUp
                              start={isCounting ? 0 : null}
                              end={6.2}
                              decimals={1}
                              duration={2}
                              redraw={true}
                              formattingFn={(value) => `GHS ${value}M`} // Add GHS and M to the formatted value
                              onComplete={() => setIsCounting(true)}
                            />
                          </h1>
                          <h5 className=''>Scholarships Awarded</h5>
                        </span>
                      </div>
                      
                <div  data-aos="zoom-in-down" className='flex justify-center bg-white py-2 px-4  shadow-xl'>
                  <img src={INST} sizes='' className='w-[3rem] px-0 py-6'/>
                  <span className='flex flex-col mx-4'>
                  <CountUp start={0} end={23} duration={2} delay={0.5}>
                        {({ countUpRef }) => (
                        <h1 ref={countUpRef} className='text-[3rem] font-bold text-[#483bdd]' />
                        )}
                      </CountUp>
                    <h5 className=''>Institution</h5>
                  </span>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default About;