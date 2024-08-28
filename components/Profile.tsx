import { mockData } from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";

export function Profile() {
  const { currentLanguage: language } = useLanguage();
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p className="text-lg">{mockData[language].profile.summary}</p>
    </section>
  );
}
