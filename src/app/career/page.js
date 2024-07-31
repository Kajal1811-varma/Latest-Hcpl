"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useRouter } from 'next/navigation'; // Correct import for App Router


const page = () => {
  const router = useRouter();

  const handleShow = () => {
    router.push('/fresherform');
  };
  const handleShow2 = () => {
    router.push('/experienceform');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="py-16 px-4 md:px-8 font-serif" style={{ paddingTop: "110px" }}>
        <div className="flex flex-col items-center my-8 font-serif">
          <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
            <h3
              className="text-3xl md:text-5xl text-center md:text-left"
              data-aos="fade-up"
            >
              Careers at <br /> Hule Patil Group
            </h3>
            <p
              className="mt-7 md:mt-0 md:ml-8 text-base md:text-lg text-gray-600 max-w-md text-center md:text-left"
              data-aos="fade-up"
            >
              At Hule Patil Group, our focus extends beyond recruitment to the holistic development of our employees. We nurture talent and enhance productivity, fostering an environment where success is encouraged and achieved.
            </p>
          </div>
          <hr className="w-full max-w-7xl mx-auto my-8 md:my-10 border-gray-300" />

          <div className="w-full flex justify-center py-12">
            <div className="w-full max-w-6xl h-64 md:h-96 lg:h-[30rem]">
              <img
                src="https://www.shapoorjipallonji.com/assets/jpegs/about/timeline/desktop/timeline.jpg"
                alt="Description of image"
                className="w-full h-full object-cover"
                data-aos="flip-up"
              />
            </div>
          </div>
          <hr className="w-full max-w-7xl mx-auto my-8 md:my-10 border-gray-300" />
        </div>

        <div className="container mx-auto p-4">
          <div className=" flex flex-col items-center" data-aos="fade-up">
            <h3 className="text-2xl md:text-4xl uppercase font-serif text-center">
              Opportunities
            </h3>
            <div className="h-[4px] w-16 bg-[#ef1c25] my-3"></div>
            <h4></h4>
          </div>
          {/* <h1 className="text-lg md:text-xl font-bold mb-4 font-serif text-slate-600">
            Job Openings
          </h1>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg shadow-md font-serif">
              <a
                href="#"
                className="underline font-semibold text-slate-700 text-lg md:text-xl"
              >
                Blackstone Multi-Asset Investing (BXMA) - Client Service
                Analytics, Associate
              </a>
              <div className="flex items-center mt-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 3v12M10 3v12M21 12.75V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-6.25M18.666 3H5.334C4.597 3 4 3.597 4 4.334V5h16V4.334C20 3.597 19.403 3 18.666 3z"
                  />
                </svg>
                <span className="text-gray-800 text-sm md:text-base">
                  Fresher
                </span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C8.134 2 5 5.134 5 9c0 4.418 4.6 8.962 6.294 10.421a1 1 0 001.412 0C14.4 17.962 19 13.418 19 9c0-3.866-3.134-7-7-7zM12 11a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
                <span className="text-gray-800 text-sm md:text-base">
                  India
                </span>
              </div>
              <div className="mt-2 text-gray-600 text-sm md:text-base">
                32950 Multi-Asset Investing (BXMA)
              </div>
            </div>

            <div className="border p-4 rounded-lg shadow-md font-serif">
              <a
                href="#"
                className="underline font-semibold text-lg text-slate-700 md:text-xl"
              >
                Blackstone Multi-Asset Investing (BXMA) - Client Service
                Analytics, Associate
              </a>
              <div className="flex items-center mt-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 3v12M10 3v12M21 12.75V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-6.25M18.666 3H5.334C4.597 3 4 3.597 4 4.334V5h16V4.334C20 3.597 19.403 3 18.666 3z"
                  />
                </svg>
                <span className="text-gray-800 text-sm md:text-base">
                  Experience
                </span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C8.134 2 5 5.134 5 9c0 4.418 4.6 8.962 6.294 10.421a1 1 0 001.412 0C14.4 17.962 19 13.418 19 9c0-3.866-3.134-7-7-7zM12 11a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
                <span className="text-gray-800 text-sm md:text-base">
                  India
                </span>
              </div>
              <div className="mt-2 text-gray-600 text-sm md:text-base">
                32950 Multi-Asset Investing (BXMA)
              </div>
            </div>
          </div> */}
        </div>

        <div className="py-2 bg-white font-serif">
          <div className="max-w-5xl px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div
                className="flex justify-between items-start cursor-pointer border-b-4 border-red-500 p-8 md:p-16 shadow-lg"
                data-aos="zoom-in-up"
              >
                <span className="text-xl md:text-2xl font-semibold">
                  Entry Level
                </span>
                <button
                  onClick={handleShow}
                  className="text-[#ef1c25] hover:text-[#ef1c25]"
                >
                  <span className="inline-flex items-center justify-center rounded-lg bg-transparent text-base font-bold uppercase text-[#ef1c25] shadow-[inset_0_0_0_2px_#ef1c25] transition duration-200 hover:bg-[#ef1c25] hover:text-white px-4 py-2 md:px-4 md:py-3 md:text-xl">
                    <ArrowRightIcon className="h-6 md:h-8 w-6 md:w-8 text-[#ef1c25] hover:text-[#ef1c25]" />
                  </span>
                </button>
              </div>

              <div
                className="flex justify-between cursor-pointer items-start border-b-4 border-red-500 p-8 md:p-16 shadow-lg"
                data-aos="zoom-in-up"
              >
                <span className="text-xl md:text-2xl font-semibold">
                  Experienced & <br /> Senior Roles
                </span>
                <button
                  onClick={handleShow2}
                  className="text-[#ef1c25] hover:text-[#ef1c25]"
                >
                  <span className="inline-flex items-center justify-center rounded-lg bg-transparent text-base font-bold uppercase text-[#ef1c25] shadow-[inset_0_0_0_2px_#ef1c25] transition duration-200 hover:bg-[#ef1c25] hover:text-white px-4 py-2 md:px-4 md:py-3 md:text-xl">
                    <ArrowRightIcon className="h-6 md:h-8 w-6 md:w-8 text-[#ef1c25] hover:text-[#ef1c25]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full max-w-7xl mx-auto my-8 md:my-16 border-gray-300" />
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-10 font-serif">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="p-4 bg-white rounded-md">
              <h2 className="text-xl md:text-3xl font-medium mb-4 text-gray-800">
              Skill Enhancement
              </h2>
              <p
                className="text-gray-600 my-4 md:my-8 text-base md:text-lg leading-7 md:leading-8"
                data-aos="fade-right"
              >
                HCPL is dedicated to providing learning and development opportunities that advance our employees' careers in various domains, including investment skills, leadership and management, communication, and technology, among others.
              </p>
            </div>

            <div className="p-4 bg-white rounded-md">
              <h2 className="text-xl md:text-3xl font-medium mb-4 text-gray-800">
                Workplace Culture
              </h2>
              <p
                className="text-gray-600 text-base md:text-lg leading-7 md:leading-8"
                data-aos="fade-up"
              >
                We strive to attract and retain top talent from diverse disciplines, believing that teams with varied backgrounds and experiences make superior business decisions. Our strategy is built on the pillars of diversity and inclusion, continuous learning, collaborative culture, and performance excellence.
              </p>
            </div>

            <div className="p-4 bg-white rounded-md ">
              <h2 className="text-xl md:text-3xl font-medium mb-4 text-gray-800">
              Employee Benefits
              </h2>
              <p
                className="text-gray-600 text-base md:text-lg leading-7 md:leading-8"
                data-aos="fade-up"
              >
                Our employee benefits are comprehensive and competitive, featuring robust health and retirement plans. Additionally, we offer a wide range of quality-of-life benefits, including flexible time-off options and perks such as well-being programs and family planning resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
