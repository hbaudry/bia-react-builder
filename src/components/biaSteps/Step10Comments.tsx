
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step10CommentsProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step10Comments: React.FC<Step10CommentsProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">10. Additional Comments</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="additionalComments">
          Please provide any additional information that would be relevant for the BIA:
        </FormFieldLabel>
        <Textarea 
          id="additionalComments" 
          value={formData.additionalComments}
          onChange={(e) => updateFormData('additionalComments', e.target.value)}
          className="mb-4 min-h-[150px]"
        />
      </div>
    </FormCard>
  );
};

export default Step10Comments;
