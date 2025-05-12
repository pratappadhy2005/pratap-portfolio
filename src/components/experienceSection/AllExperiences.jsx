import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Engineering Technical Lead",
    company: "IAG",
    date: "2023 - Present",
    responsibilities: [
      "Leading High-Performing Teams.",
      "Extensive experience in Java, Spring Boot, and Microservices.",
      "Experience with Java, focus areas (REST APIs, microservices etc).",
    ],
  },
  {
    job: "Engineering Technical Lead",
    company: "NAB",
    date: "2022 - 2023",
    responsibilities: [
      "Handled around 20+ Spring Boot Microservices.",
      "Led the migration of legacy systems to modern cloud-based architectures.",
      "Managed a team of 10+ engineers.",
    ],
  },
  {
    job: "Solution Architect",
    company: "Intershop Communications",
    date: "2016 - 2022",
    responsibilities: [
      "Led the development of a new product for a major client.",
      "Solved complex technical challenges and provided innovative solutions.",
      "Guided the team in adopting best practices for coding and project management.",
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
