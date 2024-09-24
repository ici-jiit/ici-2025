import schedule from "../assets/svg/schedule-icon.svg";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="bg-gray-200 px-24 py-12">
      <div className="container mx-auto text-center">
        <div className="mb-5 pb-5">
          <span className="inline-block p-4 mb-3 rounded-full bg-white border-2 border-blue-300">
            <img src={schedule} alt="Schedule Icon" className="h-10 w-10" />
          </span>
          <h2 className="text-4xl font-bold">Conference Schedule</h2>
          <p className="mx-auto mt-2 text-lg leading-relaxed">
            We are very excited about the program being planned for ICI-2023
            this winter in <br /> Jaypee Institute of Information Technology,
            Noida.
          </p>
        </div>

        <img
          src="./new.JPG"
          alt="Blinking Image"
          className="mx-auto animate-pulse"
        />

        <div className="mt-5 space-y-4">
          <div className="text-xl text-red-600">
            <a href="Calender_ICI_23.pdf" download>
              Click here for ICI 2023 Conference Calendar
            </a>
          </div>

          <div className="text-xl text-red-600">
            <a href="PPS_ICI_23.pdf" download>
              Click here for ICI 2023 Paper Presentation Schedule
            </a>
          </div>

          <div className="mt-8 space-y-8 ">
            <ScheduleItem
              title="Conference Date"
              date="6th-8th November, 2025"
            />
            <ScheduleItem
              title="Paper Submission"
              date="25th June 2025 - 25th July, 2025 (hard deadline)"
            />
            <ScheduleItem
              title="Notification of acceptance"
              date="31st August, 2025"
            />
            <ScheduleItem
              title="Final Paper Submission"
              date="25th September, 2025"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ScheduleItem = ({ title, date }) => (
  <div className="flex justify-between items-center p-4 bg-white shadow-lg rounded-md">
    <div className="font-bold text-lg">
      <a href="#" className="text-blue-600 hover:underline">
        {title}
      </a>
    </div>
    <div className="text-gray-700">{date}</div>
  </div>
);

export default ScheduleSection;