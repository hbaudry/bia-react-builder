import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Input } from '@/components/ui/input';
import FormCard from '@/components/FormCard';

interface Step1GeneralProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step1General: React.FC<Step1GeneralProps> = React.memo(({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">1. General Information</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="department">Department/Team:</FormFieldLabel>
        <Input 
          id="department" 
          value={formData.department}
          onChange={(e) => updateFormData('department', e.target.value)}
          required
          className="mb-4"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="contactPerson">Contact Person:</FormFieldLabel>
        <Input 
          id="contactPerson" 
          value={formData.contactPerson}
          onChange={(e) => updateFormData('contactPerson', e.target.value)}
          required
          className="mb-4"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="submissionDate">Date of Submission:</FormFieldLabel>
        <Input 
          id="submissionDate" 
          type="date"
          value={formData.submissionDate}
          onChange={(e) => updateFormData('submissionDate', e.target.value)}
          required
          className="mb-4"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="software">Application/Software Managed:</FormFieldLabel>
        <Input 
          id="software" 
          value={formData.software}
          onChange={(e) => updateFormData('software', e.target.value)}
          required
          className="mb-4"
        />
      </div>
    </FormCard>
  );
});

Step1General.displayName = 'Step1General';

export default Step1General;
