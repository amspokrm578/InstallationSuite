import type { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import type { ModuleId, PermissionLevel } from '../types/rbac';

interface PermissionGuardProps {
  moduleId: ModuleId;
  requiredLevel: PermissionLevel;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component that conditionally renders children based on user permissions
 */
export default function PermissionGuard({
  moduleId,
  requiredLevel,
  children,
  fallback = null,
}: PermissionGuardProps) {
  const { hasModulePermission } = useAuth();

  if (hasModulePermission(moduleId, requiredLevel)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

