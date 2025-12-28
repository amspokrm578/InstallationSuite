import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { moduleConfig } from '../../config/routes';
import { useAuth } from '../../contexts/AuthContext';
import type { ModuleId } from '../../types/rbac';
import PageHeader from './PageHeader';
import './Dashboard.css';

export default function Dashboard() {
  const { canView } = useAuth();

  // Filter modules based on user permissions
  const accessibleModules = useMemo(() => {
    return moduleConfig.filter((module) => {
      return canView(module.id as ModuleId);
    });
  }, [canView]);

  return (
    <div className="dashboard-container">
      <PageHeader 
        title="Installation Management Dashboard"
        subtitle="Central command center for all operations"
        icon="🏛️"
      />

      <div className="dashboard-grid">
        {accessibleModules.length > 0 ? (
          accessibleModules.map((module) => (
            <Link key={module.id} to={module.path} className="module-card">
              <div className="module-card-icon">{module.icon}</div>
              <div className="module-card-content">
                <h3 className="module-card-title">{module.name}</h3>
                <p className="module-card-description">{module.description}</p>
              </div>
              <div className="module-card-arrow">→</div>
            </Link>
          ))
        ) : (
          <div className="no-modules-message">
            <p>You don't have access to any modules. Please contact your administrator.</p>
          </div>
        )}
      </div>

      <div className="dashboard-quick-stats">
        <div className="stat-card">
          <div className="stat-value">24</div>
          <div className="stat-label">Active Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">5</div>
          <div className="stat-label">Pending Approvals</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Active Incidents</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">98%</div>
          <div className="stat-label">System Uptime</div>
        </div>
      </div>
    </div>
  );
}

