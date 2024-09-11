
import email from "../assets/svg/email-icon.svg"
import contact from "../assets/svg/contact-icon.svg";
import location from "../assets/svg/location-icon.svg"
const Footer = () => {
  return (
    <>
      <footer className="bg-primary-3 py-12">
        <div className="container mx-auto px-4">
          {/* Contact Details Row */}
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="flex items-start">
                <img
                  className="w-12 h-12 mr-4"
                  src={email}
                  alt="Email Icon"
                />
                <div>
                  <h4
                    className="text-white text-lg font-semibold mb-2"
                    id="contact"
                  >
                    Contact Us
                  </h4>
                  <p className="text-light text-base">
                    Prof. Sandeep Kumar Singh
                    <br />
                    Department of Computer Science Engineering & IT
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="flex items-start">
                <img
                  className="w-12 h-12 mr-4"
                  src={contact}
                  alt="Contact Icon"
                />
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">
                    Phone:
                  </h4>
                  <p className="text-light text-base">0120-24000973 Ext- 259</p>
                  <h4 className="text-white text-lg font-semibold mb-2">
                    Email:
                  </h4>
                  <p className="text-light text-base">
                    sandeepk.singh@jiit.ac.in
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="flex items-start">
                <img
                  className="w-12 h-12 mr-4"
                  src={location}
                  alt="Location Icon"
                />
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">
                    Address
                  </h4>
                  <p className="text-light text-base">
                    Jaypee Institute of Information Technology,
                    <br />
                    A-10, Sector 62
                    <br />
                    Noida-201309, Uttar Pradesh, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center mb-6">
            <ul className="flex space-x-4">
              <li>
                <a
                  className="text-white hover:text-gray-300"
                  href="https://www.facebook.com/jiitofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-300"
                  href="http://www.jiit.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-google"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-300"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Attribution */}
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm mb-0">
              By{" "}
              <a
                className="text-light hover:text-gray-300"
                href="https://dscjiit.live/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JIIT Admin
                (PA-AC)
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a
        className="scroll-to-top fixed bottom-4 right-4 bg-primary-3 text-white rounded-full p-3 shadow-lg hover:bg-primary-4 transition-transform transform hover:scale-110"
        href="#wrapper"
      >
        <span className="fas fa-arrow-up"></span>
      </a>
    </>
  );
};

export default Footer;
