import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, client, year, align, image, link, description, tech, impact }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-start gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="flex-1">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <p className="text-sm text-cyan font-special mt-1">{client} &mdash; {year}</p>

        {description && (
          <p className="text-white text-sm mt-3 leading-relaxed">{description}</p>
        )}

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full border border-cyan text-cyan"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {impact && (
          <p className="text-gray-400 text-xs mt-3 italic leading-relaxed">{impact}</p>
        )}

        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer mt-4 sm:justify-self-center ${
            align === "left" ? "md:justify-self-start" : "md:justify-self-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      <div className="max-h-[220px] max-w-[400px] min-w-[280px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
