import type { ReactNode } from 'react';
import PageHeader from '../Components/Layout/PageHeader';

interface ModulePageProps {
  title: string;
  subtitle?: string;
  icon?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export default function ModulePage({ title, subtitle, icon, children, actions }: ModulePageProps) {
  return (
    <div className="module-page-container">
      <PageHeader title={title} subtitle={subtitle} icon={icon} actions={actions} />
      <div className="module-page-content">
        {children}
      </div>
    </div>
  );
}

