
import speaker from "../assets/svg/speaker-icon-2.svg";
import speaker2 from "../assets/svg/speaker-icon-2.svg";
const CommitteeSection = () => {
  const committeeData = [
    {
      title: "Chief Patron",
      members: [
        { name: "Sh. Manoj Gaur", affiliation: "Jaypee Group, India" },
        {
          name: "Prof. S.C. Saxena",
          affiliation: "Pro-chancellor, JIIT Noida, India",
        },
      ],
    },
    {
      title: "Patron",
      members: [
        {
          name: "Prof. Bodh Raj Mehta",
          affiliation:
            "Vice-Chancellor and Director (R.I.D.E.), JIIT Noida, India",
        },
      ],
    },
    {
      title: "General chair(s)",
      members: [
        {
          name: "Prof. Sartaj Sahni",
          affiliation: "Fellow IEEE & Fellow ACM, University of Florida, USA",
        },
        {
          name: "Prof. Vikas Saxena",
          affiliation: "SMIEEE, JIIT Noida, India",
        },
      ],
    },
    {
      title: "Advisory Committee",
      members: [
        {
          name: "Prof. D.K. Rai",
          affiliation: "Vice Chancellor, JUET - Guna, India",
        },
        { name: "Dr. Satish K. Singh", affiliation: "IIIT-Allahabad" },
        { name: "Prof. Asheesh K. Singh", affiliation: "MNNIT, Allahabad" },
      ],
    },
    {
      title: "Program Chair",
      members: [
        {
          name: "Prof. Sandeep Kumar Singh",
          affiliation: "MIEEE, JIIT Noida, India",
        },
      ],
    },
    {
      title: "Organizing Secretary(s)",
      members: [
        { name: "Prof. Charu", affiliation: "SMIEEE, JIIT Noida, India" },
        { name: "Prof. Chetna Gupta", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Publication Chair(s)",
      members: [
        { name: "Prof. Anuja Arora", affiliation: "JIIT Noida, India" },
        { name: "Prof. Devpriya Soni", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Publicity Chair(s)",
      members: [
        { name: "Dr. Mukesh Saraswat", affiliation: "JIIT Noida, India" },
        { name: "Dr. Manju", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Tutorial and Workshop Chair(s)",
      members: [
        { name: "Dr. Raju Pal", affiliation: "JIIT Noida, India" },
        { name: "Dr. Anubhuti Mohindra", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Registration Chair",
      members: [
        { name: "Dr. Himani Bansal", affiliation: "SMIEEE, JIIT Noida, India" },
      ],
    },
    {
      title: "Web Administration",
      members: [
        { name: "Dr. Pulkit Mehndiratta", affiliation: "JIIT Noida, India" },
      ],
    },
  ];

  return (
    <section id="committee" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              src={speaker}
              alt="Committee Icon"
              className="h-10 w-10"
            />
          </span>
          <h2 className="text-4xl font-bold">Organizing Committee</h2>
        </div>

        {committeeData.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-white shadow-lg rounded-lg p-6">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              </div>
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.members.map((member, idx) => (
                  <p key={idx} className="text-gray-700">
                    <a href="#" className="text-blue-600 hover:underline">
                      {member.name}
                    </a>
                    , {member.affiliation}
                  </p>
                ))}
              </div>
            </div>
            {index !== committeeData.length - 1 && <hr className="my-6" />}
          </div>
        ))}

        <div className="text-center mt-12">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              src={speaker2}
              alt="Program Committee Icon"
              className="h-10 w-10"
            />
          </span>
          <h2 className="text-4xl font-bold">Technical Program Committee</h2>
        </div>

        {/* Row for Technical Program Committee Download */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-white shadow-lg rounded-lg p-6 my-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">Know More</h3>
          </div>
          <div className="col-span-2">
            <p className="text-gray-700">
              <a
                href="TPCICIFINAL.pdf"
                download
                className="text-blue-600 hover:underline"
              >
                Click here for TPC List ICI 2023
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Curved Decoration */}
      <div className="curved-decoration">
        <svg
          version="1.1"
          className="bg-third-svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 2560 221"
          xmlSpace="preserve"
        >
          <polygon points="2560,221 0,221 2560,0 "></polygon>
        </svg>
      </div>
    </section>
  );
};

export default CommitteeSection;
