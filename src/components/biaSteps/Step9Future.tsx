
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step9FutureProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step9Future: React.FC<Step9FutureProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">9. Future Considerations</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="futureChanges">
          Are there any foreseeable changes that could impact business continuity?
        </FormFieldLabel>
        <Textarea 
          id="futureChanges" 
          value={formData.futureChanges}
          onChange={(e) => updateFormData('futureChanges', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="lessonsLearned">
          Are there any lessons learned from past incidents that could improve recovery efforts?
        </FormFieldLabel>
        <Textarea 
          id="lessonsLearned" 
          value={formData.lessonsLearned}
          onChange={(e) => updateFormData('lessonsLearned', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
};

export default Step9Future;
