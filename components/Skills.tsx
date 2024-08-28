import { motion } from "framer-motion";
import mockData from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

export function Skills() {
  const { currentLanguage: language } = useLanguage();
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-2">
        {mockData[language].skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.15 }}
            className="text-center p-2 bg-opacity-20 bg-blue-500 rounded"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
