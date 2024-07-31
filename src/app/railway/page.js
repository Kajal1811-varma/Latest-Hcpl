import React from "react";

const projects = [
  {
    image:
      "https://img.freepik.com/free-photo/transport-concept-with-railways_23-2148959663.jpg?t=st=1722014980~exp=1722018580~hmac=b908569cb807f674f5bb07aac55c97022be9f9cd95c80e10c2bf83d81cdeeeed&w=740",
    title: "Beed Parli Railway",
    location: "Beed, MH, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/free-photo/railroad-worker-walking-away-rail-tracks_181624-40374.jpg?t=st=1722014927~exp=1722018527~hmac=dd3232e3ab6a96fe92b943fb9ca93a4a1783f5c7998b61e0c2e874cc5baadc49&w=740",
      title: "Daund Manmad Railway",
      location: "MH, India",
      location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/railroad-tracks-city-against-sky_1048944-5652222.jpg?w=360",
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
          <h1 className="text-3xl md:text-4xl font-serif uppercase">Railway</h1>
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
