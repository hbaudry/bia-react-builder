
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FormCard from '@/components/FormCard';

interface Step3DowntimeProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step3Downtime: React.FC<Step3DowntimeProps> = React.memo(({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">3. Impact of Downtime</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="acceptableDowntime">
          What is the acceptable downtime (in hours) for each key application without significantly affecting operations?
        </FormFieldLabel>
        <Select 
          value={formData.acceptableDowntime} 
          onValueChange={(value) => updateFormData('acceptableDowntime', value)}
        >
          <SelectTrigger className="mb-4">
            <SelectValue placeholder="Select acceptable downtime" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-4">1-4 hours</SelectItem>
            <SelectItem value="4-12">4-12 hours</SelectItem>
            <SelectItem value="12-24">12-24 hours</SelectItem>
            <SelectItem value="24+">More than 24 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="financialImpact">
          What are the potential financial impacts of an extended outage?
        </FormFieldLabel>
        <Textarea 
          id="financialImpact" 
          value={formData.financialImpact}
          onChange={(e) => updateFormData('financialImpact', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="reputationImpact">
          What are the reputational impacts of an outage?
        </FormFieldLabel>
        <Textarea 
          id="reputationImpact" 
          value={formData.reputationImpact}
          onChange={(e) => updateFormData('reputationImpact', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="legalImpact">
          How does downtime impact legal or regulatory compliance requirements?
        </FormFieldLabel>
        <Textarea 
          id="legalImpact" 
          value={formData.legalImpact}
          onChange={(e) => updateFormData('legalImpact', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
});

Step3Downtime.displayName = 'Step3Downtime';

export default Step3Downtime;
