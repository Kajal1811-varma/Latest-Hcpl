"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import "swiper/swiper-bundle.css";

const images = [
  {
    src: "https://img.freepik.com/premium-photo/erp-business-innovation-concept-blurred-background_161452-8123.jpg?w=740",
    alt: "Driving Indias transport with 4500+ lane kilometres of roads",
  },
  {
    src: "https://img.freepik.com/premium-photo/businessman-drawing-graph-with-marker-media-screen_161452-7568.jpg?w=740",
    alt: "Global expertise of 190+ marine networks",
  },
  {
    src: "https://img.freepik.com/premium-photo/education-process-facilitating-learning-business-education-concept_161452-9000.jpg?w=826",
    alt: "Unprecedented construction of 25+ automobile manufacturing units in India",
  },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
      <div className="font-serif" style={{ paddingTop: "80px" }}>
        <div className="flex flex-col justify-center items-center mt-8 lg:mt-16 font-serif">
          <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
            <h3
              className="text-3xl md:text-5xl font-serif text-center md:text-left"
              data-aos="fade-up"
            >
              Empowering Investments <br />
              and Businesses
            </h3>
            <p
              className="mt-7 md:mt-0 md:ml-8 text-base md:text-lg text-gray-600 max-w-md text-center md:text-left"
              data-aos="fade-up"
            >
              
Infrastructure and Finance Develop a nation. We believe in being a strong and dominating support in uplifting india's economic growth, prospering and building businesses and employment by pursuing excellence without compromising on integrity.
            </p>
          </div>
          <hr className="w-full max-w-7xl mx-auto my-8 md:my-10 border-gray-300" />

          <div className="w-full flex justify-center font-serif ">
            <div className="w-full max-w-7xl h-64 md:h-96 lg:h-[30rem]">
              <img
                src="https://blackstone.scene7.com/is/image/blackstone/StuyTown-Large-2?wid=1280&hei=719"
                alt="Description of image"
                className="w-full h-full object-cover"
                data-aos="flip-up"
              />
            </div>
          </div>
          <hr className="w-full max-w-7xl mx-auto my-8 md:my-10 border-gray-300" />
        </div>

        <div className="pt-10 md:pt-10 md:pb-0 pb-10 font-serif">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
              <div className="animate__animated animate__fadeInUp flex items-start justify-center md:col-span-1">
                <h2
                  className="text-3xl md:text-4xl font-medium"
                  data-aos="fade-up"
                >
                  Highlights
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3 md:px-0 px-8">
                <div
                  className="card-container rounded-lg bg-white p-8 md:p-12 shadow-md"
                  data-aos="fade-up"
                >
                  <div className="animate__animated animate__fadeInUp flex items-center">
                    <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                    <p className="text-lg">$200 million of Private Investment</p>
                  </div>
                </div>
                <div
                  className="card-container rounded-lg bg-white p-8 md:p-12 shadow-md"
                  data-aos="fade-up"
                >
                  <div className="animate__animated animate__fadeInUp flex items-center">
                    <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                    <p className="text-lg">500+ Projects Done</p>
                  </div>
                </div>
                <div
                  className="card-container rounded-lg bg-white p-8 md:p-12 shadow-md"
                  data-aos="fade-up"
                >
                  <div className="animate__animated animate__fadeInUp flex items-center">
                    <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                    <p className="text-lg">
                    8000+ jobs established
                    </p>
                  </div>
                </div>
                <div
                  className="card-container rounded-lg bg-white p-8 md:p-12 shadow-md"
                  data-aos="fade-up"
                >
                  <div className="animate__animated animate__fadeInUp flex items-center">
                    <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                    <p className="text-lg">
                    100000 + acres of dry land harvested
                    </p>
                  </div>
                </div>
                <div
                  className="card-container rounded-lg bg-white p-8 md:p-12 shadow-md"
                  data-aos="fade-up"
                >
                  <div className="animate__animated animate__fadeInUp flex items-center">
                    <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                    <p className="text-lg">
                    40000 + people get access to water
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full max-w-7xl mx-auto  md:my-16 border-gray-300" />

        <div className="bg-black py-10 md:py-20 font-serif">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
              <div className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1">
                <h2
                  className="text-3xl md:text-4xl font-medium text-white"
                  data-aos="fade-up"
                >
                  Vision
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3">
                <div className="mx-auto flex w-2/3 md:w-full">
                  <img
                    src="https://www.shapoorjipallonji.com/assets/jpegs/impact/csr/vision.jpg"
                    alt="Vision Image"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div
                  className="rounded-lg px-4 md:px-0 py-6 flex justify-center items-center"
                  data-aos="fade-up"
                >
                  <div className="animate__animated animate__fadeInUp">
                    <p className="max-w-xs text-md leading-relaxed text-slate-300 text-center md:text-left">
                    To become the foremost leader in the infrastructure,finance and construction industry, commanding a substantial market presence and driving economic growth through our projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full max-w-7xl mx-auto  md:my-16 border-gray-300" />

        <div className="py-10 md:py-0 font-serif">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1"
                data-aos="fade-up"
              >
                <h2 className="text-3xl md:text-4xl font-medium text-center md:text-center">
                  Mission
                </h2>
              </div>
              <div
                className="animate__animated animate__fadeInUp mx-4 md:mx-8 md:mt-0 mt-4 flex flex-col items-center md:col-span-2"
                data-aos="fade-up"
              >
                {/* <p className="mb-4 text-xl md:mb-8 md:text-3xl font-semibold text-slate-600 text-center md:text-left">
                  Empower communities and nurture ecologies.
                </p>
                <div
                  className="w-full bg-white py-6 md:py-8"
                  data-aos="fade-up"
                >
                  <ul className="space-y-4 md:space-y-6">
                    <li>
                      <p className="text-lg text-slate-500 md:max-w-2xl text-center md:text-left">
                        <span className="font-medium">
                          Education and skill development
                        </span>{" "}
                        for underprivileged children, youth and tribal
                        communities
                      </p>
                    </li>
                    <hr className="my-6 md:my-10 border-gray-200" />
                    <li>
                      <p className="text-lg text-slate-500 md:max-w-2xl text-center md:text-left">
                        <span className="font-medium">Healthy living</span> by
                        providing affordable quality healthcare, nutrition and
                        access to water and sanitation
                      </p>
                    </li>
                    <hr className="my-6 md:my-10 border-gray-200" />
                    <li>
                      <p className="text-lg text-slate-500 md:max-w-2xl text-center md:text-left">
                        <span className="font-medium">Social inclusion</span> by
                        enabling earning opportunities and financial security
                      </p>
                    </li>
                    <hr className="my-6 md:my-10 border-gray-200" />
                    <li>
                      <p className="text-lg text-slate-500 md:max-w-2xl text-center md:text-left">
                        <span className="font-medium">
                          Environment conservation
                        </span>{" "}
                        by increasing green cover and preserving biodiversity
                      </p>
                    </li>
                  </ul>
                </div> */}
                <h3 className="mb-4 text-md md:mb-8 md:text-xl font-medium text-slate-700">
                Infrastructure and Finance Develop a nation. We believe in being a strong and dominating support in uplifting india's economic growth, prospering and building businesses and employment by pursuing excellence without compromising on integrity
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full max-w-7xl mx-auto  md:my-16 border-gray-300" />

        <div className="py-10 md:py-0 font-serif mb-10">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1"
                data-aos="fade-up"
              >
                <h2 className="text-3xl md:text-4xl font-medium text-center md:text-center">
                  Corporate Social Responsibility
                </h2>
              </div>
              <div
                className="animate__animated animate__fadeInUp mx-4 md:mx-8 md:mt-0 mt-4 flex flex-col items-center md:col-span-2"
                data-aos="fade-up"
              >
                <h3 className="mb-4 text-md md:mb-8 md:text-xl font-medium text-slate-700">
                Our CSR initiatives focus on empowering women in rural areas to become self-reliant micro-entrepreneurs, educating children, and supporting schools and trusts. As a major donor to social welfare organizations in marathwada, we are committed to providing substantial benefits to our people and contributing to the overall betterment of society.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
