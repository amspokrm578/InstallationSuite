import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User } from '../types';
import type { RoleId, UserPermissions, ModuleId, PermissionLevel } from '../types/rbac';
import { calculateUserPermissions } from '../utils/permissions';

interface AuthContextType {
  user: User | null;
  permissions: UserPermissions | null;
  setUser: (user: User | null) => void;
  hasModulePermission: (moduleId: ModuleId, requiredLevel: PermissionLevel) => boolean;
  getModulePermission: (moduleId: ModuleId) => PermissionLevel;
  canView: (moduleId: ModuleId) => boolean;
  canModify: (moduleId: ModuleId) => boolean;
  canAdmin: (moduleId: ModuleId) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<UserPermissions | null>(null);

  // Initialize with sample user for development
  useEffect(() => {
    // In a real app, this would come from authentication service
    const sampleUser: User = {
      id: 'user-123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      badgeId: 'BADGE-001',
      clearanceLevel: 'SECRET',
      roles: ['admin_office', 'facilities_engineering'], // Sample roles
      department: 'Administrative Office',
      active: true,
    };
    setUserState(sampleUser);
  }, []);

  // Recalculate permissions when user changes
  useEffect(() => {
    if (user && user.roles) {
      const modulePermissions = calculateUserPermissions(user.roles as RoleId[]);
      setPermissions({
        roles: user.roles as RoleId[],
        modulePermissions,
      });
    } else {
      setPermissions(null);
    }
  }, [user]);

  const setUser = (newUser: User | null) => {
    setUserState(newUser);
  };

  const hasModulePermission = (
    moduleId: ModuleId,
    requiredLevel: PermissionLevel
  ): boolean => {
    if (!permissions) return false;
    const userPermission = permissions.modulePermissions[moduleId];
    if (!userPermission || userPermission === 'n/a') return false;

    const hierarchy: PermissionLevel[] = ['n/a', 'view', 'modify', 'admin'];
    const userLevel = hierarchy.indexOf(userPermission);
    const requiredLevelIndex = hierarchy.indexOf(requiredLevel);
    return userLevel >= requiredLevelIndex;
  };

  const getModulePermission = (moduleId: ModuleId): PermissionLevel => {
    if (!permissions) return 'n/a';
    return permissions.modulePermissions[moduleId] || 'n/a';
  };

  const canView = (moduleId: ModuleId): boolean => {
    return hasModulePermission(moduleId, 'view');
  };

  const canModify = (moduleId: ModuleId): boolean => {
    return hasModulePermission(moduleId, 'modify');
  };

  const canAdmin = (moduleId: ModuleId): boolean => {
    return hasModulePermission(moduleId, 'admin');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        permissions,
        setUser,
        hasModulePermission,
        getModulePermission,
        canView,
        canModify,
        canAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

