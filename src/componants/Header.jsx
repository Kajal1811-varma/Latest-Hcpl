"use client"; // Add this directive at the top of the file

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const headerNavLinks = [
    { href: "/about", title: "About Us" },
    { href: "/board", title: "Board" },
    { href: "/projects", title: "Projects" },
    { href: "/impact", title: "Impact" },
    { href: "/career", title: "Career" },
    { href: "/contactus", title: "Contact Us" },
  ];

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const navLinkStyle = (href) => ({
    fontSize: '18px',
    fontWeight: '500',
    color: pathname === href ? '#ef1c25' : '#1a202c',
    textDecoration: 'none',
    marginLeft: '16px',
    display: 'inline-block',
  });

  const mobileButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    display: isMobileView ? 'flex' : 'none',
  };

  const mobileMenuStyle = {
    display: isMobileNavOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 0',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const NavDiv = {
    alignItems: 'center',
    gap: '16px',
    fontSize: '18px',
    display: isMobileView ? 'none' : 'flex',
  };

  return (
    <header className="font-serif" style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px 0' }}>
      <div style={containerStyle}>
        <div>
          <Link href="/" aria-label="Home">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginLeft: '12px' }}>
                <Image
                  src="/assets/images/HcplLogo.png"
                  alt="Logo"
                  width={130}
                  height={100}
                />
              </div>
            </div>
          </Link>
        </div>
        <div style={NavDiv}>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <span style={navLinkStyle(link.href)}>{link.title}</span>
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          style={mobileButtonStyle}
        >
          <svg
            style={{ height: '24px', width: '24px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div style={mobileMenuStyle}>
        {headerNavLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            <span style={navLinkStyle(link.href)}>{link.title}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
