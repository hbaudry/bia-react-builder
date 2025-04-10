
import BIAQuestionnaire from "@/components/BIAQuestionnaire";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bia-background to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Business Impact Analysis <span className="text-bia-primary">Questionnaire</span>
          </h1>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Complete this assessment to help identify critical business functions, resources, and recovery requirements
          </p>
        </header>
        
        <BIAQuestionnaire />
        
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Business Impact Analysis Tool. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
