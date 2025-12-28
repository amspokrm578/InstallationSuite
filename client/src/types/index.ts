// Shared types across all modules

import type { RoleId } from './rbac';

export interface User {
  id: string;
  name: string;
  email: string;
  badgeId?: string;
  clearanceLevel?: 'PUBLIC' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';
  roles: RoleId[];
  department?: string;
  active: boolean;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  resource: string;
  resourceId: string;
  timestamp: string;
  details?: Record<string, unknown>;
}

export interface Approval {
  id: string;
  requestedBy: string;
  requestedByName: string;
  status: 'pending' | 'approved' | 'rejected';
  approvers: ApprovalStep[];
  currentStep: number;
  createdAt: string;
  completedAt?: string;
}

export interface ApprovalStep {
  approverId: string;
  approverName: string;
  status: 'pending' | 'approved' | 'rejected';
  comments?: string;
  timestamp?: string;
}

export type Status = 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type Priority = 'low' | 'medium' | 'high' | 'critical';

