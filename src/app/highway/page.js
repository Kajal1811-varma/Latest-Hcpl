import React from "react";

const projects = [
  {
    image:
      "https://img.freepik.com/free-photo/great-modern-infrastructure-megapolis_140725-8585.jpg?t=st=1722014259~exp=1722017859~hmac=b7a92fc9a723a22a3a029f32bb20744b90191123744056f94d07848b74347d62&w=740",
    title: "NH 548D (Highway)",
    location: "Dahej, Gujarat, 2021",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/free-photo/aerial-view-shanghai-overpass-night_1359-687.jpg?t=st=1722014297~exp=1722017897~hmac=872a93af82aecfeff207dd78e1a7d890f174c22d2bd69b18828af8e22e210b77&w=360",
    title: "Umapur, Mungari, Harro Toll Plaza Uttar Pradesh",
    location: "UP, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-high-speed-viaduct_1127-2849.jpg?t=st=1722014320~exp=1722017920~hmac=b8f76264b542d280541bfb258f28df5e0f68919f0a5bd57599de5d4c9a4e55a9&w=740",
    title: "Rasalpur Mithegaon Toll Plaza Uttar Pradesh",
    location: "UP India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/free-photo/top-view-road-bucharest-multiple-cars-parking-green-lawn-right-view-from-drone-romania_1268-16364.jpg?t=st=1722014379~exp=1722017979~hmac=df9e9b5b19a33407a683852310642dac36f3187f531cbc72811de41c75857bbf&w=740",
    title: "Dongrale Toll Plaza Maharashtra",
    location: "MH, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/vehicles-highway-by-street-against-sky-city_1048944-16406792.jpg?w=740",
    title: "Chalakwadi Toll Plaza Maharashtra",
    location: "MH, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/asphalt-road-egyptian-desert-evening-light_431724-68.jpg?w=740",
    title: "Karodi Sambhajinagar Toll Plaza Maharashtra",
    location: "MH, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/vehicles-highway-against-sky-city_1048944-10275147.jpg?w=360",
    title: "Undewadi Toll Plaza Maharashtra",
    location: "MH, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/amazing-view-highway-seoul_121355-22.jpg?w=740",
    title: "Dilawarpur Toll Plaza Telangana",
    location: "TS, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/amazing-view-highway-seoul_121355-22.jpg?w=740",
    title: "Malian Toll Plaza Punjab",
    location: "PB, India",
    // location1: "abc",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/amazing-view-highway-seoul_121355-22.jpg?w=740",
    title: "Vaidyakinhi Toll Plaza Maharashtra",
    location: "MH, India",
    // location1: "abc",
  },
];

const Page = () => {
  return (
    <>
      <div className="px-4 py-6" style={{ paddingTop: "110px" }}>
        <div className="w-full my-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif uppercase">
            Highways
          </h1>
          <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
