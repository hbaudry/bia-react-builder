
import BIAQuestionnaire from "@/components/BIAQuestionnaire";
import { Shield, CheckCircle2, FileText, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <header className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-bia-primary to-emerald-600 shadow-lg mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-bia-primary to-bia-secondary mb-4">
            Business Impact Analysis
          </h1>
          <p className="text-xl text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Complete this comprehensive assessment to identify critical business functions,
            resources, and recovery requirements for your organization
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-bia-primary" />
              <span className="text-sm font-medium text-gray-700">Step-by-step guidance</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
              <FileText className="w-4 h-4 text-bia-secondary" />
              <span className="text-sm font-medium text-gray-700">Export to CSV</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
              <AlertCircle className="w-4 h-4 text-bia-accent" />
              <span className="text-sm font-medium text-gray-700">Auto-save backup</span>
            </div>
          </div>
        </header>

        <BIAQuestionnaire />

        <footer className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <p>© {new Date().getFullYear()} Business Impact Analysis Tool. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
