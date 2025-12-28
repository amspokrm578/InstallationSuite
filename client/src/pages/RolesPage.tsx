import { useAuth } from '../contexts/AuthContext';
import { getAllRoles } from '../config/roles';
import { moduleConfig } from '../config/routes';
import ModulePage from './ModulePage';
import UserRoleBadge from '../Components/UserRoleBadge';
import './RolesPage.css';

export default function RolesPage() {
  const { user, permissions, getModulePermission } = useAuth();
  const allRoles = getAllRoles();

  if (!user || !permissions) {
    return (
      <ModulePage title="Roles & Permissions" subtitle="View your assigned roles and permissions">
        <div className="roles-page-container">
          <p>No user information available.</p>
        </div>
      </ModulePage>
    );
  }

  const userRoles = allRoles.filter((role) => permissions.roles.includes(role.id));

  return (
    <ModulePage title="My Roles & Permissions" subtitle="View your assigned roles and module permissions">
      <div className="roles-page-container">
        <div className="roles-section">
          <h2>Assigned Roles</h2>
          <div className="roles-grid">
            {userRoles.map((role) => (
              <div key={role.id} className="role-card">
                <h3>{role.name}</h3>
                <p className="role-description">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="permissions-section">
          <h2>Module Permissions</h2>
          <div className="permissions-table-container">
            <table className="permissions-table">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Permission Level</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {moduleConfig.map((module) => {
                  const permission = getModulePermission(module.id as any);
                  const permissionLabel = permission.charAt(0).toUpperCase() + permission.slice(1);
                  
                  return (
                    <tr key={module.id}>
                      <td>
                        <div className="module-cell">
                          <span className="module-icon">{module.icon}</span>
                          <span className="module-name">{module.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`permission-badge permission-${permission}`}>
                          {permissionLabel}
                        </span>
                      </td>
                      <td>
                        <span className="permission-description">
                          {permission === 'admin' && 'Full administrative access - can create, modify, delete, and view all data'}
                          {permission === 'modify' && 'Can create, modify, and view data but cannot perform administrative actions'}
                          {permission === 'view' && 'Can only view data - no create, modify, or delete capabilities'}
                          {permission === 'n/a' && 'No access to this module'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ModulePage>
  );
}

