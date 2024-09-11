import speaker1 from "../assets/svg/speaker-icon-2.svg";
import speaker2 from "../assets/svg/speaker-icon-2.svg";
import shekhar from "../assets/img/KN11.jpg";
import makino from "../assets/img/KN22.jpg";
import lalit from "../assets/img/KN77.jpg";
import aniket from "../assets/img/KN33.jpg";
import invited from "../assets/svg/speaker-icon-2.svg";
import ragiv from "../assets/img/KN55.jpg";
import aman from "../assets/img/KN66.png"
import kumar from "../assets/img/KN88.jpg";

const Speakers = () => {
  return (
    <section id="speakers" className="bg-gray-200 py-12">
      {/* Curved Decoration */}
      <div className="curved-decoration img-decoration img-decoration-top">
        {/* Optional SVG for decoration */}
      </div>

      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Accepted Authors Instructions */}
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              className="h-10 w-10"
              src={speaker1}
              alt="Instructions Icon"
            />
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Accepted Authors Instructions
          </h2>
          {/* Uncomment if needed */}
          {/* <p className="text-lg text-gray-700 mx-auto mb-0">TBD</p> */}
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-3xl">
            <div className="text-lg text-gray-700 mb-6">
              <ul className="list-disc list-inside">
                <li>
                  The list of accepted papers for ICI-2023{" "}
                  <a
                    href="paper_details_modified.xlsx"
                    download
                    className="text-red-600 text-xl"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  The instructions for authors of accepted papers are as
                  follows:
                  <br />
                  1. Regular papers: Maximum length of the Camera-Ready Copy
                  (CRC) will be 6 pages including references.
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/19BlJM0zKfd7XKdaPx5U_YZf91cEYIqPW/view?usp=share_link"
                    download
                    className="text-blue-600"
                  >
                    Click Here
                  </a>{" "}
                  to download the instructions file for authors of accepted
                  papers in ICI-2023.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              className="h-10 w-10"
              src={speaker2}
              alt="Speakers Icon"
            />
          </span>
          <h2 className="text-4xl font-bold mb-4">Keynote Speakers</h2>
          {/* Uncomment if needed */}
          {/* <p className="text-lg text-gray-700 mx-auto mb-0">TBD</p> */}
        </div>

        <div className="flex flex-wrap justify-around">
          {/* Speaker 1 */}
          <div className="text-center mb-8">
            <img
              src={shekhar}
              className="w-32 h-32 mb-4 rounded-full object-cover"
              alt="Prof. Shekhar Verma"
            />
            <h5 className="text-lg font-semibold">
              <a href="KN2.html" target="_blank" rel="noopener noreferrer">
                Prof. Shekhar Verma
              </a>
              <br />
              IIIT Allahabad, India
            </h5>
          </div>
          {/* Speaker 2 */}
          <div className="text-center mb-8">
            <img
              src={makino}
              className="w-32 h-32 mb-4 rounded-full"
              alt="Prof. Mitsunori Makino"
            />
            <h5 className="text-lg font-semibold">
              <a href="KN3.html" target="_blank" rel="noopener noreferrer">
                Prof. Mitsunori Makino
              </a>
              <br />
              Chuo University, Japan
            </h5>
          </div>
          {/* Speaker 3 */}
          <div className="text-center mb-8">
            <img
              src={lalit}
              className="w-32 h-32 mb-4 rounded-full"
              alt="Dr. Lalit Singh"
            />
            <h5 className="text-lg font-semibold">
              <a href="KN7.html" target="_blank" rel="noopener noreferrer">
                Dr. Lalit Singh
              </a>
              <br />
              NPCIL, BARC
            </h5>
          </div>
          {/* Speaker 4 */}
          <div className="text-center mb-8">
            <img
              src={aniket}
              className="w-32 h-32 mb-4 rounded-full"
              alt="Dr. Aniket Bera"
            />
            <h5 className="text-lg font-semibold">
              <a href="KN4.html" target="_blank" rel="noopener noreferrer">
                Dr. Aniket Bera
              </a>
              <br />
              Purdue University, USA
            </h5>
          </div>
        </div>

        {/* Invited Speakers */}
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              className="h-10 w-10"
              src={invited}
              alt="Invited Speakers Icon"
            />
          </span>
          <h2 className="text-4xl font-bold mb-4">Invited Speakers</h2>
          {/* Uncomment if needed */}
          {/* <p className="text-lg text-gray-700 mx-auto mb-0">TBD</p> */}
        </div>

        <div className="flex flex-wrap justify-around">
          {/* Invited Speaker 1 */}
          <div className="text-center mb-8">
            <img
              src={ragiv}
              className="w-32 h-32 mb-4 rounded-full"
              alt="Prof. Rajiv Gupta"
            />
            <h5 className="text-lg font-semibold leading-tight">
              <a href="KN5.html">Prof. Rajiv Gupta</a>
              <br />
              University of California, Riverside, USA
            </h5>
          </div>
          {/* Invited Speaker 2 */}
          <div className="text-center mb-8">
            <img
              src={aman}
              className="w-32 h-32 mb-4 rounded-full"
              alt="Mr. Aman Lamba"
            />
            <h5 className="text-lg font-semibold">
              <a href="KN5.html">Mr. Aman Lamba</a>
              <br />
              Renewals Expert, Cisco
            </h5>
          </div>
          {/* Invited Speaker 3 */}
          <div className="text-center mb-8">
            <img
              src={kumar}
              className="w-32 h-32 mb-4 rounded-full"
              alt="Kumaran Kandasamy"
            />
            <h5 className="text-lg font-semibold">
              <a href="KN5.html">Kumaran Kandasamy</a>
              <br />
              Director - Customer Delivery, Cisco
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
