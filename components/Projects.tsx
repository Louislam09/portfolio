import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import mockData from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const { currentLanguage: language } = useLanguage();
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockData[language].projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg bg-opacity-10 bg-purple-500"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            {project.description && (
              <p className="mt-2 text-sm">{project.description}</p>
            )}
            <Button
              className="mt-4"
              variant={!darkMode ? "outline" : "default"}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
