
export type FormStep = {
  id: number;
  title: string;
}

export type BiaFormData = {
  // General Information
  department: string;
  contactPerson: string;
  submissionDate: string;
  software: string;
  
  // Key Processes and Applications
  keyProcesses: string;
  criticalApplications: string;
  businessFunctions: string;
  impactInterruptions: string;
  
  // Impact of Downtime
  acceptableDowntime: string;
  financialImpact: string;
  reputationImpact: string;
  legalImpact: string;
  
  // Resource Dependencies
  criticalItResources: string;
  thirdParty: string;
  personnel: string;
  
  // Recovery Prioritization
  recoveryPrioritization: string;
  minimumFunctionality: string;
  contingencyPlan: string;
  
  // Data and Backup
  criticalData: string;
  backupFrequency: string;
  backupLocation: string;
  dataLoss: string;
  
  // Communication and Coordination
  communicationResponsibility: string;
  notificationProcess: string;
  communicationStrategy: string;
  
  // RTO and RPO
  rto: string;
  rpo: string;
  
  // Future Considerations
  futureChanges: string;
  lessonsLearned: string;
  
  // Additional Comments
  additionalComments: string;
}

export const initialFormData: BiaFormData = {
  department: '',
  contactPerson: '',
  submissionDate: '',
  software: '',
  keyProcesses: '',
  criticalApplications: '',
  businessFunctions: '',
  impactInterruptions: '',
  acceptableDowntime: '1-4',
  financialImpact: '',
  reputationImpact: '',
  legalImpact: '',
  criticalItResources: '',
  thirdParty: '',
  personnel: '',
  recoveryPrioritization: '',
  minimumFunctionality: '',
  contingencyPlan: '',
  criticalData: '',
  backupFrequency: '',
  backupLocation: '',
  dataLoss: '',
  communicationResponsibility: '',
  notificationProcess: '',
  communicationStrategy: '',
  rto: '',
  rpo: '',
  futureChanges: '',
  lessonsLearned: '',
  additionalComments: ''
}
