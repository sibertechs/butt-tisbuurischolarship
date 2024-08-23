import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import FAQ from '../../Components/FAQ/FAQ';
import Footer from '../../Components/Footer/Footer';
import BG from "./Images/BG.jpeg";
import logo from "./Images/logo.png";
import LEADER from "./Images/LEADER.jpg";
import CARD1 from "./Images/CARD1.jpg";
import CARD2 from "./Images/CARD2.jpg";
import "./CSS/About.css";

const About = () => {
  const navigate = useNavigate();
  const qualificationRef = useRef(null);
  const [isTriggered, setIsTriggered] = useState(false);

  const scrollTriggeredAnimation = useSpring({
    opacity: 1,
    transform: 'perspective(600px) rotateX(0deg)',
    config: {
      duration: 1200,
      delay: 200,
    }
  });

  const handleApplyClick = () => {
    qualificationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTriggered(true);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial animation on mount
    setIsTriggered(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="justify-center items-center max-w-[1240px] flex flex-col w-full mx-auto">
        <div className='flex-col my-[9rem]'>
          <div>
            <img src={BG} alt="" className='flex md:mx-auto mx- px-2 w-full' />
          </div>

          <div className='my-20 md:mx-[-2rem] md:px- md:px-16'>
            <div className='my-12 font-bold md:text-[2rem] text-[1.6rem] text-center w-full'>
              <h1 className='text-[#483bdd]'>About Butt Tis buuri  Scholarship Fund</h1>
            </div>
            <div className='md:mx-0 grid md:grid-cols-2 gap-8 mx-[2rem]'>
              <p className='text-md text-justify '>
                Butt-tis Buuri Scholarship Fund is a non-profit organization that provides financial support for brilliant but needy students from Bawku West District in Ghana to access tertiary, vocational, and apprenticeship training programs. We aim to increase access to education, skills training, and financial services for young people who need support to pursue further education
              </p>

              <animated.div style={fadeIn}>
                <p className='text-md text-justify'>
                  Our Scholarship Fund was established on June 4th, 2022, by <span className='font-bold text-black'>Dr. John Kingsley Krugu</span> to celebrate his birthday. After speaking with tertiary students from the Kusaug Toende area, Dr. Krugu saw how many of them were struggling to stay in school due to financial challenges. Drawing from his experience of overcoming obstacles to access tertiary education, he created this fund to help young people reach their full potential.
                </p>
              </animated.div>

              <animated.div style={fadeIn}>
                <p className='text-md md:mt-[-2rem]'>
                  The Scholarship is an educational endowment that targets high/technical school graduates from all backgrounds. Our goal is to stimulate and nurture each beneficiary student's physical, intellectual, creative, emotional, social, and moral development.
                </p>
              </animated.div>

              <animated.div style={fadeIn}>
                <p className='text-md text-justify mt-[-1rem]'>
                  Education is the key to empowering students to become productive community citizens. Tertiary training, vocational training, and apprenticeships allow students to communicate, cooperate, and work with educators and employers to improve their future employment prospects. We aim to provide students with practical experiences that help develop positive attitudes toward being dependable, responsible, and cooperative.
                </p>
              </animated.div>

              <p className='text-md text-justify md:mt-[-5rem] mt-[]'>
                We are grateful for the support of <span className='font-bold text-black'>Dr. John Kingsley Krugu</span> and other philanthropies, benevolent individuals, and organizations who contribute to our cause. Together, we can help young people from Bawku West District access education and training opportunities that can transform their lives and contribute to the development of their communities.
              </p>
            </div>
          </div>
          <div className="justify-center items-center flex flex-col md:mx-0 mx-4">
            <div className=' grid md:grid-cols-3 gap-'>
              <div className='flex flex-col'>
                <img src={logo} className='w-[10rem] cursor-pointer' alt="" />
              </div>

              <div className="flex flex-col w-full ">
                <h2 className='font-bold text-[1.5rem] my-4 text-[#483bdd] w-full'>Education and Economic Empowerment</h2>
                <p className=''>To improve the quality of lives of people through appropriate and sustainable corporate social responsibility interventions</p>
              </div>
              <div className='w-full mt-8'>
                <ScrollLink to='apply' smooth={true} duration={500}>
                  <button className='bg-[#ef4444] text-white px-16 mx-8 mb- py-3 mt- rounded-sm font-bold'>
                    Apply
                  </button>
                </ScrollLink>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 my-8 justify-center items-center'>
              <div className="flex flex-col">
                <img src={LEADER} alt="" className='w-[450px] flex mx-auto md:mx-auto' />
              </div>

              <div className=' my-16 flex flex-col'>
                <h2 className='font-bold text-2xl text-[#483bdd]'>Our Organization's Vision & Mission</h2>
                <p className=' text-'>
                  We help create a brighter future for these young people and their communities by investing in their education and empowering them to build successful careers and lives.
                </p>
                <p className='flex flex-col mt-8'>
                  <span className='text-xl font-bold text-[#483bdd]'>Vision</span>
                  <span> Education and Training are attainable for All  </span>
                </p>
                <p className='flex flex-col md:my-8'>
                  <span className='font-bold text-xl text-[#483bdd]'>Mission</span>
                  <span>We strive to eliminate financial and other barriers to higher education and training through a sincere commitment to needy students and their families. We consciously try to reach out to those with exceptional economic, educational and training needs. We are dedicated to providing high-quality service in a fair, sensitive, and confidential environment to all needy students, regardless of background, religion, partisan affiliation, or lifestyle.</span>
                </p>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                  <img src={CARD1} alt="" className='rounded-md ' />
                  <img src={CARD2} alt="" className='rounded-md' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default About;
