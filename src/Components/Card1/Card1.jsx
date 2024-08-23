import React, { useState } from 'react';
import Card from "./Image/Card.png";

const Card1 = () => {
  const tabContent = [
    "Butt-tis Buuri Scholarship Fund supports needy students in Ghana's Bawku West District, offering financial aid for tertiary, vocational, and apprenticeship programs. Our goal is to enhance access to education and training for youth seeking further education.",
    "The scholarship is tailored for first-year undergraduate students and those in continuing education at any public higher institution in Ghana. Applicants must be enrolled in a course of their choice.",
    "Butt-tis Buuri Scholarship Fund supports needy students in Ghana's Bawku West District, offering financial aid for tertiary, vocational, and apprenticeship programs. Our goal is to enhance access to education and training for youth seeking further education.",
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="justify-center items-center md:mx-28 mx-4 grid md:grid-cols-2 gap-20 md:py-6">
        <div className='flex flex-col justify-center items-center md:mt-0 mx-auto'>
          <h2 className='font-bold lg:text-5xl md:text-2xl text-[2rem] mb-4 text-[#483bdd]'>About Butt Tis buuri  Scholarship Fund  </h2>
          <p className='justify-centet items-center flex mx-auto'>
            <span className='text-[1.3rem] py-4 font-bold '>
              What you need to know about the Butt-Tis buuri  Scholarship Fund
            </span> <br />
          </p>

          <div className='flex gap-8 flex-wrap'>
           <div className="flex-wrap flex gap-4">
           {["ABOUT", "LEVEL/FIELD OF STUDIES", "ELIGIBLE NATIONALITY"].map((tab, index) => (
              <span key={index}>
                <h3
                  className={`text-[#3a2b9d] cursor-pointer font-bold ${activeTab === index ? 'text-[#685eac] underline duration-700 ease-in-out ' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </h3>
              </span>
            ))}
           </div>
            <div className='flex gap-8 text-justify'>
              <p className={`text-md mx-auto justify-center flex flex-col ${activeTab === 0 ? '' : 'hidden'}`}>
                {tabContent[0]}
                <a href="" className='bg-[#3a2b9d] w-[12rem] px-3 py-2 font-bold text-white mt-4 rounded-md'>View Requirements</a>
              </p>
              <p className={`text-md mx-auto justify-center flex flex-col ${activeTab === 1 ? '' : 'hidden'}`}>
                {tabContent[1]}
                <a href="" className='bg-[#3a2b9d] w-[12rem] px-3 py-2 font-bold text-white mt-4 rounded-md'>View Requirements</a>
              </p>
              <p className={`text-md mx-auto justify-center flex flex-col ${activeTab === 2 ? '' : 'hidden'}`}>
                {tabContent[2]}
               
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={Card} className='flex justify-center items-center mx-auto' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
