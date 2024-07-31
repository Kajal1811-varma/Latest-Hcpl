"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="font-serif my-4 px-4 md:px-8"
      style={{ paddingTop: "80px" }}
    >
      {/* Section 1: Head Office */}
      <div
        className="container mx-auto mt-8 h-auto md:h-[500px] w-full"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="md:w-2/3 px-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Head Office</h1>
            <p className="md:text-xl text-lg font-semibold">
              Hule Constructions Private Limited
            </p>
            <p className="text-xl mt-2">Shivaji Chauk, Patoda</p>
            <p className="text-xl">Dist. Beed - 414204</p>
            <p className="text-xl">Maharashtra, India</p>
            <p className="mt-4 text-xl">Tel: +91-8674900609</p>
          </div>
          <div className="relative w-full md:w-2/3" data-aos="flip-down">
            <Image
              src="https://www.shapoorjipallonji.com/assets/jpegs/contact/head-office.jpg"
              alt="Head Office Image"
              width={730}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="w-full max-w-7xl mx-auto md:my-4 border-gray-300" />

      {/* Section 2: Country Office */}
      <div
        className="container mx-auto my-8 h-auto md:h-[500px] w-full"
        data-aos="fade-up"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-0">
          <div
            className="relative w-full md:w-2/3 order-1 md:order-2"
            data-aos="flip-down"
          >
            <Image
              src="https://img.freepik.com/free-photo/glass-designed-building-view_23-2148230382.jpg"
              alt="Country Office Image"
              width={730}
              height={700}
              className="object-cover"
            />
          </div>
          <div className="md:w-2/3 px-8 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Country Office
            </h1>
            <p className="md:text-xl text-lg font-semibold">
              Hule Patil Group Company Private Limited
            </p>
            <p className="text-xl mt-2">'A' Building, City Vista</p>
            <p className="text-xl">Downtown, Kharadi</p>
            <p className="text-xl">Pune, 411014</p>
            <p className="text-xl">Maharashtra, India</p>
            <p className="mt-4 text-xl">Tel: +91-8674900609</p>
          </div>
        </div>
      </div>
      <hr className="w-full max-w-7xl mx-auto md:my-4 border-gray-300" />

      {/* Section 3: Global Office */}
      <div
        className="container mx-auto mt-8 h-auto md:h-[500px] w-full"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="md:w-2/3 px-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Global Office
            </h1>
            <p className="md:text-xl text-lg font-semibold">New York</p>
            <p className="text-xl mt-2">Shivaji Chauk, Patoda</p>
            <p className="text-xl">Dist. Beed - 414204</p>
            <p className="text-xl">Maharashtra, India</p>
            <p className="mt-4 text-xl">Tel: +91-8674900609</p>
          </div>
          <div className="relative w-full md:w-2/3" data-aos="flip-down">
            <Image
              src="https://img.freepik.com/free-photo/representation-american-flag-us-national-loyalty-day-celebration_23-2151306089.jpg"
              alt="Global Office Image"
              width={730}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="w-full max-w-7xl mx-auto md:my-4 border-gray-300" />

      {/* Google Maps Embed */}

      <div className="flex flex-col items-center justify-center p-4 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="w-full max-w-4xl h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456!2d-123.456789!3d45.678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0x1234567890abcdef!2sExample%20Location!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-8 rounded-md shadow-md max-w-6xl mx-auto">
        <h2 className="font-bold mb-4 text-3xl md:text-5xl text-center">
          Get in Touch
        </h2>
        <p className="mb-8 text-center">
          Fill out the form below to get in touch with us. We'll get back to you
          as soon as possible.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 border border-gray-300 rounded"
            />
          </div>
          <textarea
            placeholder="Type Message"
            className="w-full p-4 border border-gray-300 rounded h-32 mb-4"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-6 rounded uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      

    </div>
  );
};

export default Page;
