
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormStep } from '@/types/bia.types';

interface StepIndicatorProps {
  steps: FormStep[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-3xl">
        <div className="hidden md:flex justify-between items-center">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center relative">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                    isCompleted ? "bg-bia-primary border-bia-primary text-white shadow-md" : 
                    isCurrent ? "border-2 border-bia-primary text-bia-primary" : 
                    "border-2 border-gray-300 text-gray-300"
                  )}
                >
                  {isCompleted ? (
                    <Check size={18} strokeWidth={3} />
                  ) : (
                    <span className="text-sm font-bold">{step.id}</span>
                  )}
                </div>
                <span 
                  className={cn(
                    "text-xs font-medium hidden md:block transition-colors duration-300",
                    isCurrent ? "text-bia-primary font-bold" : 
                    isCompleted ? "text-bia-primary" : 
                    "text-gray-400"
                  )}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="md:hidden text-center">
          <div className="text-sm font-medium text-gray-600">Step {currentStep} of {steps.length}</div>
          <h2 className="text-xl font-bold text-bia-primary mt-1">{steps[currentStep-1].title}</h2>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
