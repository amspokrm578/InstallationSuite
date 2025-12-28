import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Dashboard from './Components/Layout/Dashboard';
import PersonnelPage from './pages/PersonnelPage';
import AssetsPage from './pages/AssetsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import SecurityPage from './pages/SecurityPage';
import WorkforcePage from './pages/WorkforcePage';
import CompliancePage from './pages/CompliancePage';
import TrainingPage from './pages/TrainingPage';
import BudgetPage from './pages/BudgetPage';
import LogisticsPage from './pages/LogisticsPage';
import EmergencyPage from './pages/EmergencyPage';
import RolesPage from './pages/RolesPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { routes } from './config/routes';
import { useAuth } from './contexts/AuthContext';
import './App.css';

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="app">
      <Navigation currentUser={user ? { name: user.name, email: user.email } : undefined} />
      <main className="main-content">
        <Routes>
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route 
            path={routes.personnel} 
            element={
              <ProtectedRoute moduleId="personnel" requiredLevel="view">
                <PersonnelPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.assets} 
            element={
              <ProtectedRoute moduleId="assets" requiredLevel="view">
                <AssetsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.facilities} 
            element={
              <ProtectedRoute moduleId="facilities" requiredLevel="view">
                <FacilitiesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.security} 
            element={
              <ProtectedRoute moduleId="security" requiredLevel="view">
                <SecurityPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.workforce} 
            element={
              <ProtectedRoute moduleId="workforce" requiredLevel="view">
                <WorkforcePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.compliance} 
            element={
              <ProtectedRoute moduleId="compliance" requiredLevel="view">
                <CompliancePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.training} 
            element={
              <ProtectedRoute moduleId="training" requiredLevel="view">
                <TrainingPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.budget} 
            element={
              <ProtectedRoute moduleId="budget" requiredLevel="view">
                <BudgetPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.logistics} 
            element={
              <ProtectedRoute moduleId="logistics" requiredLevel="view">
                <LogisticsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={routes.emergency} 
            element={
              <ProtectedRoute moduleId="emergency" requiredLevel="view">
                <EmergencyPage />
              </ProtectedRoute>
            } 
          />
          <Route path={routes.tasks} element={<WorkforcePage />} />
          <Route path="/roles" element={<RolesPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
