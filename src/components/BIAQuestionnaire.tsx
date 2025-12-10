import React, { useState, useCallback, useRef } from 'react';
import { BiaFormData, FormStep, initialFormData } from '@/types/bia.types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { exportToCSV, submitAsEmail, validateFormData } from '@/utils/exportUtils';
import StepIndicator from '@/components/StepIndicator';
import { downloadBackup, restoreFromBackup } from '@/utils/backupUtils';
import { Save, Upload } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';

// Import step components
import Step1General from '@/components/biaSteps/Step1General';
import Step2Processes from '@/components/biaSteps/Step2Processes';
import Step3Downtime from '@/components/biaSteps/Step3Downtime';
import Step4Resources from '@/components/biaSteps/Step4Resources';
import Step5Recovery from '@/components/biaSteps/Step5Recovery';
import Step6Backup from '@/components/biaSteps/Step6Backup';
import Step7Communication from '@/components/biaSteps/Step7Communication';
import Step8RtoRpo from '@/components/biaSteps/Step8RtoRpo';
import Step9Future from '@/components/biaSteps/Step9Future';
import Step10Comments from '@/components/biaSteps/Step10Comments';

const steps: FormStep[] = [
  { id: 1, title: 'General Info' },
  { id: 2, title: 'Processes' },
  { id: 3, title: 'Downtime' },
  { id: 4, title: 'Resources' },
  { id: 5, title: 'Recovery' },
  { id: 6, title: 'Backup' },
  { id: 7, title: 'Communication' },
  { id: 8, title: 'RTO & RPO' },
  { id: 9, title: 'Future' },
  { id: 10, title: 'Comments' },
];

const BIAQuestionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BiaFormData>(initialFormData);
  const [skippedSteps, setSkippedSteps] = useState<number[]>([]);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateFormData = useCallback((field: keyof BiaFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  
  const goToPreviousStep = useCallback(() => {
    if (currentStep > 1) {
      let prevStep = currentStep - 1;
      while (skippedSteps.includes(prevStep) && prevStep > 1) {
        prevStep--;
      }
      setCurrentStep(prevStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, skippedSteps]);

  const skipStep = useCallback(() => {
    if (currentStep < steps.length) {
      setSkippedSteps(prev => [...prev, currentStep]);
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      toast({
        title: "Step Skipped",
        description: "You can always come back to this step later.",
      });
    }
  }, [currentStep, toast]);

  const goToNextStep = useCallback(() => {
    const errors = validateFormData(formData, currentStep);

    if (errors.length > 0) {
      errors.forEach(error => {
        toast({
          title: "Validation Error",
          description: error,
          variant: "destructive",
        });
      });
      return;
    }

    if (currentStep < steps.length) {
      let nextStep = currentStep + 1;
      while (skippedSteps.includes(nextStep) && nextStep < steps.length) {
        nextStep++;
      }
      setCurrentStep(nextStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [formData, currentStep, skippedSteps, toast]);

  const handleExportToCSV = useCallback(() => {
    exportToCSV(formData);
    toast({
      title: "Export Successful",
      description: "The BIA questionnaire has been exported as a CSV file.",
    });
  }, [formData, toast]);

  const handleSubmitAsEmail = useCallback(() => {
    submitAsEmail(formData);
    toast({
      title: "Email Preparation",
      description: "Your email client should open with the BIA data.",
    });
  }, [formData, toast]);

  const handleBackup = useCallback(() => {
    downloadBackup(formData);
    toast({
      title: "Backup Created",
      description: "Your BIA data has been saved as a JSON file.",
    });
  }, [formData, toast]);

  const handleRestore = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    restoreFromBackup(file)
      .then((restoredData) => {
        setFormData(restoredData);
        toast({
          title: "Restore Successful",
          description: "Your BIA data has been restored from backup.",
        });
      })
      .catch((error) => {
        toast({
          title: "Restore Failed",
          description: error.message,
          variant: "destructive",
        });
      });
  }, [toast]);

  const handleRestoreClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1General formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2Processes formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3Downtime formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4Resources formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5Recovery formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <Step6Backup formData={formData} updateFormData={updateFormData} />;
      case 7:
        return <Step7Communication formData={formData} updateFormData={updateFormData} />;
      case 8:
        return <Step8RtoRpo formData={formData} updateFormData={updateFormData} />;
      case 9:
        return <Step9Future formData={formData} updateFormData={updateFormData} />;
      case 10:
        return <Step10Comments formData={formData} updateFormData={updateFormData} />;
      default:
        return <Step1General formData={formData} updateFormData={updateFormData} />;
    }
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Top Control Bar */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-6 mb-8 border border-gray-100 animate-fade-in">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <StepIndicator steps={steps} currentStep={currentStep} skippedSteps={skippedSteps} />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shadow-sm hover:shadow-md transition-shadow hover:bg-bia-primary/5 border-gray-200"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-52">
              <DropdownMenuItem onClick={handleBackup} className="cursor-pointer hover:bg-bia-primary/10">
                <Save className="w-4 h-4 mr-2 text-bia-primary" />
                <span className="font-medium">Backup Data</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleRestoreClick} className="cursor-pointer hover:bg-bia-secondary/10">
                <Upload className="w-4 h-4 mr-2 text-bia-secondary" />
                <span className="font-medium">Restore Backup</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleRestore}
        className="hidden"
      />

      {/* Form Content */}
      <div className="mb-8 transition-all duration-500 animate-scale-in">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-10 gap-4 flex-wrap">
        <Button
          onClick={goToPreviousStep}
          disabled={currentStep === 1}
          variant="outline"
          className="min-w-[140px] py-6 text-base font-medium shadow-sm hover:shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed border-gray-300 hover:bg-gray-50"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </Button>

        <div className="flex gap-3 flex-wrap">
          {currentStep < steps.length && (
            <Button
              onClick={skipStep}
              variant="outline"
              className="min-w-[140px] py-6 text-base font-medium shadow-sm hover:shadow-md transition-all bg-gray-50 hover:bg-gray-100 border-gray-300"
            >
              Skip Step
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </Button>
          )}

          {currentStep < steps.length ? (
            <Button
              onClick={goToNextStep}
              className="min-w-[140px] py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-bia-primary to-emerald-600 hover:from-bia-primary-hover hover:to-emerald-700 text-white"
            >
              Continue
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          ) : (
            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={handleSubmitAsEmail}
                className="min-w-[140px] py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-bia-primary to-emerald-600 hover:from-bia-primary-hover hover:to-emerald-700 text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Submit as Email
              </Button>
              <Button
                onClick={handleExportToCSV}
                className="min-w-[140px] py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-bia-secondary to-blue-700 hover:from-bia-secondary-hover hover:to-blue-800 text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export as CSV
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BIAQuestionnaire;
