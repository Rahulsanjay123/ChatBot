
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard' as ViewType, label: 'Market Overview', icon: 'fa-chart-pie' },
    { id: 'explorer' as ViewType, label: 'Skill Explorer', icon: 'fa-compass' },
    { id: 'ai-forecasting' as ViewType, label: 'AI Forecasting', icon: 'fa-robot' },
    { id: 'dataset' as ViewType, label: 'Raw Dataset', icon: 'fa-database' },
    { id: 'about' as ViewType, label: 'Project Info', icon: 'fa-info-circle' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-10">
          <div className="h-8 w-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <i className="fas fa-bolt text-white"></i>
          </div>
          <span className="text-xl font-bold text-white tracking-wider">SKILLPULSE</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeView === item.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <i className={`fas ${item.icon} w-5`}></i>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">System Status</p>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300">ML Pipeline Active</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
