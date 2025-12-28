import ModulePlaceholder from './ModulePlaceholder';
import { moduleData } from '../config/moduleData';

export default function BudgetPage() {
  const data = moduleData.budget;
  return (
    <ModulePlaceholder
      moduleId={data.id}
      title={data.title}
      subtitle={data.subtitle}
      icon={data.icon}
      description={data.description}
      features={data.features}
    />
  );
}

