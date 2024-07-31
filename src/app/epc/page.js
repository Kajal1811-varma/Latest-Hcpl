import React from "react";

const projects = [
  {
    image:
      "https://img.freepik.com/premium-photo/cars-road-against-sky-city_1048944-1971668.jpg?w=740",
    title: "BIAS Plant for MRF Tyres",
    location: "Dahej, Gujarat, 2021",
    location1: "abc",
  },
  {
    image:
      "https://travelfare.in/wp-content/uploads/2021/04/Sonvarsha-Toll-Plaza.jpg",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/people-road-against-sky_1048944-13952460.jpg?w=740",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
  {
    image:
      "https://content.jdmagicbox.com/comp/beed/l7/9999p2442.2442.220317223436.y5l7/catalogue/selu-amba-toll-plaza-beed-toll-booth-dealers-robtgvh4y6.jpg",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
  {
    image:
      "https://travelfare.in/wp-content/uploads/2021/04/Khadda-Toll-Plaza.jpg",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
  {
    image:
      "https://content.jdmagicbox.com/comp/west_champaran/i9/9999p6254.6254.220419211310.m1i9/catalogue/toll-tax-n-h-siswania-west-champaran-toll-booth-dealers-kjo89aie9h.jpg?clr=",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
  {
    image:
      "https://content.jdmagicbox.com/comp/kushinagar/d3/9999p5564.5564.220205222924.w7d3/catalogue/nhai-toll-tax-paying-guest-mujahana-haitim-kushinagar-toll-booth-dealers-aqd0hbrh1p.jpg",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
  {
    image:
      "https://content.jdmagicbox.com/comp/basti/r2/9999p5542.5542.220126014628.j3r2/catalogue/nhai-toll-plaza-gaur-railway-station-basti-toll-booth-dealers-ix44sh7bcy.jpg",
      title: "BIAS Plant for MRF Tyres",
      location: "Dahej, Gujarat, 2021",
      location1: "abc",
  },
];

const Page = () => {
  return (
    <>
      <div className="px-4 py-6" style={{ paddingTop: "110px" }}>
        <div className="w-full my-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif uppercase">EPC Contracting and Mining</h1>
          <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
           <div
           key={index}
           className="relative group overflow-hidden"
           style={{ height: "25rem" }}
         >
           <div
             className="absolute inset-0 bg-cover bg-center"
             style={{
               backgroundImage: `url(${project.image})`,
               zIndex: 0,
             }}
           ></div>
           <div className="absolute inset-0 flex items-end justify-center p-4 text-white opacity-10 group-hover:opacity-100 transition duration-300 ease-in-out z-20">
             <div className="absolute inset-0 bg-black opacity-90 group-hover:opacity-10 transition duration-300 ease-in-out z-10"></div>
             <div className="text-center">
               <h3 className="text-xl font-bold">{project.title}</h3>
               <p>{project.location1}</p>
               <p>{project.location}</p>
             </div>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
