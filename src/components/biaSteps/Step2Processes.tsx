
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step2ProcessesProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step2Processes: React.FC<Step2ProcessesProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">2. Key Processes and Applications</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="keyProcesses">
          What are the key business processes supported by your department/software?
        </FormFieldLabel>
        <Textarea 
          id="keyProcesses" 
          value={formData.keyProcesses}
          onChange={(e) => updateFormData('keyProcesses', e.target.value)}
          required
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="criticalApplications">
          List the critical applications and services you manage (Critical means failure leads to a complete halt in business operations, causing severe financial, reputational, or regulatory impacts. These systems require immediate recovery):
        </FormFieldLabel>
        <Textarea 
          id="criticalApplications" 
          value={formData.criticalApplications}
          onChange={(e) => updateFormData('criticalApplications', e.target.value)}
          required
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="businessFunctions">
          What specific business functions rely on these applications?
        </FormFieldLabel>
        <Textarea 
          id="businessFunctions" 
          value={formData.businessFunctions}
          onChange={(e) => updateFormData('businessFunctions', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="impactInterruptions">
          How do interruptions to these applications impact your internal teams or customers?
        </FormFieldLabel>
        <Textarea 
          id="impactInterruptions" 
          value={formData.impactInterruptions}
          onChange={(e) => updateFormData('impactInterruptions', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
};

export default Step2Processes;
