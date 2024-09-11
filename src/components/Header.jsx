
import logo from "../assets/img/jiit.png";
const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <a className="flex items-center space-x-3" href="#wrapper">
            <img
              className="h-10"
              id="jp"
              src={logo}
              alt="ICI 2023 Logo"
            />
            <p className="text-lg font-semibold">ICI-2023</p>
          </a>
          <button className="lg:hidden block text-gray-500">
            <span className="fa fa-bars"></span>
          </button>
          <div className="hidden lg:flex space-x-6">
            <a className="text-gray-700 hover:text-blue-600" href="#wrapper">
              Home
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#schedule">
              Schedule
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#topics">
              Tracks
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#committee">
              TPC
            </a>
            <a
              className="text-gray-700 hover:text-blue-600"
              href="#proceedings"
            >
              Proceedings
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#papers">
              Call for Papers
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#speakers">
              Authors Guidelines
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#speaker">
              Keynote Speakers
            </a>
            <a
              className="text-gray-700 hover:text-blue-600"
              href="#registration"
            >
              Registration
            </a>
            <a
              className="text-gray-700 hover:text-blue-600"
              href="./ici2022com/oldici.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Previous Year Conference
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#about">
              About
            </a>
            <a className="text-gray-700 hover:text-blue-600" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Header;
