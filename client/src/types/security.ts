// Security & Incident Response types

export interface SecurityIncident {
  id: string;
  incidentNumber: string;
  reportedBy: string;
  reportedByName: string;
  incidentType: 'unauthorized_access' | 'badge_misuse' | 'cyber_incident' | 'physical_threat' | 'safety_hazard' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location: string;
  occurredAt: string;
  reportedAt: string;
  status: 'reported' | 'investigating' | 'resolved' | 'closed';
  assignedTo?: string;
  assignedToName?: string;
  resolution?: string;
  rootCause?: string;
  correctiveActions?: string[];
}

export interface ThreatReport {
  id: string;
  reportedBy: string;
  reportedByName: string;
  threatType: string;
  description: string;
  location?: string;
  reportedAt: string;
  status: 'pending' | 'evaluated' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  evaluationNotes?: string;
}

export interface BadgeAlert {
  id: string;
  badgeNumber: string;
  userId: string;
  userName: string;
  alertType: 'unauthorized_zone' | 'expired_badge' | 'duplicate_use' | 'after_hours';
  location: string;
  timestamp: string;
  status: 'active' | 'reviewed' | 'resolved';
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
}

