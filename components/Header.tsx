import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import meData from "@/constants/data";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          {meData.profile.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {meData.profile.title}
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
      </div>
    </header>
  );
}
