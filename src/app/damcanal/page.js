import React from "react";

const projects = [
  {
    image:
      "https://img.freepik.com/free-photo/beautiful-mountain-landscape-sunny-day_23-2149063215.jpg?t=st=1722014661~exp=1722018261~hmac=e8699bcda5d92feb4cbb9d0f1e566c900422587eca5c81e1a9d8c51849db51c1&w=360",
    title: "Upper Kundalika",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/view-dam-against-plants_1048944-20798502.jpg?w=740",
    title: "Songiri Storage Tank",
    location: "Dharashiv, MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/transport-concept-with-car-bridge_23-2148959737.jpg?t=st=1722014527~exp=1722018127~hmac=0d2d091349b360fd8a154d3f89c9887ecd6b3a245d385f4e8c2e2bc9de9fce74&w=740",
    title: "Bhoom Canal Project (Ghanegaon Devangra)",
    location: "Dharashiv, MH, India",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/scenic-view-river-against-clear-sky_1048944-25289694.jpg?w=740",
    title: "Jaljeevan Osmanabad/ Dharashiv",
    location: "Dharashiv, MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/bridge-with-city_1127-4014.jpg?t=st=1722014554~exp=1722018154~hmac=e232908ca434b15bc3b7341f273c20c1290c85960b256bf4334ae83aeed055e6&w=740",
    title: "Sangli Lift Irrigation",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/aerial-drone-view-bridge-floating-river-village-located-near-it-fields-fog-air-moldova_1268-17447.jpg?t=st=1722014709~exp=1722018309~hmac=a1fab0d379dec83b41532f12584fe209b0e71d08a4c9543eadb64d000aa86fb9&w=740",
    title: "Repairs, Restoration and Renovation of Irrigation Dams",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/aerial-view-utho-wipat-prasit-floodgates-daytime-pak-phanang_29505-1068.jpg?w=740",
    title: "Pimpaldarwadi Dam",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/spring-heaven-outdoors-beautiful-purity-summer_1417-1082.jpg?t=st=1722014861~exp=1722018461~hmac=274aa806aaa1fc5dc1bd33e5bbfab409deaacd5ce598b5deab5f5ae6fe61b7c5&w=740",
    title: "Sindhphana Upgradation",
    location: "MH, India",
  },
  // You can add more items here for the second batch if needed
  {
    image:
      "https://img.freepik.com/premium-photo/aerial-view-utho-wipat-prasit-floodgates-daytime-pak-phanang_29505-1068.jpg?w=740",
    title: "Pimpaldarwadi Dam",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/aerial-view-utho-wipat-prasit-floodgates-daytime-pak-phanang_29505-1068.jpg?w=740",
    title: "Pimpaldarwadi Dam",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/spring-heaven-outdoors-beautiful-purity-summer_1417-1082.jpg?t=st=1722014861~exp=1722018461~hmac=274aa806aaa1fc5dc1bd33e5bbfab409deaacd5ce598b5deab5f5ae6fe61b7c5&w=740",
    title: "Sindhphana Upgradation",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/aerial-view-utho-wipat-prasit-floodgates-daytime-pak-phanang_29505-1068.jpg?w=740",
    title: "Pimpaldarwadi Dam",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/spring-heaven-outdoors-beautiful-purity-summer_1417-1082.jpg?t=st=1722014861~exp=1722018461~hmac=274aa806aaa1fc5dc1bd33e5bbfab409deaacd5ce598b5deab5f5ae6fe61b7c5&w=740",
    title: "Sindhphana Upgradation",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/aerial-view-utho-wipat-prasit-floodgates-daytime-pak-phanang_29505-1068.jpg?w=740",
    title: "Pimpaldarwadi Dam",
    location: "MH, India",
  },
  {
    image:
      "https://img.freepik.com/free-photo/spring-heaven-outdoors-beautiful-purity-summer_1417-1082.jpg?t=st=1722014861~exp=1722018461~hmac=274aa806aaa1fc5dc1bd33e5bbfab409deaacd5ce598b5deab5f5ae6fe61b7c5&w=740",
    title: "Sindhphana Upgradation",
    location: "MH, India",
  },
  
];

// Function to chunk array into smaller arrays of specified size
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Page = () => {
  // Split projects into chunks of 8
  const projectChunks = chunkArray(projects, 8);

  return (
    <>
      <div className="px-4 py-6" style={{ paddingTop: "110px" }}>
        <div className="w-full my-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif uppercase">
            Dams & Canals
          </h1>
          <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
        </div>

        {/* Render first set of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectChunks[0]?.map((project, index) => (
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
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heading for the next section */}
        <div className="my-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif uppercase">
          Projects that made us exel at early stage
          </h2>
          <div className="h-[4px] w-16 mt-4 bg-[#ef1c25] mx-auto"></div>
        </div>

        {/* Render second set of projects */}
        {projectChunks.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectChunks[1]?.map((project, index) => (
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
                    <p>{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
