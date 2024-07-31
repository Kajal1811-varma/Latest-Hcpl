"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const images = [
  {
    src: "https://img.freepik.com/free-photo/portrait-engineers-work-hours-job-site_23-2151589535.jpg?t=st=1719753451~exp=1719757051~hmac=3afce9892f0a8742c2c27451e8634cafb32bc962259f94bb6f4a082225f6b3ea&w=740",
    alt: "$100 Million ( INR 1200 crs) of Innovative Infrastructure Projects that Drive Progress and Development.",
    title:
      "$100 Million ( INR 1200 crs) of Innovative Infrastructure Projects that Drive Progress and Development.",
    subtitle: "INFRASTRUCTURE",
    // location: "New Owendo International Port, Gabon",
  },
  {
    src: "https://img.freepik.com/free-photo/landscape-with-windmills_15879-608.jpg?w=740&t=st=1719754037~exp=1719754637~hmac=7c10ebeba367f63a311de73004cfc0c101bfc467663b36fe68318e91ef053caf",
    alt: "Global expertise of 190+ marine networks",
    title:
      "Building Marvels with Superior Construction Quality and Innovation. More than 500 Projects as of 2024",
    subtitle: "Construction",
    // location: "New Owendo International Port, Gabon",
  },
  {
    src: "https://img.freepik.com/free-photo/close-up-woman-gas-station_23-2148906372.jpg?t=st=1719754467~exp=1719758067~hmac=c85c5121dd301f5962d278a060fcec7d4d1acc35de043ec09f2220cdc2e57ce8&w=740",
    alt: "Unprecedented construction of 25+ automobile manufacturing units in India",
    title:
      "Empowering Growth in Financial Consultancy and Investment Management.",
    subtitle: "Finance",
    // location: "New Owendo International Port, Gabon",
  },
  {
    src: "https://img.freepik.com/free-photo/close-up-woman-gas-station_23-2148906372.jpg?t=st=1719754467~exp=1719758067~hmac=c85c5121dd301f5962d278a060fcec7d4d1acc35de043ec09f2220cdc2e57ce8&w=740",
    alt: "120+ Software Development Centres and IT Parks support Indian IT industry",
    title: "Innovative energy projects powering a greener tommorow",
    subtitle: "Energy",
    // location: "New Owendo International Port, Gabon",
  },
  {
    src: "https://img.freepik.com/free-photo/highway-bridges_53876-32441.jpg?t=st=1719754698~exp=1719758298~hmac=35a4eb16d94b0a10b428fc2fe5938696fd41c1d45f6b63384a0293c5c9130a85&w=740",
    alt: "World's largest Solar EPC solutions provider (IHS Markit)",
    title: "World's largest Solar EPC solutions provider (IHS Markit)",
    subtitle: "ENERGY",
    // location: "New Owendo International Port, Gabon",
  },
  {
    src: "https://img.freepik.com/free-photo/highway-bridges_53876-32441.jpg?t=st=1719754698~exp=1719758298~hmac=35a4eb16d94b0a10b428fc2fe5938696fd41c1d45f6b63384a0293c5c9130a85&w=740",
    alt: "Designed and delivered India's largest FPSO: Armada Sterling V",
    title:
      "Efficient and Reliable Toll Operations for Seamless Transportation all over India.",
    subtitle: "Toll Operations",
    // location: "New Owendo International Port, Gabon",
  },
];

