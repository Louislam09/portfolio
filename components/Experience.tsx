import { motion } from "framer-motion";
import { mockData } from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

interface ExperienceProps {
  darkMode: boolean;
}

export function Experience({ darkMode }: ExperienceProps) {
  const { currentLanguage: language } = useLanguage();
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Employment History</h2>
      {mockData[language].employmentHistory.map((job, index) => (
        <motion.div
          key={job.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="mb-4 p-4 rounded-lg bg-opacity-10 bg-blue-500"
        >
          <h3 className="text-xl font-semibold">
            {job.title} at {job.company}
          </h3>
          <p className="text-sm opacity-70">
            {job.start_date} - {job.end_date}
          </p>
          <ul className="list-disc list-inside mt-2">
            {job.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}
