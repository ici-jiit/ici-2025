import speaker from "../assets/svg/speaker-icon-2.svg";

const CallForPapers = () => {
  return (
    <section
      id="papers"
      className="relative bg-gradient-to-r from-indigo-500 to-indigo-900 py-12"
    >
      {/* Curved Decoration */}
      <div className="curved-decoration img-decoration img-decoration-top">
      </div>

      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Row for Title */}
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-white rounded-full mb-4">
            <img className="h-10 w-10" src={speaker} alt="Papers Icon" />
          </span>
          <h2 className="text-4xl font-bold mb-4 text-blue-300">Call for Papers</h2>
          {/* Uncomment if needed */}
          {/* <p className="text-lg text-gray-700 mx-auto mb-0"><a href="CFP_ICI 2023.pdf" download className="text-blue-600 hover:underline">CFP attached here</a></p> */}
        </div>

        {/* Guidelines Section */}
        <div className="flex justify-center">
          <div className="w-full px-12">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-100 mb-6">
                Authors interested in presenting manuscripts that demonstrate
                original unpublished research in the areas of Informatics are
                invited to submit their Full Papers. Informatics aspects have
                been organized around five different thematic tracks:
              </p>
              <ul className="list-disc list-inside text-left mx-auto mb-6 text-white">
                <li className=" py-2">Track-1: Artificial Intelligence & Machine Learning</li>
                <li className=" py-2">Track-2: IoT, Smart, and Embedded Systems</li>
                <li className=" py-2">Track-3: Cloud & Distributed Computing</li>
                <li className=" py-2">Track-4: Big Data & Data Analytics</li>
                <li className=" py-2">Track-5: Software Development Engineering</li>
              </ul>
              <p className="text-lg ">
                <a
                  href="CFP_ICI_2023.pdf"
                  download
                  className="text-blue-300 hover:underline"
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
