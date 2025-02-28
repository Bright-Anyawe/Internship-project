import SkillTestHeader from "@/components/skillTestHeader";
import QuickStatistics from "@/components/quickStats";
import ComparisonGraph from "@/components/comparisonGraph";
import SkillAnalysis from "@/components/skillAnalysis";
import QuestionAnalysis from "@/components/questionAnalysis";
import { FormDataProvider } from "@/context/formDataContext";

export default function SkillTest() {
  return (
    <FormDataProvider>
      <main className="min-h-screen p-4">
        <h1 className="text-xl mb-4">Skill Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
          <div className="space-y-4">
            <SkillTestHeader />
            <QuickStatistics />
            <ComparisonGraph />
          </div>
          <div className="space-y-4">
            <SkillAnalysis />
            <QuestionAnalysis />
          </div>
        </div>
      </main>
    </FormDataProvider>
  );
}
