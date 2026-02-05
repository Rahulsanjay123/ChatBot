
import React, { useState } from 'react';
import { SKILL_DATASET } from '../constants';

const DatasetView: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredData = SKILL_DATASET.filter(skill => 
    skill.name.toLowerCase().includes(filter.toLowerCase()) ||
    skill.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Normalized ML Features</h2>
            <p className="text-sm text-slate-500">Data source: Integrated Global Labor Index (Kaggle-Derived)</p>
          </div>
          <div className="relative">
            <i className="fas fa-filter absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Filter dataset..." 
              className="pl-11 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm w-full md:w-64"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">Skill Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Demand Score</th>
                <th className="px-6 py-4">YoY Growth</th>
                <th className="px-6 py-4">Top Industries</th>
                <th className="px-6 py-4">Historical (2020)</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 divide-y divide-slate-100">
              {filteredData.map((skill, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-slate-900">{skill.name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase">
                      {skill.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-500 h-full" 
                          style={{ width: `${skill.currentDemand}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">{skill.currentDemand}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-emerald-600 text-xs font-bold">
                    +{skill.growthRate}%
                  </td>
                  <td className="px-6 py-4 text-xs max-w-xs truncate text-slate-500">
                    {skill.topIndustries.join(', ')}
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono text-xs">
                    {skill.historicalDemand.find(h => h.year === 2020)?.score || 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredData.length === 0 && (
          <div className="p-20 text-center">
            <i className="fas fa-database text-slate-200 text-5xl mb-4"></i>
            <p className="text-slate-400 font-medium">No records matching your filter.</p>
          </div>
        )}
      </div>

      <div className="bg-indigo-900 rounded-[32px] p-8 text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-1">Data Export Engine</h3>
          <p className="text-indigo-200 text-sm">Download the normalized dataset for external ML training.</p>
        </div>
        <button 
          onClick={() => {
            const blob = new Blob([JSON.stringify(SKILL_DATASET, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'skillpulse_kaggle_normalized.json';
            a.click();
          }}
          className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center space-x-2"
        >
          <i className="fas fa-download"></i>
          <span>Export JSON</span>
        </button>
      </div>
    </div>
  );
};

export default DatasetView;
