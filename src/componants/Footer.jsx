import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 font-serif">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:items-center text-start md:text-center ">
          <div className="text-3xl md:text-5xl font-bold mb-4 md:mb-10">
            GROW
          </div>
          <div className="text-lg md:mb-0 mt-0 mx-2 md:mt-10">WITH</div>
          {/* 
          <img
            src="/assets/images/footerLogo.jpeg"
            alt="HCPL Logo"
            className="md:mt-6 mt-3 mb-8 md:mx-0 mx-2 cursor-pointer "
            style={{ width: "28%" }}
          /> */}
          <img
  src="/assets/images/footerLogo.jpeg"
  alt="HCPL Logo"
  className="md:mt-6 mt-3 mb-8 md:mx-0 mx-2 cursor-pointer w-32 h-28 sm:w-30 h-26 md:w-48 h-42 lg:w-56 h-56 xl:w-64 h-56"
/>
        </div>
        <div className="flex flex-col md:flex-row text-start gap-12 md:text-center mt-12 md:mt-0">
          <div className="">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li className="hover:text-[#ef1c25] text-slate-300">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300">
                <Link href="/board">Board</Link>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300">
                <Link href="/impact">Impact</Link>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300">
                <Link href="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div className="mt-1 md:mt-0">
            <h4 className="font-semibold text-lg mb-6">Social</h4>
            <ul className="space-y-4">
              <li className="hover:text-[#ef1c25] text-slate-300 cursor-pointer">
                <a href="https://in.linkedin.com/">LinkedIn</a>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300 cursor-pointer">
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300 cursor-pointer">
                <a href="https://x.com/">Twitter</a>
              </li>
              <li className="hover:text-[#ef1c25] text-slate-300 cursor-pointer">
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="mt-1 md:mt-0">
            <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
            <ul>
              <li className="hover:text-[#ef1c25] text-slate-300">
                <Link href="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 mx-auto border-white" style={{ width: "90%" }} />
      <div className="border-t border-gray-700 text-center text-sm">
        &copy; 2024 HCPL
      </div>
    </footer>
  );
}
