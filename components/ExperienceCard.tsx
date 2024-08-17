import { motion } from "framer-motion";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-[#FFFFFF] bg-gradient-to-bl from-[#da8067] to-[#ebaf81] p-5 md:p10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className=" md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-md xl:w-[150px] xl:h-[150px] mb-2 object-contain object-center"
        src={experience?.companyImage}
        alt=""
      />
      <div className="w-full px-0 md:px-10">
        <div className=" md:flex md:justify-between items-center">
          <div>
            <h4 className="text-lg md:text-3xl font-medium text-neutral-800">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-md md:text-2xl my-1 text-amber-300">
              {experience?.company}
            </p>
            <div className="flex space-x-4 my-2">
              {experience?.technologies.map((technology, index) => (
                <img
                  key={index}
                  className="h-8 w-8 rounded-md object-cover"
                  src={technology?.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28 rounded-md mb-0 object-cover object-center"
            src={experience?.companyImage}
            alt=""
          />
        </div>
        <p className="uppercase py-2 md:py-5 text-neutral-500 text-sm md:text-md">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <ul className="px-0 md:px-10 list-disc font-normal text-neutral-700 space-y-2 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80">
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
