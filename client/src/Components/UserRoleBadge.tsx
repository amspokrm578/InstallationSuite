import { useAuth } from '../contexts/AuthContext';
import { getAllRoles } from '../config/roles';
import './UserRoleBadge.css';

export default function UserRoleBadge() {
  const { user, permissions } = useAuth();

  if (!user || !permissions) return null;

  const roleDefinitions = getAllRoles();
  const userRoleDefinitions = roleDefinitions.filter((role) =>
    permissions.roles.includes(role.id)
  );

  return (
    <div className="user-role-badge">
      <div className="role-badge-title">Roles</div>
      <div className="role-badge-list">
        {userRoleDefinitions.map((role) => (
          <div key={role.id} className="role-badge-item" title={role.description}>
            {role.name}
          </div>
        ))}
      </div>
    </div>
  );
}

