
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step4ResourcesProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step4Resources: React.FC<Step4ResourcesProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">4. Resource Dependencies</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="criticalItResources">
          What IT resources (servers, databases, cloud platforms) are critical for your department's applications (Critical means failure leads to a complete halt in your department business operations, causing severe financial, reputational, or regulatory impacts. These systems require immediate recovery)?
        </FormFieldLabel>
        <Textarea 
          id="criticalItResources" 
          value={formData.criticalItResources}
          onChange={(e) => updateFormData('criticalItResources', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="thirdParty">
          Are there specific third-party vendors, APIs, or services your application depends on?
        </FormFieldLabel>
        <Textarea 
          id="thirdParty" 
          value={formData.thirdParty}
          onChange={(e) => updateFormData('thirdParty', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="personnel">
          Which personnel or teams are essential to keeping your application operational?
        </FormFieldLabel>
        <Textarea 
          id="personnel" 
          value={formData.personnel}
          onChange={(e) => updateFormData('personnel', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
};

export default Step4Resources;
