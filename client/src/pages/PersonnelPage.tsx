import ModulePlaceholder from './ModulePlaceholder';
import { moduleData } from '../config/moduleData';

export default function PersonnelPage() {
  const data = moduleData.personnel;
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

