"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const clientImages = [
    "/assets/images/MSRDC.jpg",
    "/assets/images/PWD_HCPL.png",
    "/assets/images/Railway_HCPL.png",
    "/assets/images/NHAI_HCPL.png",
    "/assets/images/PWD_HCPL.png",
    
  ];

  return (
    <>
      <div
        className="font-serif px-4 md:px-16 py-10"
        style={{ paddingTop: "100px" }}
      >
        <div className="container mx-auto my-8 h-auto md:h-[400px] w-full font-serif">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 p-4 md:p-16" data-aos="fade-up">
              <h3 className="mb-4 text-3xl md:text-5xl text-black">
              Delivering 7 decades of trust and quality to India
              </h3>
              <p className="text-md mt-4 md:mt-12 text-black">
              The Hulepatil family sigil beautifully embodies the family's values and heritage. At the center is a shield symbolizing protection and strength. The lion on the left represents courage and leadership, while the horse on the right signifies power and freedom. Above the shield, a radiant sun shines, symbolizing enlightenment and vision. The ribbon bears a Sanskrit motto meaning "Prospering development and trust in India since its independence," highlighting the family's dedication to progress and strong relationships. Our golden sigil reflects the family's success, wealth, and enduring legacy, representing how our group excels today.
              </p>
            </div>
            <div
              className="relative w-full md:w-1/3 p-4 md:p-0"
              data-aos="fade-up"
            >
              <Image
                src="/assets/images/HulepatilGroupLogo.jpg"
                alt="HCPL Image"
                width={400}
                height={300}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-black py-10 md:py-20 font-serif">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="flex items-center justify-center md:col-span-1">
                <h2 className="text-3xl md:text-4xl text-white font-semibold md:ml-6 ml-0">
                  The HCPL Distinction
                </h2>
              </div>
              <div
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3 md:px-0 px-10 md:mt-0 mt-4"
                // data-aos="fade-up"
              >
                {[
                  "A Prominent Player in the Infrastructure Sector",
                  "An Integrated and Comprehensive Approach",
                  "In-House Expertise, Robust Execution Capabilities, and Extensive Experience in Handling Large, Complex Projects",
                  "Visionary Leadership, Backed by an Experienced Management Team and a Highly Skilled Workforce",
                  "Prudent and Disciplined Financial Management",
                  
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-white">
                    <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-10 md:py-20 font-serif">
          <div className="container mx-auto">
            <div className="mb-6 mt-6 flex flex-col items-center">
              <h2 className="mb-3 text-3xl md:text-5xl font-semibold font-serif">
                Our Reach
              </h2>
              <div className="h-[6px] w-16 bg-[#ef1c25]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-8">
              <div className="relative flex justify-center items-center">
                <Image
                  src="/assets/images/map.jpg"
                  alt="India Map"
                  width={600}
                  height={500}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white bg-black py-16 px-4 md:px-8 font-serif">
          <div
            className="mb-6 mt-6 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-semibold font-serif">
              Our Values
            </h2>
            <div className="h-[4px] w-16 bg-[#ef1c25]"></div>
          </div>
          <div className="flex justify-center">
            <p className="text-xl my-4 md:my-4  text-white text-center leading-9 mx-16">
              At Hule Constructions, our values are the cornerstone of
              everything we do. We are committed to excellence, integrity, and
              innovation, ensuring that each project we undertake is completed
              to the highest standards. Our dedication to sustainability drives
              us to adopt environmentally responsible practices, while our focus
              on transparency fosters trust and reliability among our clients
              and partners. We believe in the power of collaboration and strive
              to build strong relationships with stakeholders, ensuring mutual
              growth and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30 rounded-full mb-4 flex items-center justify-center">
                <Image
                  src="https://img.freepik.com/free-photo/top-view-businessmen-analyzing-bar-charts-laptop_1098-344.jpg?t=st=1721891153~exp=1721894753~hmac=cc553db55c33400961d8c270b00962326a9eb03f5f13ca9b5fbf71821954bab0&w=740"
                  alt="Research"
                  width={800}
                  height={600}
                  className="object-contain mx-auto"
                  data-aos="fade-in-left"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-gray-300 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30 rounded-full mb-4 flex items-center justify-center">
                <Image
                  src="https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377131.jpg?t=st=1721889339~exp=1721892939~hmac=ed02bcb9daea3850e48b877fd6f11610b6408e598ce69345fb8039ffb0dc4c9b&w=740"
                  alt="Strategy"
                  width={800}
                  height={600}
                  className="object-contain mx-auto"
                  data-aos="fade-up"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-300 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30 rounded-full mb-4 flex items-center justify-center">
                <Image
                  src="https://img.freepik.com/free-photo/business-company-organisations-start-up-commercial_53876-64934.jpg?t=st=1721890987~exp=1721894587~hmac=7f6e738b6364e9fc4012c36cab4c3560d0009e1045cadcb6ddfdf488a3f715ad&w=740"
                  alt="Design"
                  width={800}
                  height={600}
                  className="object-contain mx-auto"
                  data-aos="fade-in-right"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-300 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-14 px-4 md:px-4 font-serif">
          <div
            className="mb-6 mt-6 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="mb-3 text-3xl md:text-4xl font-semibold font-serif">
              Our Clients
            </h2>
            <div className="h-[4px] w-16 bg-[#ef1c25]"></div>
          </div>
          <div className="flex justify-center">
            <p className="text-xl my-4 md:my-4  text-black text-center leading-9 mx-16">
              Over the years, we have had the privilege of serving prestigious
              clients such as NHAI, Maharashtra State Road Development
              Corporation, Ministry of Water Resources, Indian Railways,PWD, and
              the Krishna Godavari Irrigation Corporation. Our commitment lies
              in providing reliable and innovative solutions to even the most
              complex construction challenges, earning us a well-deserved
              reputation as an industry leader. Our strength extends beyond
              traditional construction methods to include a creative and
              analytical approach to cutting-edge technologies and delivery
              systems.
            </p>
          </div>

          <Slider {...settings}>
            {clientImages.map((image, index) => (
              <div key={index} className="mt-6">
                <Image
                  src={image}
                  alt={`Client ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
