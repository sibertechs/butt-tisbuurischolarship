import React from 'react';
import { BiUserPlus, BiLogOut, BiNote, BiUser } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import CARD1 from './Images/CARD1.jpg';
import CARD2 from './Images/CARD2.png';

const Qualification = React.forwardRef((props, ref) => {
    const scrollToApplySection = (e) => {
        e.preventDefault();
        const section = document.getElementById('apply');
        console.log('Before scrollIntoView');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        console.log('After scrollIntoView');
      };
      

  return (
    <div ref={ref} id="Qualification">
      <div className="justify-center text-justify w-full px-20 items-center overflow-hidden mx-auto flex flex-col">
        <h4 className="font-bold text-[#483bdd] uppercase">Requirements</h4>
        <h1 className="font-bold text-[#483bdd] text-center mx-auto lg:text-4xl md:text-3xl sm:text-2xl text-[1.3rem]">
          Butt-tis Buuri Scholarship Fund Scholarship Reloaded Requirements
        </h1>
        <div className="grid grid-auto-fit gap-8">
          <div className="mt-16">
            <img src={CARD1} alt="" />
          </div>
          <div className="flex flex-col mt-16">
            <div>
              <h1 className="font-bold mb-2 text-[#483bdd] lg:text-[2.5rem] md:text-[2.2rem] text-[1.5rem] font-abc">Eligibility</h1>
              <div className="text-justify md:text-[1rem] w-full">
                <ul className="list-disc text-md md:mx-6 mx-2">
                  <li>Applicants must be a resident of Kusaug Toende (Bawku West District) & its surroundings.</li>
                  <li>Applicants must be Senior High/Technical school graduates & not enrolled in any tertiary institution as first-time applicants.</li>
                  <li>Applicants must apply to any public Tertiary school in Ghana (University, Technical University, or College).</li>
                  <li>Those who do not qualify for tertiary education but are eager to acquire a skill and start a trade can also apply (not applicable in the 2023/24 academic year).</li>
                  <li>The Applicant must be prepared to give back to the community.</li>
                </ul>
              </div>
            </div>

            <div className="w-full">
              <h1 className="font-bold mb-2 text-[#483bdd] lg:text-[2.5rem] md:text-[2.2rem] text-[1.5rem] ">Application Process</h1>
              <div className="text-justify">
                <ul className="list-disc text-md md:mx-6 mx-2">
                  <li className=" ">Interested students should download the application form <a href="" download="scholarship-form.pdf"><button className="text-[#4338CA]">here</button></a> to apply.</li>
                  <li className="">Completed application form and all documents should be submitted to the secretariat, Butt-tis Buuri Scholarship Fund, Zebilla.</li>
                  <li className="">Shortlisted applicants will be contacted.</li>
                </ul>
              </div>
            </div>

            <div className="w-full">
              <h1 className="font-bold mb-2 text-[#483bdd] lg:text-[2.5rem] md:text-[2.2rem] text-[1.5rem] ">Documents to attach:</h1>
              <div className="text-justify">
                <ul className=" list-disc text-md md:mx-6 mx-2">
                  <li className=" ">Admission Letter</li>
                  <li className="">A recommendation letter</li>
                  <li className="">Birth Certificate/Ghana Card/Passport</li>
                  <li className="">SHS or Technical or Vocational School certificate/results</li>
                  <li className="">Other Supporting Documents</li>
                </ul>
              </div>
            </div>

            <div className="w-full">
              <h1 className="font-bold text-[#483bdd] lg:text-[2.5rem] md:text-[2.2rem] text-[1.5rem] ">Please Note</h1>
              <div className="">
                <ul className=" list-disc text-md md:mx-6 m">
                  <li className=" ">Application is completely FREE!</li>
                  <li className="">The scholarship only covers tuition fees and book allowance.</li>
                  <li className="">Workers and professionals on salary and pursuing continuous education are not qualified to apply</li>
                  <li className="">Applications submitted through any other means will not be accepted.</li>
                  <li className=" ">Applicant must not be on any other Government of Ghana scholarship or any State Institution scholarship.</li>
                  <li className="">All applicants shall complete an essay or statement of career objectives to justify their request for the scholarship.</li>
                  <li className="">Misrepresentation in any material form renders the application null and void. Award made based on that shall be withdrawn and person(s) involved prosecuted.</li>
                  <li className="">Only shortlisted applicants will be contacted.</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="w-full mt-4">
                <h1 className="text-[1.2rem] font-bold text-[#483bdd]">Application Opening date</h1>
                <div className="text-justify ">
                  <li className=" ">4th June, 2023</li>
                </div>
              </div>

              <div className="w-full mt-4">
                <h1 className="text-[1.2rem] text-[#DC2626]">Closing date</h1>
                <div className="text-justify">
                  <li className="my-2">28th July, 2023</li>
                </div>
              </div>

              <div className="w-full mt-[]">
                <h1 className="mx-4 mb-4 font-bold text-[#4338CA]">For further clarification or assistance, contact:</h1>
                <div className="text-justify md:mx-4 -mx-14 flex list-none">
                  <li className="mr-4">
                    <a href="mailto:butttisbuuri@gmail.com" className="font-bold">butttisbuuri@gmail.com</a>
                  </li>
                  <li><span className="text-[#4338CA] font-bold">or</span></li>
                  <li> <a href="#" className="ml-4 font-bold">0241720404/0506149300</a></li>
                </div>

                <div className="mx-8 mt-4 w-[16rem]">
                  <a href="/ApplicacantQualitication/PDF/scholarship-application-form.pdf" download="scholarship-application-form.pdf">
                    <button className="bg-[#F59E0B] w-full h-[3rem] font-bold rounded-md">Download Application</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>

            <div className="justify-center max-w-[1240px] flex flex-col mx-auto text-center">
              <h4 className="font-bold text-xl text-[#4338CA] mt-4">APPLICATION</h4>
              <h1 className="font-bold lg:text-[2.3rem] md:text-[2rem] text-[#4338CA] my-4">How to apply for the Butt-tis Buuri Scholarship Fund Scholarship Reloaded</h1>
            </div>

            <div className="grid grid-auto-fit md:mt-28 mb-8">
              <div>
                <img src={CARD2} alt="" className="w-[500px]" />
              </div>
              <div className="grid grid-auto-fit">
                <div className="flex flex-col">
                  <span className="flex gap-2">
                    <BiUserPlus size={40} className="text-[#4338CA]" />
                    <h3 className="text-[#4338CA] text-xl">Step1</h3>
                  </span>
                  <p className="mx-8">
                    Sign up, submit documents, make requests. Unlock portal access. Begin your journey with us.
                  </p>
                  <p className="mx-8 mt-4">
                    Upon approval of your account by the foundation, an email confirmation will be sent to you.
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="flex gap-2">
                    <BiLogOut size={40} className="text-[#4338CA] -scale-95" />
                    <h3 className="text-[#4338CA] text-xl">Step2</h3>
                  </span>
                  <p className="mx-8">
                    Log in to the portal with the provided email and password. Navigate to 'Payments' in the menu bar, then choose 'Request Payments
                  </p>
                </div>

                <div className="flex flex-col mt-6">
                  <span className="flex gap-2">
                    <BiNote size={40} className="text-[#4338CA]" />
                    <h3 className="text-[#4338CA] text-xl">Step3</h3>
                  </span>
                  <p className="mx-8">
                    Complete the necessary details for a scholarship grant application and click 'Submit' to send in your request.
                  </p>
                </div>

                <div className="flex flex-col mt-6">
                  <span className="flex gap-2">
                    <BiUser size={40} className="text-[#4338CA]" />
                    <h3 className="text-[#4338CA] text-xl">Step4</h3>
                  </span>
                  <p className="mx-8">
                    Complete the necessary details for a scholarship grant application and click 'Submit' to send in your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Qualification;
