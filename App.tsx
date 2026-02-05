
import React, { useState, useEffect } from 'react';
import { ViewType, User } from './types';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ExplorerView from './components/ExplorerView';
import AIForecastingView from './components/AIForecastingView';
import DatasetView from './components/DatasetView';
import AboutView from './components/AboutView';
import AuthScreen from './components/AuthScreen';
import { getCurrentUser, logout } from './services/authService';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const activeUser = getCurrentUser();
    setUser(activeUser);
    setInitialized(true);
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  if (!initialized) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-950">
        <i className="fas fa-circle-notch animate-spin text-indigo-500 text-4xl"></i>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen onAuthenticated={(u) => setUser(u)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'explorer':
        return <ExplorerView />;
      case 'ai-forecasting':
        return <AIForecastingView />;
      case 'dataset':
        return <DatasetView />;
      case 'about':
        return <AboutView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden animate-in fade-in duration-700">
      {/* Sidebar */}
      <Sidebar activeView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight capitalize">
              {currentView.replace('-', ' ')}
            </h1>
            <p className="text-slate-500 mt-1">Skill Demand Forecasting Engine v2.1</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white p-2 h-10 w-10 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center">
              <i className="fas fa-bell text-slate-500"></i>
            </button>
            <div className="flex items-center space-x-3 bg-white p-1.5 pr-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{user.name}</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">Premium Tier</p>
              </div>
              <button 
                onClick={handleLogout}
                className="ml-2 h-8 w-8 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                title="Logout"
              >
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </div>
          </div>
        </header>

        {renderView()}

        <footer className="mt-12 pt-8 border-t border-slate-200 pb-8">
          <p className="text-center text-slate-400 text-sm">
            © 2024 SkillPulse Analytics. ML Engine powered by Gemini Flash 3.0.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
