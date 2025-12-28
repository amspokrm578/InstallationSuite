import ModulePage from './ModulePage';
import Tasks from '../Components/Tasks';
import '../styles/module-pages.css';

export default function WorkforcePage() {
  const userId = 'user-123'; // In a real app, this would come from auth context

  return (
    <ModulePage
      title="Workforce Tasking & Administrative Requests"
      subtitle="Task delegation, workflow routing, and administrative requests"
      icon="📋"
    >
      <Tasks userId={userId} />
    </ModulePage>
  );
}

