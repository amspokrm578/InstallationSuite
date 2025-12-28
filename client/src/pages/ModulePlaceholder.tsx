import type { ReactNode } from 'react';
import type { Feature } from '../config/moduleData';
import ModulePage from './ModulePage';
import '../styles/module-pages.css';

interface ModulePlaceholderProps {
  moduleId: string;
  title: string;
  subtitle?: string;
  icon?: string;
  description: string;
  features: Feature[];
  customContent?: ReactNode;
}

export default function ModulePlaceholder({
  moduleId,
  title,
  subtitle,
  icon,
  description,
  features,
  customContent,
}: ModulePlaceholderProps) {
  return (
    <ModulePage title={title} subtitle={subtitle} icon={icon}>
      <div className="module-placeholder">
        <div className="placeholder-content">
          <h2>{title}</h2>
          <p>{description}</p>
          
          {customContent || (
            <div className="feature-list">
              {features.map((feature, index) => (
                <div key={`${moduleId}-feature-${index}`} className="feature-item">
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ModulePage>
  );
}

