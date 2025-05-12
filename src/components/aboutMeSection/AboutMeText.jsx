import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Pratap, a Results-oriented Java Tech Lead and People Leader with a proven track record of 17 years in the IT industry.
        Specializing in Java development, I have successfully led and delivered projects in diverse domains,
        demonstrating expertise in a wide range of technologies and frameworks,
        including AWS, Azure, Node JS, Microservices, Airflow, Kafka, Spring Boot, Docker, Docker Swarm, Kubernetes, Helm, REST, SOAP, Terraform,
        Kafka, and Modern Javascript.
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
