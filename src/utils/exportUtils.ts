
import { BiaFormData } from '@/types/bia.types';

export const mapFieldsToHeadings: Record<keyof BiaFormData, string> = {
  department: 'Department/Team',
  contactPerson: 'Contact Person',
  submissionDate: 'Date of Submission',
  software: 'Application/Software Managed',
  keyProcesses: 'Key Business Processes',
  criticalApplications: 'Critical Applications/Services',
  businessFunctions: 'Business Functions',
  impactInterruptions: 'Impact of Interruptions',
  acceptableDowntime: 'Acceptable Downtime',
  financialImpact: 'Financial Impact',
  reputationImpact: 'Reputation Impact',
  legalImpact: 'Legal Compliance Impact',
  criticalItResources: 'Critical IT Resources',
  thirdParty: 'Third-party Dependencies',
  personnel: 'Key Personnel',
  recoveryPrioritization: 'Recovery Prioritization',
  minimumFunctionality: 'Minimum Functionality',
  contingencyPlan: 'Contingency Plan',
  criticalData: 'Critical Data',
  backupFrequency: 'Backup Frequency',
  backupLocation: 'Backup Location',
  dataLoss: 'Data Loss Acceptable',
  communicationResponsibility: 'Communication Responsibility',
  notificationProcess: 'Notification Process',
  communicationStrategy: 'Communication Strategy',
  rto: 'RTO',
  rpo: 'RPO',
  futureChanges: 'Future Considerations',
  lessonsLearned: 'Lessons Learned',
  additionalComments: 'Additional Comments'
};

export const exportToCSV = (formData: BiaFormData): void => {
  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'Field,Value\n';
  
  Object.entries(formData).forEach(([key, value]) => {
    const field = mapFieldsToHeadings[key as keyof BiaFormData] || key;
    
    // Clean the value to handle commas and quotes properly
    const cleanedValue = value.replace(/"/g, '""');
    csvContent += `"${field}","${cleanedValue}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'bia_questionnaire.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const submitAsEmail = (formData: BiaFormData): void => {
  const subject = 'Business Impact Analysis (BIA) Questionnaire';
  
  // Create email body
  let emailBody = 'Business Impact Analysis (BIA) Questionnaire\n\n';
  
  Object.entries(formData).forEach(([key, value]) => {
    const field = mapFieldsToHeadings[key as keyof BiaFormData] || key;
    emailBody += `${field}: ${value}\n\n`;
  });
  
  // Create mailto link
  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
  // Open email client
  window.location.href = mailtoLink;
};

export const validateFormData = (formData: BiaFormData, currentStep: number): string[] => {
  const errors: string[] = [];
  
  // Validate based on current step
  if (currentStep === 1) {
    if (!formData.department) errors.push('Department/Team is required');
    if (!formData.contactPerson) errors.push('Contact Person is required');
    if (!formData.submissionDate) errors.push('Date of Submission is required');
    if (!formData.software) errors.push('Application/Software Managed is required');
  }
  
  if (currentStep === 2) {
    if (!formData.keyProcesses) errors.push('Key Business Processes is required');
    if (!formData.criticalApplications) errors.push('Critical Applications/Services is required');
  }
  
  return errors;
};
