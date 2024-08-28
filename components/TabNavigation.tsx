import { Button } from "@/components/ui/button";

interface TabNavigationProps {
  activeTab: string;
  darkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({
  activeTab,
  setActiveTab,
  darkMode,
}: TabNavigationProps) {
  const tabs = ["experience", "education", "projects"];

  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        {tabs.map((tab) => (
          <li key={tab}>
            <Button
              variant={darkMode === (activeTab === tab) ? "outline" : "default"}
              onClick={() => setActiveTab(tab)}
              className={`${darkMode && activeTab === tab ? "text-black" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
