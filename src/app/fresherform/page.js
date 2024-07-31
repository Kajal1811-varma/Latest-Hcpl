import React from "react";

const Page = () => {
  return (
    <>
      <div className="py-6" style={{ paddingTop: "110px" }}>
        <div className="flex justify-center items-center min-h-screen">
          <form className="bg-white p-12 rounded-lg shadow-md w-full max-w-3xl font-serif">
            <h3 className="text-2xl font-semibold flex items-center justify-center"> Job Application</h3>
        <hr className="w-full max-w-7xl mx-auto my-4 md:my-16 border-gray-300" />
            <div className="mb-4">
              <input 
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Preferred Technology:
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="technology"
                  id="react-native"
                  className="mr-2"
                />
                <label htmlFor="react-native" className="mr-4">
                  React Native
                </label>
                <input
                  type="radio"
                  name="technology"
                  id="angularjs"
                  className="mr-2"
                />
                <label htmlFor="angularjs" className="mr-4">
                  AngularJS
                </label>
                <input
                  type="radio"
                  name="technology"
                  id="nodejs"
                  className="mr-2"
                />
                <label htmlFor="nodejs">NodeJS</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="file">
                Choose File
              </label>
              <input
                type="file"
                id="file"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700">
                By checking this, you agree to our{" "}
                <a href="#" className="text-[#ef1c25]">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#ef1c25]">
                  Privacy policy
                </a>
                .
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#ef1c25] text-white p-3 font-semibold rounded-md hover:bg-[#ef1c25]"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <hr className="w-full max-w-7xl mx-auto my-8 md:my-16 border-gray-300" />
      </div>
    </>
  );
};

export default Page;
