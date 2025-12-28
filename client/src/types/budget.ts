// Budgeting, Resource Allocation & Project Tracking types

export interface Budget {
  id: string;
  fiscalYear: string;
  programName: string;
  budgetLine: string;
  allocatedAmount: number;
  committedAmount: number;
  spentAmount: number;
  remainingAmount: number;
  status: 'draft' | 'approved' | 'active' | 'closed';
  approvedBy?: string;
  approvedDate?: string;
}

export interface ProcurementRequest {
  id: string;
  requestNumber: string;
  requestedBy: string;
  requestedByName: string;
  itemDescription: string;
  quantity: number;
  unitCost?: number;
  totalCost: number;
  budgetLine: string;
  justification: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'ordered' | 'received';
  submittedAt: string;
  approvalChain: string[];
  vendor?: string;
  orderDate?: string;
  receivedDate?: string;
}

export interface Project {
  id: string;
  projectNumber: string;
  name: string;
  description: string;
  programId?: string;
  programName?: string;
  managerId: string;
  managerName: string;
  startDate: string;
  endDate?: string;
  budget?: number;
  spent?: number;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  completedDate?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'at-risk';
  dependencies?: string[];
}

