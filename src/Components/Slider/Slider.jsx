import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Slide1 from "./Images/Slide1.jpeg"
import Slide2 from "./Images/Slide2.jpeg"
import Slide3 from "./Images/Slide3.jpeg"
import Slide4 from "./Images/Slide4.jpeg"
import Slide5 from "./Images/Slide5.jpeg"
const Sliders = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,      
        autoplaySpeed: 8000,
      };
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <div className=' overflow-x-clip'>
      <div className=" overflow-hidden  justify-center z-50 items-center  mx-auto">
      <Slider {...settings} className='h'>
      <div className=' w-full'>
        <div className='w-full slide1'>
        </div>
  <div className="absolute lg:top-[20%] top-[20%] left-[10%]">
  <h1 className='font-bold text-[2rem] text-white md:mx-16' >Butt Tis buuri <br /> Scholarship Fund</h1>
        <p className='text-white mt-8 lg:block md:block hidden text-'>Helping Students Build a Stronger Tomorrow <br />
           Application ongoing</p>

   <a href='#' onClick={()=>scrollToSection('apply')} className='bg-[#F59E0B] md:mt-8  absolute px-4 py-2 rounded-md font-bold'>Apply</a>
           <span></span>
  </div>
      </div>
      <div className='w-full mt-[]'>
      <div className='w-full slide2'>
        </div>
        <div className='absolute top-[20%]  ml-[1%]'>
          <h1 className='font-bold text-[2rem] text-white md:mx-16 '>Butt Tis buuri <br /> Scholarship Fund</h1>
          <p className='text-white mt-8 lg:block md:block hidden text-[1.3ren]'>Apply for our scholarships and open the doors to endless possibilities! <br />
            Application ongoing</p>
            <a  href='#' onClick={()=>scrollToSection('apply')} className='bg-[#F59E0B] md:mt-8  absolute px-4 py-2 rounded-md font-bold'>Apply</a>
        </div>
      </div>
      <div>
      <div className='w-full slide3'>
        </div>
          <div className='absolute top-[25%]  ml-[1%]'>
          <h1 className='font-bold  text-[2rem] text-white md:mx-16 '>Butt Tis buuri <br /> Scholarship Fund</h1>
          <p className='text-white mt-8 font-extrabold lg:block md:block hidden text-[1.3ren]'>Apply for our scholarships and open the doors to endless possibilities! <br />
            Application ongoing</p>
            <a  href='#' onClick={()=>scrollToSection('apply')} className='bg-[#F59E0B] md:mt-8  absolute px-4 py-2 rounded-md font-bold'>Apply</a>
        </div>
      </div>

      <div>
      <div className='w-full slide4'>
        </div>
          <div className='absolute top-[22%]  ml-[1%]'>
          <h1 className='font-bold  text-[2rem] text-white md:mx-16'>Butt Tis buuri <br /> Scholarship Fund</h1>
          <p className='text-white md:mt-8 lg:block text-[1.3ren] font-bold'>Apply for our scholarships and open the doors to endless possibilities! <br />
            Application ongoing</p>
            <a  href='#' onClick={()=>scrollToSection('apply')} className='bg-[#F59E0B] md:mt-8  absolute px-4 py-2 rounded-md font-bold'>Apply</a>
        </div>
      </div>

      <div>
      <div className='w-full slide5'>
        </div>
          <div className='absolute top-[25%]  ml-[1%]'>
          <h1 className='font-bold lg:text-[4rem] md:text-[3rem] text-[1.8rem] text-white md:mx-16 '>Helping Student Build a <br /> Stronger Tomorrow</h1>
          <p className='text-white mt-8 font-extrabold lg:block md:block hidden text-[1.3ren]'>Be the change the world is looking for
               Application ongoing


                 </p>
            <a href="" className='bg-[#F59E0B] md:mt-8  absolute px-4 py-2 rounded-md font-bold'>Apply</a>
        </div>
      </div>
    </Slider>
    </div>
    </div>
  )
}

export default Sliders
