
import speaker from "../assets/svg/speaker-icon-2.svg";
import speaker2 from "../assets/svg/speaker-icon-2.svg";
const CommitteeSection = () => {
  const committeeData = [
    {
      title: "Chief Patron",
      members: [
        {
          name: "Sh. Manoj Gaur",
          affiliation: "Jaypee Group, India",
          url: "https://www.jiit.ac.in/message-chancellor",
        },
        {
          name: "Prof. S.C. Saxena",
          affiliation: "Pro-chancellor, JIIT Noida, India",
          url: "https://www.jiit.ac.in/pro-chancellor",
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
          url: "https://www.jiit.ac.in/vice-chancellor",
        },
      ],
    },
    {
      title: "General chair",
      members: [
        {
          name: "Prof. Vikas Saxena",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/prof-vikas-saxena-0",
        },
      ],
    },
    {
      title: "Advisory Committee",
      members: [
        {
          name: "Prof. D.K. Rai",
          affiliation: "Vice Chancellor, JUET - Guna, India",
          url: "https://www.juet.ac.in/Profile/VCProfile.php",
        },
        {
          name: "Dr. Satish K. Singh",
          affiliation: "IIIT-Allahabad",
          url: "https://cvbl.iiita.ac.in/sks/",
        },
        {
          name: "Prof. Asheesh K. Singh",
          affiliation: "MNNIT, Allahabad",
          url: "https://mnnit.ac.in/profile/asheesh",
        },
      ],
    },
    {
      title: "Program Chair",
      members: [
        {
          name: "Prof. Sandeep Kumar Singh",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/prof-sandeep-kumar-singh",
        },
        {
          name: "Prof. Chetna Gupta",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/prof-chetna-gupta",
        },
      ],
    },
    {
      title: "Organizing Secretary(s)",
      members: [
        {
          name: "Prof. Krishna Asawa",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/prof-krishna-asawa",
        },
        {
          name: "Prof. Shikha Mehta",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/prof-shikha-mehta",
        },
      ],
    },
    {
      title: "Publication Chair(s)",
      members: [
        {
          name: "Dr. Mukta Goyal",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-mukta-goyal",
        },
        {
          name: "Dr. Neeraj Jain",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-neeraj-jain",
        },
      ],
    },
    {
      title: "Publicity Chair(s)",
      members: [
        {
          name: "Dr. Mukesh Saraswat",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-mukta-goyal",
        },
        {
          name: "Dr Ankit Vidyarathi",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-ankit-vidyarthi",
        },
        {
          name: "Dr Imran Rasheed",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-imran-rasheed",
        },
        {
          name: "Ms Neetu Singh",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/ms-neetu-singh",
        },
        {
          name: "Ms Jyoti",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/ms-jyoti-chauhan",
        },
        {
          name: "Ms Shagun Gupta",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/shagun-gupta",
        },
        {
          name: "Ms Preeti Mittal",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/ms-preeti-mittal",
        },
      ],
    },
    {
      title: "Tutorial and Workshop Chair(s)",
      members: [
        {
          name: "Dr. Kedar Nath",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-kedar-nath-singh",
        },
        {
          name: "Dr.  Arti Jain",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-arti-jain",
        },
      ],
    },
    {
      title: "Registration Chair",
      members: [
        {
          name: "Dr. Himani Bansal",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-himani-bansal",
        },
        {
          name: "Dr Shelendra Pal",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-shelendra-pal",
        },
      ],
    },
    {
      title: "Web Administration",
      members: [
        {
          name: "Dr. Pulkit Mehndiratta",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-pulkit-mehndiratta",
        },
        {
          name: "Dr. Vartika Puri",
          affiliation: "JIIT Noida, India",
          url: "https://www.jiit.ac.in/dr-vartika-puri",
        },
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
                    <a
                      href={member.url}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
              <a href="/Reviewer_List_ICI2025.pdf" download className="text-blue-600 hover:underline">
                Click here for TPC List ICI 2025
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
