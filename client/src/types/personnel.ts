// Personnel & Access Management types

export interface Personnel {
  id: string;
  userId: string;
  badgeNumber: string;
  clearanceLevel: 'PUBLIC' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';
  accessZones: string[];
  badgeExpiry: string;
  clearanceExpiry?: string;
  status: 'active' | 'inactive' | 'revoked';
  issuedDate: string;
  lastVerified?: string;
}

export interface VisitorRequest {
  id: string;
  visitorName: string;
  visitorEmail: string;
  visitorPhone: string;
  company?: string;
  purpose: string;
  requestedBy: string;
  requestedByName: string;
  visitDate: string;
  escortRequired: boolean;
  escortId?: string;
  escortName?: string;
  accessZones: string[];
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  badgeIssued?: string;
  createdAt: string;
  approvedBy?: string;
  approvedAt?: string;
}

export interface AccessLog {
  id: string;
  userId: string;
  badgeNumber: string;
  accessZone: string;
  accessType: 'entry' | 'exit';
  timestamp: string;
  method: 'badge' | 'biometric' | 'manual';
  result: 'granted' | 'denied';
  reason?: string;
}

