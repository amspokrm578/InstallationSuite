// Compliance, Governance, and Audit types

export interface AuditRecord {
  id: string;
  auditId: string;
  auditType: 'access' | 'data_change' | 'policy' | 'security' | 'compliance';
  entityType: string;
  entityId: string;
  action: string;
  performedBy: string;
  performedByName: string;
  timestamp: string;
  details: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}

export interface ComplianceCheck {
  id: string;
  checkName: string;
  category: string;
  status: 'pass' | 'fail' | 'warning' | 'not_applicable';
  lastChecked: string;
  nextCheckDue: string;
  findings?: string[];
  remediation?: string;
}

export interface PolicyDocument {
  id: string;
  title: string;
  category: string;
  version: string;
  effectiveDate: string;
  expiryDate?: string;
  status: 'draft' | 'active' | 'archived';
  content: string;
  lastModified: string;
  lastModifiedBy: string;
  approvalChain: string[];
}

export interface AuditPackage {
  id: string;
  packageName: string;
  auditType: string;
  startDate: string;
  endDate: string;
  generatedBy: string;
  generatedAt: string;
  records: string[];
  status: 'generating' | 'ready' | 'delivered';
}

