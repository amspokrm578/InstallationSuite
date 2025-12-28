// Workforce Tasking & Administrative Request types

export interface AdministrativeRequest {
  id: string;
  requestNumber: string;
  requestedBy: string;
  requestedByName: string;
  requestType: 'IT_SUPPORT' | 'HR_ACTION' | 'TRAVEL' | 'PROCUREMENT' | 'FACILITY' | 'OTHER';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'submitted' | 'in-review' | 'approved' | 'rejected' | 'completed';
  submittedAt: string;
  slaDueDate?: string;
  assignedTo?: string;
  assignedToName?: string;
  approvalChain: string[];
  attachments?: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedToName?: string;
  assignedBy: string;
  assignedByName?: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  dueDate?: string;
  completedDate?: string;
  tags?: string[];
  relatedRequestId?: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  active: boolean;
}

export interface WorkflowStep {
  id: string;
  stepNumber: number;
  name: string;
  assignedRole: string;
  requiredApproval: boolean;
  slaHours?: number;
}

