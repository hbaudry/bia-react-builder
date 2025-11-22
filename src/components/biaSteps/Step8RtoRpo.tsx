
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step8RtoRpoProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step8RtoRpo: React.FC<Step8RtoRpoProps> = React.memo(({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">8. RTO and RPO</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="rto">
          What is the Recovery Time Objective (RTO) for each critical application or service?
        </FormFieldLabel>
        <Textarea 
          id="rto" 
          value={formData.rto}
          onChange={(e) => updateFormData('rto', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="rpo">
          What is the Recovery Point Objective (RPO) for critical data?
        </FormFieldLabel>
        <Textarea 
          id="rpo" 
          value={formData.rpo}
          onChange={(e) => updateFormData('rpo', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
});

Step8RtoRpo.displayName = 'Step8RtoRpo';

export default Step8RtoRpo;
