
import React from 'react';
import { BiaFormData } from '@/types/bia.types';
import FormFieldLabel from '@/components/FormFieldLabel';
import { Textarea } from '@/components/ui/textarea';
import FormCard from '@/components/FormCard';

interface Step6BackupProps {
  formData: BiaFormData;
  updateFormData: (field: keyof BiaFormData, value: string) => void;
}

const Step6Backup: React.FC<Step6BackupProps> = ({ formData, updateFormData }) => {
  return (
    <FormCard>
      <h2 className="text-xl font-bold mb-6">6. Data and Backup</h2>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="criticalData">
          What type of data is critical to your department/application?
        </FormFieldLabel>
        <Textarea 
          id="criticalData" 
          value={formData.criticalData}
          onChange={(e) => updateFormData('criticalData', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="backupFrequency">
          How often is this data backed up?
        </FormFieldLabel>
        <Textarea 
          id="backupFrequency" 
          value={formData.backupFrequency}
          onChange={(e) => updateFormData('backupFrequency', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="backupLocation">
          Where are backups stored (on-premise, cloud, offsite)?
        </FormFieldLabel>
        <Textarea 
          id="backupLocation" 
          value={formData.backupLocation}
          onChange={(e) => updateFormData('backupLocation', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
      
      <div className="mb-4">
        <FormFieldLabel htmlFor="dataLoss">
          What is the maximum acceptable amount of lost data?
        </FormFieldLabel>
        <Textarea 
          id="dataLoss" 
          value={formData.dataLoss}
          onChange={(e) => updateFormData('dataLoss', e.target.value)}
          className="mb-4 min-h-[100px]"
        />
      </div>
    </FormCard>
  );
};

export default Step6Backup;
