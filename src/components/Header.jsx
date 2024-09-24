
import logo from "../assets/img/jiit-bg.png";
import { useEffect } from "react";
const Header = () => {
    useEffect(() => {
      const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust the value based on the height of your navbar
            behavior: "smooth",
          });
        }
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
    <header className="bg-gradient-to-r from-indigo-500 to-indigo-900 shadow-lg fixed w-full">
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <a className="flex items-center space-x-3" href="#wrapper">
            <img className="h-12" id="jp" src={logo} alt="ICI 2024 Logo" />
            <p className="text-lg font-semibold text-white">ICI-2024</p>
          </a>
          <button className="lg:hidden block text-gray-500">
            <span className="fa fa-bars"></span>
          </button>
          <div className="hidden lg:flex space-x-6">
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
      </div>
    </header>
  );
};


export default Header;
