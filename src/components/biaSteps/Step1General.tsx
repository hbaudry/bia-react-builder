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
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bia-primary to-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
            1
          </div>
          <h2 className="text-2xl font-bold text-gray-800">General Information</h2>
        </div>
        <p className="text-gray-600 text-sm ml-13">
          Please provide the basic information about your department and the application/software you manage.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <FormFieldLabel htmlFor="department" required>Department/Team</FormFieldLabel>
          <Input
            id="department"
            value={formData.department}
            onChange={(e) => updateFormData('department', e.target.value)}
            required
            placeholder="e.g., IT Operations, Finance, HR"
            className="transition-all focus:ring-2 focus:ring-bia-primary/20 focus:border-bia-primary"
          />
        </div>

        <div className="space-y-2">
          <FormFieldLabel htmlFor="contactPerson" required>Contact Person</FormFieldLabel>
          <Input
            id="contactPerson"
            value={formData.contactPerson}
            onChange={(e) => updateFormData('contactPerson', e.target.value)}
            required
            placeholder="Full name of primary contact"
            className="transition-all focus:ring-2 focus:ring-bia-primary/20 focus:border-bia-primary"
          />
        </div>

        <div className="space-y-2">
          <FormFieldLabel htmlFor="submissionDate" required>Date of Submission</FormFieldLabel>
          <Input
            id="submissionDate"
            type="date"
            value={formData.submissionDate}
            onChange={(e) => updateFormData('submissionDate', e.target.value)}
            required
            className="transition-all focus:ring-2 focus:ring-bia-primary/20 focus:border-bia-primary"
          />
        </div>

        <div className="space-y-2">
          <FormFieldLabel htmlFor="software" required>Application/Software Managed</FormFieldLabel>
          <Input
            id="software"
            value={formData.software}
            onChange={(e) => updateFormData('software', e.target.value)}
            required
            placeholder="e.g., CRM System, ERP, Database Server"
            className="transition-all focus:ring-2 focus:ring-bia-primary/20 focus:border-bia-primary"
          />
        </div>
      </div>
    </FormCard>
  );
});

Step1General.displayName = 'Step1General';

export default Step1General;
