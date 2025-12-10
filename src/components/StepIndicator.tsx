
import { Check, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormStep } from '@/types/bia.types';

interface StepIndicatorProps {
  steps: FormStep[];
  currentStep: number;
  skippedSteps?: number[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, skippedSteps = [] }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <div className="hidden md:flex justify-between items-center relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
            <div
              className="h-full bg-gradient-to-r from-bia-primary to-bia-secondary transition-all duration-500 ease-out"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isSkipped = skippedSteps.includes(step.id);

            return (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 transform",
                    isCompleted ? "bg-gradient-to-br from-bia-primary to-emerald-600 text-white shadow-lg scale-110" :
                    isCurrent ? "border-3 border-bia-primary bg-white text-bia-primary shadow-lg scale-125 ring-4 ring-bia-primary/20" :
                    isSkipped ? "bg-gray-200 border-gray-300 text-gray-500" :
                    "border-2 border-gray-300 bg-white text-gray-400 hover:border-gray-400"
                  )}
                >
                  {isCompleted ? (
                    <Check size={18} strokeWidth={3} className="animate-in zoom-in duration-200" />
                  ) : isSkipped ? (
                    <SkipForward size={18} />
                  ) : (
                    <span className="text-sm font-bold">{step.id}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium hidden lg:block transition-all duration-300 text-center max-w-[80px]",
                    isCurrent ? "text-bia-primary font-bold scale-105" :
                    isCompleted ? "text-bia-primary" :
                    isSkipped ? "text-gray-400 italic line-through" :
                    "text-gray-400"
                  )}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="md:hidden text-center bg-gradient-to-r from-bia-primary/10 to-bia-secondary/10 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-600 mb-1">
            Step {currentStep} of {steps.length}
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-bia-primary to-bia-secondary bg-clip-text text-transparent">
            {steps[currentStep-1].title}
          </h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-bia-primary to-bia-secondary transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
