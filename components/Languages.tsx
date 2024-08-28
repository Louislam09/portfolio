import { Progress } from "@/components/ui/progress";
import mockData from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

export function Languages() {
  const { currentLanguage: language } = useLanguage();
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Languages</h2>
      <div className="space-y-2">
        {mockData[language].languages.map((language, index) => (
          <div key={language.name}>
            <div className="flex justify-between mb-1">
              <span>{language.name}</span>
              <span>{`${language.level}`}</span>
            </div>
            {/* <Progress value={index === 0 ? 90 : 30} className="h-2" /> */}
            <Progress value={language.level} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
