import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Dynamic and adaptable IT professional with 4 years of diverse experience
        spanning software development and IT administration. Proficient in
        building and maintaining robust, user-focused web applications using
        modern frameworks like React.js, Next.js, and Redux Toolkit.
        Demonstrates expertise in creating responsive designs, optimizing
        performance, integrating APIs, and managing collaborative workflows
        through version control. Equipped with foundational knowledge in IT
        support, including system administration and basic networking,
        complemented by a proactive approach to learning and mastering new
        technologies. A results-oriented team player eager to deliver innovative
        solutions and excel in fast-paced, technology-driven environments.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
