import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { BiBriefcase, BiPhoneIncoming, BiEnvelopeOpen } from 'react-icons/bi';
import { BsGlobe } from 'react-icons/bs';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);



  
  return (
    <div>
      <Navbar />
      <div className='justify-center py-32 w-full bg-[#f4f7f9] flex'>
        <div className='w-full max-w-[1240px] mx-4 '>
          <h2 data-aos="fade-up" className= "font-bold text-[2.2rem] py-4 ">
            Get in touch with us today - we're here to help!
          </h2>
        
            <p  data-aos="fade-up" className= "text-justify" >
              We're here to help you on your journey towards securing a scholarship and pursuing your academic dreams. If
              you have any questions or concerns about our scholarship opportunities, please don't hesitate to contact us.
            </p>
         

          <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
          
              <div  data-aos="flip-left" className={`shadow-md w-full px-4 py-6 bg-white justify-center items-center flex flex-col mt-8 rounded-md`} >
                <p className='text-[#4338CA] text-xl font-bold cursor-pointer justify-center flex flex-col'>
                  <BiBriefcase className='mx-4 my-6 text-[2.5rem]' />
                  <span>OFFICE</span>
                </p>
                <span className='text-[1rem] text-[#9CA3AF]'>Bawku WestZebilla</span>
              </div>
       

              <div data-aos="flip-right" className="shadow-md w-full px-4 py-6 bg-white justify-center items-center flex flex-col mt-8 rounded-md">
                <p className='text-[#4338CA] text-xl font-bold cursor-pointer flex flex-col'>
            <BiPhoneIncoming className='mx-8 my-6 text-[2.5rem]' />
            <span>CALL US ON</span>
        </p>
         <span className='font-bold'>0241720404/0506149300</span>
              </div>
         


    
              <div data-aos="flip-up" className="shadow-md w-full px-4 py-6 bg-white justify-center items-center flex flex-col mt-8 rounded-md">
                <p className='text-[#4338CA] text-xl font-bold cursor-pointer flex flex-col'>
            <BiEnvelopeOpen className='mx-8 my-6 text-[2.5rem]' />
            <span>EMAIL US ON</span>
        </p>
        <span className='text-[1rem] text-[#9CA3AF]'>butttisbuuri@gmail.com</span>
              </div>
       


           
              <div data-aos="flip-down" className= "shadow-md w-full px-4 py-6 bg-white justify-center items-center flex flex-col mt-8 rounded-md">
               <p className='text-[#4338CA] text-xl font-bold cursor-pointer flex flex-col'>
              <BsGlobe className='mx-8 my-6 text-[2.5rem]' />
            <span>EMAIL US ON</span>
        </p>
        <span className='text-[1rem] text-[#9CA3AF]'>butttisbuuri@gmail.com</span>
              </div>
           
          </div>
          
           <form action="" className='md:mt-8 my-12'>
       <div className='md:flex gap-4'>
       <input data-aos="fade-down-right" type="text" placeholder='Your name' className='w-full py-3 text-left px-4'/>
        <input data-aos="fade-down-left" type="text" placeholder='Your Email'  className='w-full md:mt-0 mt-4  py-3 px-4 text-left'/>
       </div>
       <input data-aos="fade-down" type="text" placeholder='Subject' className='w-full py-3 rounde mt-4 px-4 text-left'/>
       <textarea data-aos="flip-up" name="" placeholder='Message' id="" cols="30" rows="6" className='mt-4 p-4 w-full'></textarea>
      </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
