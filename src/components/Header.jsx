import logo from "../assets/img/jiit-bg.png";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust based on navbar height
          behavior: "smooth",
        });
      }

      // Close the mobile menu after clicking a link
      setIsMenuOpen(false);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-indigo-900 shadow-lg fixed w-full z-50">
      <div className="">
        <nav className="flex justify-evenly items-center w-full mx-auto py-4 px-6">
          <a className="flex items-center px-2" href="#wrapper">
            <img className="h-12" id="jp" src={logo} alt="ICI 2025 Logo" />
            <p className="text-lg font-semibold text-white pl-2">ICI-2025</p>
          </a>
          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden block text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMenu />
          </button>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            <a className="text-white hover:text-blue-300" href="#wrapper">
              Home
            </a>
            <a className="text-white hover:text-blue-300" href="#schedule">
              Schedule
            </a>
            <a className="text-white hover:text-blue-300" href="#topics">
              Tracks
            </a>
            <a className="text-white hover:text-blue-300" href="#committee">
              TPC
            </a>
            <a className="text-white hover:text-blue-300" href="">
              Proceedings
            </a>
            <a className="text-white hover:text-blue-300" href="#papers">
              Call for Papers
            </a>
            <a className="text-white hover:text-blue-300" href="#speakers">
              Authors Guidelines
            </a>
            <a className="text-white hover:text-blue-300" href="#speakers">
              Keynote Speakers
            </a>
            <a className="text-white hover:text-blue-300" href="#registration">
              Registration
            </a>
            <a
              className="text-white hover:text-blue-300"
              href="./ici2022com/oldici.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Previous Year Conference
            </a>
            <a className="text-white hover:text-blue-300" href="#about">
              About
            </a>
            <a className="text-white hover:text-blue-300" href="#contact">
              Contact
            </a>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-transparent text-white p-4 rounded-lg space-y-4">
            <a
              className="block hover:text-blue-300"
              href="#wrapper"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="block hover:text-blue-300"
              href="#schedule"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </a>
            <a
              className="block hover:text-blue-300"
              href="#topics"
              onClick={() => setIsMenuOpen(false)}
            >
              Tracks
            </a>
            <a
              className="block hover:text-blue-300"
              href="#committee"
              onClick={() => setIsMenuOpen(false)}
            >
              TPC
            </a>
            <a
              className="block hover:text-blue-300"
              href="#papers"
              onClick={() => setIsMenuOpen(false)}
            >
              Call for Papers
            </a>
            <a
              className="block hover:text-blue-300"
              href="#speakers"
              onClick={() => setIsMenuOpen(false)}
            >
              Authors Guidelines
            </a>
            <a
              className="block hover:text-blue-300"
              href="#speakers"
              onClick={() => setIsMenuOpen(false)}
            >
              Keynote Speakers
            </a>
            <a
              className="block hover:text-blue-300"
              href="#registration"
              onClick={() => setIsMenuOpen(false)}
            >
              Registration
            </a>
            <a
              className="block hover:text-blue-300"
              href="./ici2022com/oldici.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Previous Year Conference
            </a>
            <a
              className="block hover:text-blue-300"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              className="block hover:text-blue-300"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
