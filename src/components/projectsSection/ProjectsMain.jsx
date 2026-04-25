import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Enterprise Commercial Enablement",
    client: "IAG",
    year: "Jan 2023 – Present",
    align: "right",
    image: "./images/website-img-1.jpg",
    link: "#",
    description:
      "A large-scale digital transformation program for IAG's Commercial Line portfolio, digitalising 5 brands and 20+ insurance products across multiple Lines of Business to deliver a seamless, digital-first experience for customers and internal teams.",
    tech: ["Java 17", "Spring Boot", "Kubernetes", "Docker", "Kafka", "APIGEE", "Prometheus", "Grafana", "Bamboo"],
    impact:
      "Reduced manual interventions across all product lines; positioned IAG as a leader in digital insurance innovation.",
  },
  {
    name: "MS MQ Kafka Adapter",
    client: "National Australia Bank",
    year: "Aug 2021 – Jan 2023",
    align: "left",
    image: "./images/website-img-4.jpg",
    link: "#",
    description:
      "A high-throughput integration microservice that ingests ~22 million daily debit/credit transactions from IBM MQ via a custom Spring Batch JMS listener, enriches them with account details, and publishes Kafka events to downstream systems.",
    tech: ["Spring Boot", "Spring JMS", "Apache Kafka", "IBM MQ", "AVRO", "Jenkins", "JProfiler"],
    impact:
      "Resolved critical performance bottleneck handling 22M daily transactions; custom batch JMS listener filled a gap in Spring's out-of-the-box capabilities.",
  },
  {
    name: "MS Balance Notification",
    client: "National Australia Bank",
    year: "Aug 2021 – Jan 2023",
    align: "right",
    image: "./images/website-img-2.webp",
    link: "#",
    description:
      "A real-time Kafka-driven notification microservice that monitors customer accounts and triggers personalised alerts for low-balance and overdrawn events, reducing call-centre volume for balance-related queries.",
    tech: ["Spring Boot", "Apache Kafka", "Redis Cache", "Microservices", "AVRO", "Jenkins"],
    impact:
      "Significantly reduced call-centre volume; implemented rate-limiter capping at 90 TPS to protect downstream systems; Redis cache prevents duplicate notifications within 7 days.",
  },
  {
    name: "Australia Post Online Shop",
    client: "Australia Post",
    year: "Nov 2015 – Aug 2021",
    align: "left",
    image: "./images/website-img-3.jpg",
    link: "https://auspost.com.au/shop",
    description:
      "One of Australia's largest national eCommerce platforms, supporting Australia Post's full digital retail experience across desktop and mobile — including product listing, intelligent search, cart, and a secure multi-step checkout.",
    tech: ["Intershop 7.10", "Angular", "jQuery", "Spring Boot", "Docker", "Microservices", "PayPal", "SecurePay", "AWS S3"],
    impact:
      "Delivered a scalable, PCI-compliant eCommerce platform for a nationally trusted brand; implemented CI/CD pipelines reducing deployment time across high-traffic production environments.",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              client={project.client}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              description={project.description}
              tech={project.tech}
              impact={project.impact}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
