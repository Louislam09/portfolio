import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { mockData } from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

interface LinksProps {
  darkMode: boolean;
}

export function Links({ darkMode }: LinksProps) {
  const { currentLanguage: language } = useLanguage();
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Links</h2>
      <div className="space-y-2">
        <Button variant={!darkMode ? "outline" : "default"} className="w-full">
          <a
            href={mockData[language].links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant={!darkMode ? "outline" : "default"} className="w-full">
          <a
            href={mockData[language].links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
