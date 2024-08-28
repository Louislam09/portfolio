import { Progress } from "@/components/ui/progress";
import meData from "@/constants/data";

export function Languages() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Languages</h2>
      <div className="space-y-2">
        {meData.languages.map((language, index) => (
          <div key={language}>
            <div className="flex justify-between mb-1">
              <span>{language}</span>
              <span>{index === 0 ? "90%" : "30%"}</span>
            </div>
            <Progress value={index === 0 ? 90 : 30} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
