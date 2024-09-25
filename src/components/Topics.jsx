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
        // {
        //   name: "Dr.  Stavros Shiaeles",
        //   affiliation: "University of Portsmouth, UK",
        // },
        // {
        //   name: "Prof. Rajendran Parthiban",
        //   affiliation: "Monash University, Australia",
        // },
        // {
        //   name: "Prof. Luca Citi",
        //   affiliation: "University of Essex , UK",
        // },
        // {
        //   name: "Prof. Noor Zaman Jhanjhi",
        //   affiliation: "Taylor's University, Malaysia",
        // },
        { name: "Dr. Rajlakshmi", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: speedometer,
      title: "Artificial Intelligence & Machine Learning",
      chairs: [
        {
          name: "Dr. Tania Banerjee",
          affiliation: "University of Houston",
        },
        { name: "Dr. Prakash Kumar", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: settings,
      title: "Big Data & Data Analytics",
      chairs: [
        // { name: "Outside", affiliation: "Outside" },
        { name: "Prof. Devpriya Soni", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: clock,
      title: "Software Development Engineering",
      chairs: [
        {
          name: "Shailendra Rathore",
          affiliation: "United Kingdom,  Abertay University, UK",
        },
        { name: "Dr. Neetu Sardana", affiliation: "JIIT Noida, India" },
      ],
    },
    {
      icon: target,
      title: "Cloud & Distributed Computing",
      chairs: [
        {
          name: "Prof. Anastasios Dagiuklas ",
          affiliation: "London South Bank University",
        },
        { name: "Dr. Parmeet Kaur", affiliation: "JIIT Noida, India" },
      ],
    },
  ];

  return (
    <section
      id="topics"
      className="p-12 bg-gradient-to-r from-indigo-500 to-indigo-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block p-4 bg-white rounded-full mb-4">
            <img src={topic} alt="Topics Icon" className="h-10 w-10" />
          </span>
          <h2 className="text-4xl font-bold text-blue-300">Tracks and Track Chair(s)</h2>
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
