// Emergency Management & Continuity of Operations types

export interface EmergencyIncident {
  id: string;
  incidentNumber: string;
  incidentType: 'natural_disaster' | 'security_threat' | 'fire' | 'medical' | 'cyber' | 'other';
  severity: 'minor' | 'moderate' | 'major' | 'catastrophic';
  description: string;
  location: string;
  reportedBy: string;
  reportedByName: string;
  reportedAt: string;
  status: 'active' | 'monitoring' | 'resolved' | 'closed';
  coopActivated: boolean;
  affectedAreas: string[];
  responseTeam?: string[];
}

export interface PersonnelStatus {
  id: string;
  userId: string;
  userName: string;
  badgeNumber: string;
  location?: string;
  status: 'safe' | 'injured' | 'missing' | 'unknown';
  lastCheckedIn: string;
  checkedInBy?: string;
  notes?: string;
}

export interface COOPActivation {
  id: string;
  activationNumber: string;
  activatedBy: string;
  activatedByName: string;
  activatedAt: string;
  reason: string;
  status: 'active' | 'standby' | 'deactivated';
  deactivatedAt?: string;
  deactivatedBy?: string;
  affectedUnits: string[];
  alternateSite?: string;
}

export interface EmergencyAlert {
  id: string;
  alertType: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  broadcastTo: 'all' | 'specific_units' | 'specific_locations';
  targetAudience?: string[];
  createdBy: string;
  createdAt: string;
  expiresAt?: string;
  acknowledgedBy: string[];
}

