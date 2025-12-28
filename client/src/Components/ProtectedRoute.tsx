import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { ModuleId, PermissionLevel } from '../types/rbac';
import { routes } from '../config/routes';

interface ProtectedRouteProps {
  moduleId: ModuleId;
  requiredLevel: PermissionLevel;
  children: React.ReactNode;
}

/**
 * Route guard that redirects users without required permissions
 */
export default function ProtectedRoute({
  moduleId,
  requiredLevel,
  children,
}: ProtectedRouteProps) {
  const { hasModulePermission } = useAuth();

  if (!hasModulePermission(moduleId, requiredLevel)) {
    // Redirect to dashboard if user doesn't have permission
    return <Navigate to={routes.dashboard} replace />;
  }

  return <>{children}</>;
}

