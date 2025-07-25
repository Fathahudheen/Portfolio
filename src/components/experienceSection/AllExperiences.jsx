import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "IT Support and Admin Assistant",
    company: "Akbar Travels Pvt Ltd ",
    date: "Jul 2020 - Aug 2022",
    responsibilities: [
      "Provided essential IT support, addressing daily technical issues and ensuring smooth system operations.",
      "Performed basic networking activities, including setting up connections and resolving connectivity issues.",
      "Delivered reliable technical assistance to colleagues, fostering a productive and efficient workplace environment.",
    ],
  },
  {
    job: "Fullstack Developer",
    company: "Fullstack Developer Academy pvt ltd",
    date: "Sep 2022 - Apr 2023",
    responsibilities: [
      "Built a React.js Academic Management System with six user roles.",
      "Participating in large scale application.",
      "Designed responsive, accessible, and high-performance UI components.",
      "Handled Git version control for a team, including reviews and merge conflict resolution.",
    ],
  },
  {
    job: "Front End developer",
    company: "Quadleo techno solutions Pvt ltd",
    date: "Nov 2024 - Jan - 2025",
    responsibilities: [
      "Built responsive UIs with React.js, Bootstrap, and SCSS.",
      "Used Redux for efficient state management.",
      "Integrated Razorpay and Google Maps APIs. ",
      "Worked with teams to deliver clean, reusable code. ",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
