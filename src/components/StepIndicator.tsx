
import { Check, CircleDashed } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormStep } from '@/types/bia.types';

interface StepIndicatorProps {
  steps: FormStep[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="flex items-center w-full max-w-3xl justify-between">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2",
                  isCompleted ? "bg-bia-primary border-bia-primary text-white" : 
                  isCurrent ? "border-bia-primary text-bia-primary" : 
                  "border-gray-300 text-gray-300"
                )}
              >
                {isCompleted ? (
                  <Check size={20} />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <span 
                className={cn(
                  "text-xs font-medium hidden md:block",
                  isCurrent ? "text-bia-primary" : 
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
    </div>
  );
};

export default StepIndicator;
