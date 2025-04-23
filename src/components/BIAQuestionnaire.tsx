import React, { useState } from 'react';
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
  
  const updateFormData = (field: keyof BiaFormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      let prevStep = currentStep - 1;
      while (skippedSteps.includes(prevStep) && prevStep > 1) {
        prevStep--;
      }
      setCurrentStep(prevStep);
      window.scrollTo(0, 0);
    }
  };
  
  const skipStep = () => {
    if (currentStep < steps.length) {
      setSkippedSteps([...skippedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
      
      toast({
        title: "Step Skipped",
        description: "You can always come back to this step later.",
      });
    }
  };
  
  const goToNextStep = () => {
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
      window.scrollTo(0, 0);
    }
  };
  
  const handleExportToCSV = () => {
    exportToCSV(formData);
    toast({
      title: "Export Successful",
      description: "The BIA questionnaire has been exported as a CSV file.",
    });
  };
  
  const handleSubmitAsEmail = () => {
    submitAsEmail(formData);
    toast({
      title: "Email Preparation",
      description: "Your email client should open with the BIA data.",
    });
  };
  
  const handleBackup = () => {
    downloadBackup(formData);
    toast({
      title: "Backup Created",
      description: "Your BIA data has been saved as a JSON file.",
    });
  };

  const handleRestore = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  };

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
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white shadow-sm rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <StepIndicator steps={steps} currentStep={currentStep} skippedSteps={skippedSteps} />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem onClick={handleBackup}>
                <Save className="w-4 h-4 mr-2" />
                Backup Data
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = (event) => handleRestore(event as React.ChangeEvent<HTMLInputElement>);
                input.click();
              }}>
                <Upload className="w-4 h-4 mr-2" />
                Restore Backup
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="mb-6 transition-all duration-300 animate-fade-in">
        {renderStepContent()}
      </div>
      
      <div className="flex justify-between mt-10">
        <Button
          onClick={goToPreviousStep}
          disabled={currentStep === 1}
          variant="outline"
          className="min-w-[140px] py-6 text-base font-medium shadow-sm hover:bg-gray-100"
        >
          Previous
        </Button>
        
        <div className="flex gap-3">
          {currentStep < steps.length && (
            <Button
              onClick={skipStep}
              variant="outline"
              className="min-w-[140px] py-6 text-base font-medium shadow-sm bg-soft-gray hover:bg-gray-100"
            >
              Skip Step
            </Button>
          )}
          
          {currentStep < steps.length ? (
            <Button 
              onClick={goToNextStep}
              className="min-w-[140px] py-6 text-base font-medium shadow-md bg-bia-primary hover:bg-bia-primary-hover"
            >
              Continue
            </Button>
          ) : (
            <div className="flex gap-3">
              <Button 
                onClick={handleSubmitAsEmail}
                className="min-w-[140px] py-6 text-base font-medium shadow-md bg-bia-primary hover:bg-bia-primary-hover"
              >
                Submit as Email
              </Button>
              <Button 
                onClick={handleExportToCSV}
                className="min-w-[140px] py-6 text-base font-medium shadow-md bg-bia-secondary hover:bg-bia-secondary-hover"
              >
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