export default function Home() {
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
      <div className="py-16 font-serif">
        <div className="relative h-[37rem] overflow-hidden" data-aos="fade-up">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
                <h2 className="text-sm md:text-md mb-2 uppercase text-white">
                  {image.subtitle}
                </h2>
                <h1 className="mx-4 md:mx-8 mb-4 text-2xl font-bold text-white md:text-5xl">
                  {image.title}
                </h1>
                <Link href="/">
                  <button className="rounded-sm bg-white px-4 md:px-8 py-3 md:py-4 font-semibold text-black hover:text-[#ef1c25]">
                    Explore Our Work
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-xs md:top-auto md:right-5 md:left-auto md:transform-none md:text-sm text-white">
                {image.location}
              </div>{" "}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 md:p-8 md:grid-cols-2">
          <Link href="/about">
            <div className="relative h-[300px] md:h-[500px]" data-aos="fade-up">
              <Image
                src="https://www.shapoorjipallonji.com/assets/jpegs/home/banners/desktop/about.jpg"
                alt="Trusted legacy of planet engineering excellence"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
                <h2 className="text-sm md:text-md mb-2 uppercase text-white">
                  ABOUT
                </h2>
                <h1 className="mb-4 text-xl md:text-3xl font-bold text-white">
                  Discover about our journey, the distinction, the values and
                  our clients.
                </h1>
                <Link href="/about">
                  <button className="rounded bg-white px-4 md:px-8 py-2 md:py-4 font-semibold text-black hover:text-[#ef1c25]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/impact">
            <div className="relative h-[300px] md:h-[500px]" data-aos="fade-up">
              <Image
                src="https://img.freepik.com/premium-photo/volunteers-distributed-food-needy-mosques-soup-kitchen-rainy-day-providing-warm_1176614-6863.jpg?w=740"
                alt="COVID-19 Precautions"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
                <h2 className="text-sm md:text-md mb-2 uppercase text-white">
                  IMPACT
                </h2>
                <h1 className="mb-4 text-xl md:text-3xl font-bold text-white">
                  A positive economic change through our vision,mission and
                  goals.
                </h1>
                <Link href="/impact">
                  <button className="rounded bg-white px-4 md:px-8 py-2 md:py-4 font-semibold text-black hover:text-[#ef1c25]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        </div>

        <section className="container mx-auto bg-white p-12 md:p-8 font-serif">
          <div className="mb-8 text-center">
            <div className="mb-6 mt-6 flex flex-col items-center">
              <div className="mb-2 h-[4px] w-16 bg-[#ef1c25]"></div>
              <Link href="/board">
                <h2 className="mt-6 text-3xl uppercase tracking-widest text-gray-500">
                  The Firm
                </h2>
              </Link>
            </div>
            <h1 className="mt-4 font-serif text-3xl md:mt-16 md:text-4xl lg:text-5xl">
              Delivering for <span className="text-[#ef1c25]">Investors</span>
            </h1>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
            <div className="md:w-2/4" data-aos="fade-left">
              {/* <p className="mb-2 mt-4 text-xl leading-relaxed text-gray-500 md:mb-4 md:text-2xl">
                Unmatched Scale
              </p> */}
              <p className="mb-6 mt-4 text-sm leading-6 text-gray-600 md:text-base">
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
              <button className="group mt-4 text-xl inline-flex items-center gap-3 font-semibold md:mt-14 transition-transform duration-200 ease-in-out hover:scale-105">
                Learn More
                <span className="inline-flex items-center justify-center rounded-full bg-transparent font-bold uppercase tracking-widest text-[#ef1c25] hover:text-[#ef1c25] shadow-[inset_0_0_0_2px_#ef1c25] transition duration-200 hover:bg-[#ef1c25] px-4 py-3 text-xl">
                  <ArrowRightIcon className="h-6 w-6" />
                </span>
              </button>
            </div>
            <div className="mt-5 md:w-1/3 lg:mt-0" data-aos="fade-right">
              <h2 className="mb-2 text-4xl leading-3 md:text-5xl lg:text-5xl">
                $200 million
              </h2>
              <p className="mt-4 font-semibold text-gray-700">
                of Investments Collaboratively with GOI
              </p>
              {/* <p className="mt-4 text-xs font-medium text-gray-600">
                All figures as of March 31, 2024, unless otherwise indicated.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-600">
                (1) As of December 31, 2023.
              </p> */}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 p-4 md:p-8 md:grid-cols-2 font-serif">
          <Link href="/career">
            <div className="relative h-[300px] md:h-[500px]" data-aos="fade-up">
              <Image
                src="https://img.freepik.com/free-photo/portrait-professional-elegant-businessman_23-2150917158.jpg?t=st=1720176139~exp=1720179739~hmac=a16e8a388271d4bbeecab7bd44dc7fea5b122bbb855114ce7393b91bf6c06f67&w=740"
                alt="Trusted legacy of planet engineering excellence"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
                <h2 className="text-sm md:text-md mb-2 uppercase text-white">
                  CAREER
                </h2>
                <h1 className="mb-4 text-xl md:text-3xl font-bold text-white">
                  Join our dynamic team.
                </h1>
                <Link href="/career">
                  <button className="rounded bg-white px-4 md:px-8 py-2 md:py-4 font-semibold text-black hover:text-[#ef1c25]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/contactus">
            <div className="relative h-[300px] md:h-[500px]" data-aos="fade-up">
              <Image
                src="https://img.freepik.com/free-photo/smiling-young-customer-service-girl-with-headset-her-workplace_231208-9609.jpg?t=st=1720176512~exp=1720180112~hmac=da0ca6cce97e119c8a518d66258fae4324befd36302c7d558c2f24a28487b6ce&w=740"
                alt="COVID-19 Precautions"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
                <h2 className="text-sm md:text-md mb-2 uppercase text-white">
                  CONTACT US
                </h2>
                <h1 className="mb-4 text-xl md:text-3xl font-bold text-white">
                  Reach out to us for any inquiries or support.
                </h1>
                <Link href="/contactus">
                  <button className="rounded bg-white px-4 md:px-8 py-2 md:py-4 font-semibold text-black hover:text-[#ef1c25]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
