import Navigation from './Components/Navigation';
import Tasks from './Components/Tasks';
import './App.css';

function App() {
  // Sample current user - in a real app, this would come from authentication
  const currentUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const userId = 'user-123'; // In a real app, this would come from auth context

  return (
    <div className="app">
      <Navigation currentUser={currentUser} />
      <main className="main-content">
        <Tasks userId={userId} />
      </main>
    </div>
  );
}

export default App;
