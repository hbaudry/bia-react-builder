
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step7CommunicationProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step7Communication: React.FC<Step7CommunicationProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">7. Communication and Coordination</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="communicationResponsibility">
          Who is responsible for internal and external communication in case of a disruption?
        </FormFieldLabel>
        <Textarea 
          id="communicationResponsibility" 
          value={formData.communicationResponsibility}
          onChange={(e) => updateFormData('communicationResponsibility', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="notificationProcess">
          What is the process for notifying customers, stakeholders, and internal teams of a disruption?
        </FormFieldLabel>
        <Textarea 
          id="notificationProcess" 
          value={formData.notificationProcess}
          onChange={(e) => updateFormData('notificationProcess', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="communicationStrategy">
          Are there any pre-defined communication strategies in place for downtime situations?
        </FormFieldLabel>
        <Textarea 
          id="communicationStrategy" 
          value={formData.communicationStrategy}
          onChange={(e) => updateFormData('communicationStrategy', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
};

export default Step7Communication;
