import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="mb-4">
        I&apos;m Pratap — an Engineering Lead at IAG with 18+ years of experience in software engineering and architecture.
        I specialise in designing and delivering high-performance, cloud-native backend platforms using Java, Spring Boot,
        and containerised microservices on Docker and Kubernetes. I also bring strong hands-on experience with Python,
        FastAPI, and Pydantic for building type-safe, scalable APIs.
      </p>
      <p className="mb-4">
        I implement end-to-end observability stacks with Prometheus, Grafana, and Splunk, and drive CI/CD automation
        and DevSecOps practices that measurably improve delivery quality and system reliability.
      </p>
      <p>
        Beyond backend and cloud engineering, I work extensively with AI/ML — including NLP, deep learning,
        and RAG (Retrieval-Augmented Generation) solutions built with LangChain and LangGraph — and I am actively
        exploring Agentic AI architectures to build intelligent, context-aware enterprise systems.
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
