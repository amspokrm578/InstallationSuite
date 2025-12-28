import type { PermissionLevel, ModuleId, RoleId, UserPermissions } from '../types/rbac';
import { roles } from '../config/roles';

/**
 * Calculate the highest permission level from multiple roles for a given module
 */
function getHighestPermission(
  permission1: PermissionLevel,
  permission2: PermissionLevel
): PermissionLevel {
  const hierarchy: PermissionLevel[] = ['n/a', 'view', 'modify', 'admin'];
  const index1 = hierarchy.indexOf(permission1);
  const index2 = hierarchy.indexOf(permission2);
  return hierarchy[Math.max(index1, index2)] as PermissionLevel;
}

/**
 * Calculate combined permissions for a user with multiple roles
 */
export function calculateUserPermissions(userRoles: RoleId[]): Record<ModuleId, PermissionLevel> {
  const modulePermissions: Record<ModuleId, PermissionLevel> = {
    personnel: 'n/a',
    assets: 'n/a',
    facilities: 'n/a',
    security: 'n/a',
    workforce: 'n/a',
    compliance: 'n/a',
    training: 'n/a',
    budget: 'n/a',
    logistics: 'n/a',
    emergency: 'n/a',
  };

  userRoles.forEach((roleId) => {
    const role = roles[roleId];
    if (role) {
      Object.keys(modulePermissions).forEach((moduleId) => {
        const currentPermission = modulePermissions[moduleId as ModuleId];
        const rolePermission = role.permissions[moduleId as ModuleId];
        modulePermissions[moduleId as ModuleId] = getHighestPermission(
          currentPermission,
          rolePermission
        );
      });
    }
  });

  return modulePermissions;
}

/**
 * Check if a user has at least the required permission level for a module
 */
export function hasPermission(
  userPermission: PermissionLevel,
  requiredPermission: PermissionLevel
): boolean {
  const hierarchy: PermissionLevel[] = ['n/a', 'view', 'modify', 'admin'];
  const userLevel = hierarchy.indexOf(userPermission);
  const requiredLevel = hierarchy.indexOf(requiredPermission);
  return userLevel >= requiredLevel;
}

/**
 * Check if user can view a module
 */
export function canView(userPermission: PermissionLevel): boolean {
  return hasPermission(userPermission, 'view');
}

/**
 * Check if user can modify a module
 */
export function canModify(userPermission: PermissionLevel): boolean {
  return hasPermission(userPermission, 'modify');
}

/**
 * Check if user can admin a module
 */
export function canAdmin(userPermission: PermissionLevel): boolean {
  return hasPermission(userPermission, 'admin');
}

/**
 * Get permission level for a specific module from user permissions
 */
export function getModulePermission(
  userPermissions: UserPermissions,
  moduleId: ModuleId
): PermissionLevel {
  return userPermissions.modulePermissions[moduleId] || 'n/a';
}

/**
 * Check if user has required permission for a module
 */
export function checkModulePermission(
  userPermissions: UserPermissions,
  moduleId: ModuleId,
  requiredLevel: PermissionLevel
): boolean {
  const userPermission = getModulePermission(userPermissions, moduleId);
  return hasPermission(userPermission, requiredLevel);
}

