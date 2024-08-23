import React, { useState } from 'react';

const FAQ = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);

  const handleDisplay1 = () => {
    setDisplay1(!display1);
  };

  const handleDisplay2 = () => {
    setDisplay2(!display2);
  };

  const handleDisplay3 = () => {
    setDisplay3(!display3);
  };

  return (
    <div className='justify-center items-center flex flex-col mx-4 overflow-hidden py-8]'>
      <div className='pb-12'>
        <h1 className='text-[2rem] font-bold text-center'>Frequently Asked Questions</h1>
        <p className='text-[0.8rem]'>Find Questions related to the application here. If your question is not answered, go to the contact us page.</p>
      </div>

      <div className='justify-center items-center z-10 flex flex-col w-full'>
        <div className='justify-center items-center flex flex-col w-full my-2 overflow-hidden'>
          <p
            onClick={handleDisplay1}
            className='text-left px-8 pt-4 bg-white h-[6rem] overflow-hidden top-[10rem] md:w-[50%] w-[90%] shadow-md rounded-md hover:text-[#4338CA] duration-300 ease-in-out cursor-pointer'
          >
            How do I know the scholarship?
          </p>
          <span
            className={`text-left px-8 pt-4 bg-white h-[6rem] md:w-[50%] absolute w-[90%] shadow-md rounded-md border transition-all duration-700 ease-in-out ${
              display1 ? 'opacity-100 mt-[8rem]' : 'opacity-0 mt-[-9rem]'
            }`}
          >
            Your scholarship status will be...
          </span>
        </div>

        <div className='justify-center items-center z-10 flex flex-col w-full my-2 overflow-y-hidden'>
          <p
            onClick={handleDisplay2}
            className='text-left px-8 pt-4 bg-white h-[6rem] md:w-[50%] w-[90%] shadow-md rounded-md hover:text-[#4338CA] duration-300 ease-in-out cursor-pointer' >
            Can I apply every academic year?
          </p>
          <span
            className={`text-left px-8 pt-4 bg-white h-[6rem] md:w-[50%] absolute w-[90%] shadow-md rounded-md border transition-all duration-700 ease-in-out ${
              display2 ? 'opacity-100 mt-[8rem]' : 'opacity-0 mt-[-9rem]'
            }`}
          >
            Yes, you can apply for the scholarship every...
          </span>
        </div>

        <div className='justify-center items-center  flex flex-col w-full my-2'>
          <p
            onClick={handleDisplay3}
            className='text-left px-8 pt-4 bg-white h-[6rem] md:w-[50%] w-[90%]  shadow-md rounded-md hover:text-[#4338CA] duration-300 ease-in-out cursor-pointer'
          >
            Can my scholarship be terminated?
          </p>
          <span
            className={`text-left px-8 pt-4 bg-white h-[6rem] md:w-[50%]  absolute w-[90%] shadow-md rounded-md border transition-all duration-700 ease-in-out ${
              display3 ? 'opacity-100 mt-[8rem]' : 'opacity-0 mt-[-9rem]'
            }`}
          >
            Scholarships can be terminated if...
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
