"use client";

import Link from "next/link";

const MobileNav = ({ isOpen, toggleMenu, headerNavLinks }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white text-black shadow-lg">
          <div className="flex flex-col items-center mt-16 p-4">
            {/* <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
            <button
              onClick={toggleMenu}
              className="sm:hidden flex items-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {/* <ul className="space-y-4">
              {headerNavLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="block font-medium text-gray-900 hover:text-[#ef1c25]"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
