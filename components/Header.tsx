import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { mockData } from "@/constants/data";
import { LanguageOption, useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const { currentLanguage: language, toggleLanguage } = useLanguage();
  const imageUrl = `https://flagcdn.com/w320/${
    language === LanguageOption.ENGLISH ? "us.png" : "es.png"
  }`;

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          {mockData[language].profile.name}
        </h1>
        <p
          className={`text-xl ${darkMode ? "text-gray-400" : "text-gray-800"}`}
        >
          {mockData[language].profile.title}
        </p>
      </div>
      <div className="flex flex-row gap-7">
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <span className="text-sm flex items-center space-x-2">
            <Image
              src={imageUrl}
              alt={language}
              width={24}
              height={24}
              className="h-6 w-8"
            />
          </span>
          <Switch
            className={`${
              darkMode
                ? "data-[state=checked]:bg-gray-600 data-[state=unchecked]:bg-gray-600"
                : ""
            }`}
            checked={language === LanguageOption.ENGLISH}
            onCheckedChange={toggleLanguage}
          />
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          {darkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <Switch
            className={`${
              darkMode
                ? "data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-600"
                : ""
            }`}
            checked={darkMode}
            onCheckedChange={toggleDarkMode}
          />
        </div>
      </div>
    </header>
  );
}
