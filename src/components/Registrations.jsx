import speaker from "../assets/svg/speaker-icon-2.svg";
const Registrations = () => {
  return (
    <section
      id="registration"
      className="relative bg-gradient-to-r from-indigo-500 to-indigo-900 py-12"
    >
      {/* Container */}
      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-white rounded-full mb-4">
            <img className="h-12 w-12" src={speaker} alt="Registration Icon" />
          </span>
          <h2 className="text-4xl font-bold mb-4 text-blue-300">
            Registration
          </h2>
          {/* <p className="text-red-600 text-2xl mb-6">REGISTRATION CLOSED</p> */}
          <p className="text-red-600 text-2xl mb-6">To Be Announced</p>
        </div>

        {/* Registration Table */}
        {/* <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-transparent text-white border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">CATEGORY</th>
                <th className="border px-4 py-2 text-center" colSpan="2">
                  INR
                </th>
                <th className="border px-4 py-2 text-center" colSpan="2">
                  USD
                </th>
              </tr>
              <tr>
                <td></td>
                <td className="border px-4 py-2 text-center">
                  NON-IEEE member
                </td>
                <td className="border px-4 py-2 text-center">
                  IEEE member
                  <br />
                  (After 20% discount)
                </td>
                <td className="border px-4 py-2 text-center">
                  NON-IEEE member
                </td>
                <td className="border px-4 py-2 text-center">
                  IEEE member
                  <br />
                  (After 20% discount)
                </td>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <th className="border px-4 py-2">AUTHOR</th>
                <td className="border px-4 py-2 text-center" colSpan="4"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>PROFESSIONALS (Virtual Mode)</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">8,000</td>
                <td className="border px-4 py-2 text-center">6,400</td>
                <td className="border px-4 py-2 text-center">US$ 290</td>
                <td className="border px-4 py-2 text-center">US$ 230</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>FULL TIME STUDENT</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">6,000</td>
                <td className="border px-4 py-2 text-center">4,800</td>
                <td className="border px-4 py-2 text-center">US$ 175</td>
                <td className="border px-4 py-2 text-center">US$ 140</td>
              </tr>
              
              <tr>
                <th className="border px-4 py-2" colSpan="5">
                  CO-AUTHOR (If one author has been registered & other
                  Co-Authors also wants to register)
                </th>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>PROFESSIONALS (Virtual Mode)</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">6,400</td>
                <td className="border px-4 py-2 text-center">5,120</td>
                <td className="border px-4 py-2 text-center">US$ 230</td>
                <td className="border px-4 py-2 text-center">US$ 180</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>FULL TIME STUDENT</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">4,800</td>
                <td className="border px-4 py-2 text-center">3,800</td>
                <td className="border px-4 py-2 text-center">US$ 140</td>
                <td className="border px-4 py-2 text-center">US$ 110</td>
              </tr>
              
              <tr>
                <th className="border px-4 py-2" colSpan="5">
                  NON-AUTHOR PARTICIPANTS
                </th>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>PROFESSIONALS (3 DAYS Registration)</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">6,000</td>
                <td className="border px-4 py-2 text-center">4,800</td>
                <td className="border px-4 py-2 text-center">US$ 175</td>
                <td className="border px-4 py-2 text-center">US$ 140</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>PROFESSIONALS (1 DAY Registration)</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">2,500</td>
                <td className="border px-4 py-2 text-center">2,000</td>
                <td className="border px-4 py-2 text-center">US$ 75</td>
                <td className="border px-4 py-2 text-center">US$ 60</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>FULL-TIME STUDENT (3 DAYS Registration)</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">2,500</td>
                <td className="border px-4 py-2 text-center">2,000</td>
                <td className="border px-4 py-2 text-center">US$ 75</td>
                <td className="border px-4 py-2 text-center">US$ 60</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <ul>
                    <li>FULL-TIME STUDENT (1 DAY Registration)</li>
                  </ul>
                </td>
                <td className="border px-4 py-2 text-center">1,200</td>
                <td className="border px-4 py-2 text-center">900</td>
                <td className="border px-4 py-2 text-center">US$ 35</td>
                <td className="border px-4 py-2 text-center">US$ 30</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="text-white">
          <ol className="list-decimal pl-6">
            <li>
              For each accepted paper, it is mandatory for at least one author
              to register their paper at the conference.
            </li>
            <li>
              A paper must be presented by a registered participant (either
              registered as an author or co-author).
            </li>
            <li>
              If one author has 2 accepted papers, then the fee payment for one
              paper covers the registration of both papers.
            </li>
            <li>
              In case one author/co-author is registering for more than 2
              papers, then for the 3rd paper, only a 2000 INR fee will be
              charged. For the 4th paper, fresh registration has to be done.
            </li>
          </ol>
        </div> */}
      </div>
    </section>
  );
};

export default Registrations;
