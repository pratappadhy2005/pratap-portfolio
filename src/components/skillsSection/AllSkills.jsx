import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { TbBrandTerraform } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  {
    skill: "JAVA",
    icon: FaJava,
  },
  {
    skill: "Spring Boot",
    icon: SiSpring,
  },
  {
    skill: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Azure",
    icon: VscAzureDevops,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "Kafka",
    icon: SiApachekafka,
  },
  {
    skill: "Terraform",
    icon: TbBrandTerraform,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Gen AI",
    icon: GiArtificialIntelligence,
  }
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;