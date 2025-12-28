// Training & Certification Management types

export interface Training {
  id: string;
  title: string;
  description: string;
  category: string;
  instructor?: string;
  location: string;
  scheduledDate: string;
  duration: number; // in hours
  capacity: number;
  enrolledCount: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  requiredClearance?: string;
  prerequisites?: string[];
}

export interface Certification {
  id: string;
  userId: string;
  userName: string;
  certificationType: string;
  certificationName: string;
  issuedDate: string;
  expiryDate: string;
  issuingAuthority: string;
  certificateNumber?: string;
  status: 'active' | 'expired' | 'revoked';
  renewalRequired: boolean;
  renewalDeadline?: string;
}

export interface TrainingRecord {
  id: string;
  trainingId: string;
  trainingTitle: string;
  userId: string;
  userName: string;
  enrolledDate: string;
  completionDate?: string;
  status: 'enrolled' | 'completed' | 'no-show' | 'cancelled';
  score?: number;
  passed: boolean;
  certificateIssued?: boolean;
}

export interface RoleRequirement {
  roleId: string;
  roleName: string;
  requiredCertifications: string[];
  requiredTrainings: string[];
}

