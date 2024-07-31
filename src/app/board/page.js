"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div
        className="px-4 md:px-16 lg:px-20 py-10 font-serif"
        style={{ paddingTop: "50px" }}
      >
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row justify-center items-center p-8 space-y-8 md:space-y-0 md:space-x-8">
            <div
              className="w-full md:w-1/3 text-center md:text-left"
              data-aos="fade-up"
            >
              <div className="w-full mb-8 text-center" data-aos="fade-down">
              <h1 className="text-3xl md:text-4xl font-serif uppercase">
                The Firm
              </h1>
              <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
            </div>
            </div>
            <div className="w-full md:w-1/3" data-aos="fade-up">
              <p className="text-gray-700 text-lg leading-6">
                At Hule Constructions, our leadership and management team stands
                at the forefront of innovation and excellence, guiding the
                company with a visionary approach and unwavering commitment to
                quality. Our leaders bring a wealth of experience and expertise,
                fostering a culture of integrity, collaboration, and continuous
                improvement. We believe that investing in our people is
                investing in our future, and it is through their exceptional
                efforts that we continue to excel and grow as a leading
                construction conglomerate.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center" data-aos="flip-right">
              <img
                src="/assets/images/cmd.jpeg"
                alt="CMD"
                className="max-w-full h-[28rem] mx-auto object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold">CMD</h4>
            </div>
          </div>
        </div>
        <hr className="mx-auto my-2 border-gray-300" style={{ width: "80%" }} />

        <div className="container mx-auto py-10">
          <div className="flex flex-col items-center">
            <div className="w-full mb-8 text-center" data-aos="fade-down">
              <h1 className="text-3xl md:text-4xl font-serif uppercase">
                Leadership
              </h1>
              <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
              {/* <div className="text-center" data-aos="fade-down-right">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Pallon_Mistry_v1.jpg"
                  alt="Christine Anderson"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Christine Anderson</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div> */}
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Firoze_Bhathena.jpg"
                  alt="Wayne Berman"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Vishwanath Hule</h4>
                <p className="mt-1 text-slate-500 text-sm">Chairman and Managing DirectorProject Manager</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Subodh_C_Dixit.jpg"
                  alt="Martin Brand"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mrs Anita Hule</h4>
                <p className="mt-1 text-slate-500 text-sm">Director</p>
              </div>
              <div className="text-center" data-aos="fade-down-left">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Saini.jpg"
                  alt="Tom Nides"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Abhaysinh Hule Patil</h4>
                <p className="mt-1 text-slate-500 text-sm">CEO & Executive Director</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-auto my-2 border-gray-300" style={{ width: "80%" }} />

        <div className="container mx-auto py-10">
          <div className="flex flex-col items-center">
            <div className="w-full mb-8 text-center" data-aos="fade-down">
              <h1 className="text-3xl md:text-4xl font-serif uppercase">
                Management
              </h1>
              <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="text-center" data-aos="fade-down-right">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Pallon_Mistry_v1.jpg"
                  alt="Christine Anderson"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Sumit Hule</h4>
                <p className="mt-1 text-slate-500 text-sm">Chief Operation Officer</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Firoze_Bhathena.jpg"
                  alt="Wayne Berman"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Nikhil Gharat</h4>
                <p className="mt-1 text-slate-500 text-sm">Chief Financial Officer</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Subodh_C_Dixit.jpg"
                  alt="Martin Brand"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Shrikant Patil</h4>
                <p className="mt-1 text-slate-500 text-sm">Chief General Manager</p>
              </div>
              <div className="text-center" data-aos="fade-down-left">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Saini.jpg"
                  alt="Tom Nides"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Kakasaheb Haral</h4>
                <p className="mt-1 text-slate-500 text-sm">VP(Toll Operations)</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8 py-8">
              <div className="text-center" data-aos="fade-down-right">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Pallon_Mistry_v1.jpg"
                  alt="Christine Anderson"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Maruti Magar</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Firoze_Bhathena.jpg"
                  alt="Wayne Berman"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Sachin Padwal</h4>
                <p className="mt-1 text-slate-500 text-sm">General Manager(Toll Operations)</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Subodh_C_Dixit.jpg"
                  alt="Martin Brand"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Ajay Deshmukh</h4>
                <p className="mt-1 text-slate-500 text-sm">Administration Manager</p>
              </div>
              <div className="text-center" data-aos="fade-down-left">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Saini.jpg"
                  alt="Tom Nides"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Barikrao Bavne</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8 py-8">
              <div className="text-center" data-aos="fade-down-right">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Pallon_Mistry_v1.jpg"
                  alt="Christine Anderson"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Santosh Kangude</h4>
                <p className="mt-1 text-slate-500 text-sm">Administration Manager(Mining)</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Firoze_Bhathena.jpg"
                  alt="Wayne Berman"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Balasaheb Mandve</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Subodh_C_Dixit.jpg"
                  alt="Martin Brand"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Shrikant Kawde</h4>
                <p className="mt-1 text-slate-500 text-sm">Liaison Manager</p>
              </div>
              <div className="text-center" data-aos="fade-down-left">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Saini.jpg"
                  alt="Tom Nides"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Mr Yogesh Hule</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager(Mining)</p>
              </div>
            </div>
            {/* <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8 py-8">
              <div className="text-center" data-aos="fade-down-right">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Pallon_Mistry_v1.jpg"
                  alt="Christine Anderson"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Christine Anderson</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Firoze_Bhathena.jpg"
                  alt="Wayne Berman"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Wayne Berman</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div>
              <div className="text-center" data-aos="fade-up">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Subodh_C_Dixit.jpg"
                  alt="Martin Brand"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Martin Brand</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div>
              <div className="text-center" data-aos="fade-down-left">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/people/team/Mr_Saini.jpg"
                  alt="Tom Nides"
                  className="max-w-full h-[18rem] mx-auto object-cover"
                />
                <h4 className="mt-2 text-lg font-medium">Tom Nides</h4>
                <p className="mt-1 text-slate-500 text-sm">Project Manager</p>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
