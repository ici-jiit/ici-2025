import ideaIcon from "../assets/svg/idea-icon.svg"
import speedometer from "../assets/svg/speedometer-icon.svg"
import settings from "../assets/svg/settings-icon.svg"
import clock from "../assets/svg/clock-icon.svg";
import target from "../assets/svg/target-icon.svg";
import topic from "../assets/svg/topic-icon.svg";
const Topics = () => {
  const topics = [
    {
      icon: ideaIcon,
      title: "IoT, Smart and Embedded Systems",
      chairs: [
        { name: "Prof. Vinay Chamola", affiliation: "BITS, Pilani, India" },
        { name: "Dr. Parmeet Kaur", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: speedometer,
      title: "Artificial Intelligence & Machine Learning",
      chairs: [
        {
          name: "Prof. Pradeep Chowriappa",
          affiliation: "Louisiana Tech University, LA, USA",
        },
        { name: "Prof. Krishna Asawa", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: settings,
      title: "Big Data & Data Analytics",
      chairs: [
        { name: "Dr. Somdeb Majumdar", affiliation: "Intel AI Labs, USA" },
        { name: "Dr. Adwitiya Sinha", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: clock,
      title: "Software Development Engineering",
      chairs: [
        {
          name: "Prof. Prabhat Kumar Mahanti",
          affiliation: "University of New Brunswick, Canada",
        },
        { name: "Prof. Neetu Sardana", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: target,
      title: "Cloud & Distributed Computing",
      chairs: [
        {
          name: "Prof. Hema Banati",
          affiliation: "University of Delhi, Delhi, India",
        },
        { name: "Prof. Shikha Mehta", affiliation: "JIIT Noida, India" },
      ],
    },
  ];

  return (
    <section id="topics" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block p-4 bg-gray-800 rounded-full mb-4">
            <img
              src={topic}
              alt="Topics Icon"
              className="h-10 w-10"
            />
          </span>
          <h2 className="text-4xl font-bold">Tracks and Track Chair(s)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <img
                  src={topic.icon}
                  alt={topic.title}
                  className="h-12 w-12 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                {topic.title}
              </h3>
              <div className="mt-4">
                {topic.chairs.map((chair, idx) => (
                  <p key={idx} className="text-gray-600 text-center">
                    {chair.name}, {chair.affiliation}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
