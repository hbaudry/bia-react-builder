
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step5RecoveryProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step5Recovery: React.FC<Step5RecoveryProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">5. Recovery Prioritization</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="recoveryPrioritization">
          In the event of a disruption, which applications or services should be restored first?
        </FormFieldLabel>
        <Textarea 
          id="recoveryPrioritization" 
          value={formData.recoveryPrioritization}
          onChange={(e) => updateFormData('recoveryPrioritization', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="minimumFunctionality">
          What is the minimum functionality needed for business operations to continue?
        </FormFieldLabel>
        <Textarea 
          id="minimumFunctionality" 
          value={formData.minimumFunctionality}
          onChange={(e) => updateFormData('minimumFunctionality', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="contingencyPlan">
          Do you have a contingency plan if a key resource or system becomes unavailable?
        </FormFieldLabel>
        <Textarea 
          id="contingencyPlan" 
          value={formData.contingencyPlan}
          onChange={(e) => updateFormData('contingencyPlan', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
};

export default Step5Recovery;
