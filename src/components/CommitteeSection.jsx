
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
      title: "General chair",
      members: [
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
        {
          name: "Prof. Chetna Gupta",
          affiliation: "JIIT Noida, India",
        },
      ],
    },
    {
      title: "Organizing Secretary(s)",
      members: [
        {
          name: "Prof. Krishna Asawa",
          affiliation: "JIIT Noida, India",
        },
        { name: "Prof. Shikha Mehta", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Publication Chair(s)",
      members: [
        { name: "Dr. Mukta Goyal", affiliation: "JIIT Noida, India" },
        { name: "Dr. Neeraj Jain", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Publicity Chair(s)",
      members: [
        { name: "Dr. Mukesh Saraswat", affiliation: "JIIT Noida, India" },
        { name: "Dr Ankit Vidyarathi", affiliation: "JIIT Noida, India" },
        { name: "Dr Imran Rasheed", affiliation: "JIIT Noida, India" },
        { name: "Ms Neetu Singh", affiliation: "JIIT Noida, India" },
        { name: "Ms Jyoti ", affiliation: "JIIT Noida, India" },
        { name: "Ms Shagun Gupta", affiliation: "JIIT Noida, India" },
        { name: "Ms Preeti Mittal", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Tutorial and Workshop Chair(s)",
      members: [
        { name: "Dr. Kedar Nath", affiliation: "JIIT Noida, India" },
        { name: "Dr.  Arti Jain", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Registration Chair",
      members: [
        { name: "Dr. Himani Bansal", affiliation: "SMIEEE, JIIT Noida, India" },
        { name: "Dr Shelendra Pal", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      title: "Web Administration",
      members: [
        { name: "Dr. Pulkit Mehndiratta", affiliation: "JIIT Noida, India" },
        { name: "Dr. Vartika Puri", affiliation: "JIIT Noida, India" },
      ],
    },
  ];

  return (
    <section id="committee" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block p-4 bg-white border-2 border-blue-300 rounded-full mb-4">
            <img src={speaker} alt="Committee Icon" className="h-10 w-10" />
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
          <span className="inline-block p-4 bg-white border-2 border-blue-300 rounded-full mb-4">
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
    </section>
  );
};

export default CommitteeSection;
