import type { Role, ModuleId, PermissionLevel } from '../types/rbac';

// Helper function to create role permissions more concisely
const createPermissions = (
  personnel: PermissionLevel,
  assets: PermissionLevel,
  facilities: PermissionLevel,
  security: PermissionLevel,
  workforce: PermissionLevel,
  compliance: PermissionLevel,
  training: PermissionLevel,
  budget: PermissionLevel,
  logistics: PermissionLevel,
  emergency: PermissionLevel
): Record<ModuleId, PermissionLevel> => ({
  personnel,
  assets,
  facilities,
  security,
  workforce,
  compliance,
  training,
  budget,
  logistics,
  emergency,
});

export const roles: Record<string, Role> = {
  system_admin: {
    id: 'system_admin',
    name: 'System Administrator',
    description: 'Full administrative access to all modules and system functions',
    permissions: createPermissions('admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'admin'),
  },
  security_manager: {
    id: 'security_manager',
    name: 'Security Manager / Physical Security Office',
    description: 'Manages security operations, personnel access, and compliance',
    permissions: createPermissions('modify', 'view', 'view', 'admin', 'modify', 'modify', 'view', 'n/a', 'view', 'modify'),
  },
  hr: {
    id: 'hr',
    name: 'Human Resources / Personnel Office',
    description: 'Manages personnel, training, and workforce administration',
    permissions: createPermissions('modify', 'view', 'view', 'view', 'modify', 'view', 'admin', 'n/a', 'n/a', 'view'),
  },
  it_iam: {
    id: 'it_iam',
    name: 'IT Identity & Access Management (IAM)',
    description: 'Manages identity, access control, and IT security',
    permissions: createPermissions('admin', 'view', 'n/a', 'modify', 'modify', 'modify', 'view', 'n/a', 'n/a', 'view'),
  },
  property_custodian: {
    id: 'property_custodian',
    name: 'Property Custodian / Asset Manager',
    description: 'Manages assets, equipment, and inventory',
    permissions: createPermissions('view', 'admin', 'n/a', 'view', 'view', 'view', 'view', 'view', 'modify', 'n/a'),
  },
  facilities_engineering: {
    id: 'facilities_engineering',
    name: 'Facilities Engineering / Base Ops Support (BOS)',
    description: 'Manages facilities operations and maintenance',
    permissions: createPermissions('view', 'view', 'admin', 'view', 'modify', 'view', 'n/a', 'n/a', 'view', 'modify'),
  },
  security_response: {
    id: 'security_response',
    name: 'Security Response / Incident Response Team',
    description: 'Responds to security incidents and manages emergency security operations',
    permissions: createPermissions('view', 'n/a', 'view', 'admin', 'view', 'modify', 'n/a', 'n/a', 'n/a', 'admin'),
  },
  admin_office: {
    id: 'admin_office',
    name: 'Administrative Office / Service Desk',
    description: 'Handles administrative requests and service desk operations',
    permissions: createPermissions('view', 'view', 'view', 'modify', 'admin', 'view', 'view', 'view', 'view', 'view'),
  },
  project_manager: {
    id: 'project_manager',
    name: 'Project/Program Manager (PMO)',
    description: 'Manages projects, budgets, and program execution',
    permissions: createPermissions('view', 'modify', 'modify', 'view', 'modify', 'modify', 'modify', 'admin', 'modify', 'modify'),
  },
  compliance: {
    id: 'compliance',
    name: 'Compliance / Records / Inspector General (IG)',
    description: 'Oversees compliance, audits, and records management',
    permissions: createPermissions('view', 'view', 'view', 'view', 'view', 'admin', 'view', 'view', 'view', 'view'),
  },
  training_officer: {
    id: 'training_officer',
    name: 'Training Officer / Readiness Manager',
    description: 'Manages training programs and certification tracking',
    permissions: createPermissions('view', 'view', 'view', 'n/a', 'modify', 'modify', 'admin', 'view', 'view', 'modify'),
  },
  finance: {
    id: 'finance',
    name: 'Finance / Comptroller / Budget Office',
    description: 'Manages budgets, financial resources, and procurement approvals',
    permissions: createPermissions('view', 'view', 'view', 'view', 'modify', 'view', 'view', 'admin', 'view', 'view'),
  },
  logistics: {
    id: 'logistics',
    name: 'Logistics / Warehouse / Supply Depot',
    description: 'Manages supply chain, inventory, and logistics operations',
    permissions: createPermissions('n/a', 'modify', 'view', 'view', 'view', 'view', 'view', 'view', 'admin', 'modify'),
  },
  emergency_management: {
    id: 'emergency_management',
    name: 'Emergency Management / Safety / Fire',
    description: 'Manages emergency response, safety, and COOP operations',
    permissions: createPermissions('view', 'view', 'view', 'modify', 'modify', 'view', 'modify', 'view', 'view', 'admin'),
  },
  executive_leadership: {
    id: 'executive_leadership',
    name: 'Executive Leadership / Command Staff',
    description: 'Executive oversight and strategic decision-making',
    permissions: createPermissions('view', 'view', 'view', 'modify', 'modify', 'modify', 'modify', 'modify', 'view', 'admin'),
  },
};

export function getRole(roleId: string): Role | undefined {
  return roles[roleId];
}

export function getAllRoles(): Role[] {
  return Object.values(roles);
}

