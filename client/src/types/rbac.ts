// RBAC types and definitions

export type PermissionLevel = 'admin' | 'modify' | 'view' | 'n/a';

export type ModuleId = 
  | 'personnel'
  | 'assets'
  | 'facilities'
  | 'security'
  | 'workforce'
  | 'compliance'
  | 'training'
  | 'budget'
  | 'logistics'
  | 'emergency';

export type RoleId =
  | 'system_admin'
  | 'security_manager'
  | 'hr'
  | 'it_iam'
  | 'property_custodian'
  | 'facilities_engineering'
  | 'security_response'
  | 'admin_office'
  | 'project_manager'
  | 'compliance'
  | 'training_officer'
  | 'finance'
  | 'logistics'
  | 'emergency_management'
  | 'executive_leadership';

export interface Role {
  id: RoleId;
  name: string;
  description: string;
  permissions: Record<ModuleId, PermissionLevel>;
}

export interface UserPermissions {
  roles: RoleId[];
  modulePermissions: Record<ModuleId, PermissionLevel>;
}

