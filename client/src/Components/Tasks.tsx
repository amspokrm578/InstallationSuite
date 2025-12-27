import { useState } from 'react';
import type { Task } from '../types/task';
import './Tasks.css';

interface TasksProps {
  userId: string;
}

function Tasks({ userId }: TasksProps) {
  // Sample tasks data - in a real app, this would come from an API
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete project documentation',
      description: 'Write comprehensive documentation for the new feature',
      assignedTo: userId,
      status: 'in-progress',
      dueDate: '2024-12-20',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Review code changes',
      description: 'Review pull request #123 from the team',
      assignedTo: userId,
      status: 'pending',
      dueDate: '2024-12-18',
      priority: 'medium',
    },
    {
      id: '3',
      title: 'Update user interface',
      description: 'Implement new design mockups for dashboard',
      assignedTo: userId,
      status: 'pending',
      dueDate: '2024-12-22',
      priority: 'high',
    },
    {
      id: '4',
      title: 'Team meeting preparation',
      description: 'Prepare agenda and materials for weekly team meeting',
      assignedTo: userId,
      status: 'completed',
      dueDate: '2024-12-15',
      priority: 'low',
    },
  ]);

  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');
  const [sortBy, setSortBy] = useState<'priority' | 'dueDate'>('priority');

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : task.status === filter
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    } else {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
  });

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return '#10b981';
      case 'in-progress':
        return '#3b82f6';
      case 'pending':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const statusOrder: Task['status'][] = ['pending', 'in-progress', 'completed'];
        const currentIndex = statusOrder.indexOf(task.status);
        const nextIndex = (currentIndex + 1) % statusOrder.length;
        return { ...task, status: statusOrder[nextIndex] };
      }
      return task;
    }));
  };

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <div>
          <h1>My Tasks</h1>
          <p className="tasks-subtitle">Tasks assigned to you</p>
        </div>
        <div className="tasks-controls">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending ({tasks.filter(t => t.status === 'pending').length})
            </button>
            <button
              className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
              onClick={() => setFilter('in-progress')}
            >
              In Progress ({tasks.filter(t => t.status === 'in-progress').length})
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({tasks.filter(t => t.status === 'completed').length})
            </button>
          </div>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'priority' | 'dueDate')}
          >
            <option value="priority">Sort by Priority</option>
            <option value="dueDate">Sort by Due Date</option>
          </select>
        </div>
      </div>

      <div className="tasks-grid">
        {sortedTasks.length === 0 ? (
          <div className="no-tasks">
            <p>No tasks found</p>
          </div>
        ) : (
          sortedTasks.map(task => (
            <div key={task.id} className="task-card">
              <div className="task-header">
                <h3 className="task-title">{task.title}</h3>
                <div className="task-badges">
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(task.status) }}
                  >
                    {task.status.replace('-', ' ')}
                  </span>
                  <span
                    className="priority-badge"
                    style={{ backgroundColor: getPriorityColor(task.priority) }}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
              
              <p className="task-description">{task.description}</p>
              
              {task.dueDate && (
                <div className="task-due-date">
                  <span className="due-date-label">Due:</span>
                  <span className="due-date-value">
                    {new Date(task.dueDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              )}
              
              <div className="task-actions">
                <button
                  className="task-action-btn"
                  onClick={() => toggleTaskStatus(task.id)}
                >
                  {task.status === 'completed' ? '✓ Completed' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tasks;

