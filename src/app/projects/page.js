"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="px-4 py-6 font-serif" style={{ paddingTop: "50px" }}>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-center p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="w-full mb-2 text-center" >
              <h1 className="text-3xl md:text-4xl font-serif uppercase">
                Infrastructure
              </h1>
              <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
            </div>
          </div>

          <div className="w-full md:w-2/3" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <Link href="/highway">
                <div className="relative flex gap-4">
                  <div
                    className="relative bg-gray-800 bg-opacity-50 text-white p-8 rounded-md shadow-md flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "url('https://www.shapoorjipallonji.com//assets/Desktop/Projects/640x640/jewel-of-the-creek.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "15rem",
                      width: "100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                    <div className="relative z-10 font-bold text-3xl">
                      Highway and Toll Operations
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/damcanal">
                <div className="relative flex gap-4">
                  <div
                    className="relative bg-gray-800 bg-opacity-50 text-white p-8 rounded-md shadow-md flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "url('https://www.shapoorjipallonji.com//assets/Desktop/Projects/640x640/annaram-barrage.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "15rem",
                      width: "100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                    <div className="relative z-10 font-bold text-3xl">
                      Water Irrigation Projects
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/railway">
                <div className="relative flex gap-4">
                  <div
                    className="relative bg-gray-800 bg-opacity-50 text-white p-8 rounded-md shadow-md flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "url('https://img.freepik.com/premium-photo/train-railroad-station-city-with-many-tracks-overhead-cables_1048944-24307920.jpg?w=740')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "15rem",
                      width: "100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                    <div className="relative z-10 font-bold text-3xl">
                      Railway Projects
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/epc">
                <div className="relative flex gap-4">
                  <div
                    className="relative bg-gray-800 bg-opacity-50 text-white p-8 rounded-md shadow-md flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "url('https://img.freepik.com/free-photo/high-angle-shot-highway-full-cars-captured-toronto-canada_181624-20519.jpg?t=st=1721984679~exp=1721988279~hmac=fcbb52ad48e06126a6f3a828290e265bb29b200578c89a5df20841c20ca4525e&w=740')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "15rem",
                      width: "100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                    <div className="relative z-10 font-bold text-3xl">
                      EPC Contracting and Mining
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full max-w-7xl mx-auto my-4 md:my-4 border-gray-300" />

      <div className=" mx-auto py-6 px-4 font-serif">
        <div className="w-full mb-8 text-center" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-serif uppercase">Finance</h1>
          <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:p-8 md:grid-cols-2">
          <div
            className="relative h-[200px] md:h-[400px]"
            data-aos="fade-up-right"
          >
            <Link href="/">
              <Image
                src="https://www.shapoorjipallonji.com//assets/Desktop/Projects/640x640/WaveRock1.jpg"
                alt="Trusted legacy of planet engineering excellence"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </Link>
          </div>

          <div className=" h-[400px] md:h-[200px] my-6 md:my-0 mx-1 md:mx-14 space-y-8 font-serif">
            <div
              className="card-container rounded-lg bg-white py-8 md:p-4 shadow-md"
              data-aos="fade-left"
            >

              <p className="text-xl md:text-2xl mb-4">
                Ashwini Finance is a dynamic NBFC dedicated to empowering individuals, entrepreneurs, and companies by providing tailored financial solutions. Specializing in venture debts and term credit loans, Ashwini Finance offers a comprehensive range of services including personal loans, business loans, asset loans, capital loans and eduaction loans. Our mission is to support your financial growth and stability, ensuring accessible and flexible financing options to meet your diverse needs.
              </p>


            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  text-center">
  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-0 mb-0">
    Upcoming Ventures <span className="text-[#ef1c25]">From Hule Patil Group</span>
  </h1>
  <div className="h-[4px] w-32 mt-4 bg-[#000000] mx-auto"></div>
</div>


      <hr className="w-full max-w-7xl mx-auto my-4 md:my-10 border-gray-300" />

      <div className="mx-auto py-6 px-4 font-serif">
  <div className="w-full mb-8 text-center" data-aos="fade-down">
    <h1 className="text-3xl md:text-4xl font-serif uppercase">Energy</h1>
    <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
  </div>
  <div className="grid grid-cols-1 gap-4 p-4 md:p-8 md:grid-cols-2">
    <div
      className="relative h-[200px] md:h-[450px] order-2 md:order-1"
      data-aos="fade-up-right"
    >
      <Link href="/">
        <Image
          src="/assets/images/HCPL_Energy.jpg"
          alt="Trusted legacy of planet engineering excellence"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </Link>
    </div>

    <div className="h-[400px] md:h-[200px] my-6 md:my-0 mx-1 md:mx-14 space-y-8 font-serif order-1 md:order-2">
      <div
        className="card-container rounded-lg bg-white py-8 md:p-4 shadow-md"
        data-aos="fade-left"
      >
        <p className="text-xl md:text-2xl mb-4">
        An upcoming establishment of a state-of-the-art 110 KLPD ethanol plant in Marathwada, Maharashtra. This facility will play a crucial role in supporting sustainable energy solutions and boosting the local economy. By producing ethanol, we aim to contribute to the reduction of greenhouse gas emissions and promote the use of renewable energy sources. This plant will not only create numerous employment opportunities in the region but also support local agriculture by providing a market for surplus crops. Stay tuned for more updates on this transformative project.
        </p>
      </div>
    </div>
  </div>
</div>


      <hr className="w-full max-w-7xl mx-auto my-4 md:my-10 border-gray-300" />

      <div className=" mx-auto py-6 px-4 font-serif">
        <div className="w-full mb-8 text-center" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-serif uppercase">Healthcare</h1>
          <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:p-8 md:grid-cols-2">
          <div
            className="relative h-[200px] md:h-[400px]"
            data-aos="fade-up-right"
          >
            <Link href="/">
              <Image
                src="/assets/images/HCPL_Healthcare.jpg"
                alt="Trusted legacy of planet engineering excellence"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </Link>
          </div>

          <div className=" h-[400px] md:h-[200px] my-6 md:my-0 mx-1 md:mx-14 space-y-8 font-serif">
            <div
              className="card-container rounded-lg bg-white py-8 md:p-4 shadow-md"
              data-aos="fade-left"
            >

              <p className="text-xl md:text-2xl mb-4">
              Early stage planning process of a cutting-edge 200-bed hospital in Pune, strategically located at the heart of the city's IT hub. This state-of-the-art facility will provide comprehensive medical services and advanced healthcare solutions to the community. Designed to cater to the needs of the rapidly growing population in the area, the hospital will offer world-class patient care, specialized treatments, and modern medical technologies. 
              </p>


            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-6 px-4 font-serif">
  <div className="w-full mb-8 text-center" data-aos="fade-down">
    <h1 className="text-3xl md:text-4xl font-serif uppercase">Hospitality</h1>
    <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
  </div>
  <div className="grid grid-cols-1 gap-4 p-4 md:p-8 md:grid-cols-2">
    <div
      className="relative h-[200px] md:h-[400px] order-2 md:order-1"
      data-aos="fade-up-right"
    >
      <Link href="/">
        <Image
          src="/assets/images/HCPL_Hospitality.jpg"
          alt="Trusted legacy of planet engineering excellence"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </Link>
    </div>

    <div className="h-[400px] md:h-[200px] my-6 md:my-0 mx-1 md:mx-14 space-y-8 font-serif order-1 md:order-2">
      <div
        className="card-container rounded-lg bg-white py-8 md:p-4 shadow-md"
        data-aos="fade-left"
      >
        <p className="text-xl md:text-2xl mb-4">
        We are thrilled to unveil plans soon for a luxurious hotel in Beed, designed to offer an unparalleled experience of comfort and elegance. This premium establishment will feature exquisite accommodations, world-class amenities, and exceptional service, catering to both business and leisure travelers. With its sophisticated design and strategic location, the hotel will become a beacon of luxury in Beed, providing guests with a perfect blend of modernity and tradition, redefining hospitality standards in the region.
        </p>
      </div>
    </div>
  </div>
</div>


      
      </div>
    
  );
};

export default Page;
