import 'bootstrap/dist/css/bootstrap.min.css';
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componants/Header";
import Footer from "@/componants/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HCPL",
  description: "Hcpl next app",
  icons:{
    icon:['/favicon-32x32.png'],
  apple:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-white">
        <div className="flex h-screen flex-col font-sans">
          <div className="relative">
            <div className="fixed z-10 w-full">
              <Header />
            </div>
          </div>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
