import speaker from "../assets/svg/speaker-icon-2.svg";

const CallForPapers = () => {
  return (
    <section id="papers" className="relative bg-gray-100 py-12">
      {/* Curved Decoration */}
      <div className="curved-decoration img-decoration img-decoration-top">
        {/* Optional SVG for decoration */}
        {/* <svg version="1.1" className="bg-white-svg" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2560 221" enableBackground="new 0 0 2560 221" xmlSpace="preserve">
          <polygon points="0,0 2560,0 0,221 " />
        </svg> */}
      </div>

      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Row for Title */}
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              className="h-10 w-10"
              src={speaker}
              alt="Papers Icon"
            />
          </span>
          <h2 className="text-4xl font-bold mb-4">Call for Papers</h2>
          {/* Uncomment if needed */}
          {/* <p className="text-lg text-gray-700 mx-auto mb-0"><a href="CFP_ICI 2023.pdf" download className="text-blue-600 hover:underline">CFP attached here</a></p> */}
        </div>

        {/* Guidelines Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 mb-6">
                Authors interested in presenting manuscripts that demonstrate
                original unpublished research in the areas of Informatics are
                invited to submit their Full Papers. Informatics aspects have
                been organized around five different thematic tracks:
              </p>
              <ul className="list-disc list-inside text-left mx-auto mb-6">
                <li>Track-1: Artificial Intelligence & Machine Learning</li>
                <li>Track-2: IoT, Smart, and Embedded Systems</li>
                <li>Track-3: Cloud & Distributed Computing</li>
                <li>Track-4: Big Data & Data Analytics</li>
                <li>Track-5: Software Development Engineering</li>
              </ul>
              <p className="text-lg text-gray-700">
                <a
                  href="CFP_ICI_2023.pdf"
                  download
                  className="text-blue-600 hover:underline"
                >
                  Click here for ICI CFP 2023
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
