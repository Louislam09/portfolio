import { motion } from "framer-motion";
import { mockData } from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

export function Education() {
  const { currentLanguage: language } = useLanguage();
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {mockData[language].education.map((edu, index) => (
        <motion.div
          key={edu.institution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="mb-4 p-4 rounded-lg bg-opacity-10 bg-green-500"
        >
          <h3 className="text-xl font-semibold">{edu.degree || edu.program}</h3>
          <p>{edu.institution}</p>
          <p className="text-sm opacity-70">
            {edu.graduation_date || `${edu.start_date} - ${edu.end_date}`}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
