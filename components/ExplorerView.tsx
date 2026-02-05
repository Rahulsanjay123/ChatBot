
import React, { useState } from 'react';
import { SKILL_DATASET } from '../constants';
import { SkillData } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ExplorerView: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillData>(SKILL_DATASET[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = SKILL_DATASET.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Skill List */}
      <div className="lg:col-span-1 space-y-4">
        <div className="relative">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input
            type="text"
            placeholder="Search skills or categories..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
          {filteredSkills.map(skill => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`w-full text-left p-4 rounded-2xl transition-all border ${
                selectedSkill.name === skill.name
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                  : 'bg-white border-slate-100 text-slate-900 hover:border-indigo-300'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                  <p className={`text-sm ${selectedSkill.name === skill.name ? 'text-indigo-100' : 'text-slate-500'}`}>
                    {skill.category}
                  </p>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  selectedSkill.name === skill.name ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  Demand: {skill.currentDemand}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Content */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedSkill.category}
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-2">{selectedSkill.name}</h2>
            </div>
            <div className="flex space-x-4">
              <div className="text-center bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Growth</p>
                <p className="text-2xl font-black text-emerald-600">+{selectedSkill.growthRate}%</p>
              </div>
              <div className="text-center bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Stability</p>
                <p className="text-2xl font-black text-indigo-600">High</p>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {selectedSkill.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Historical Performance</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={selectedSkill.historicalDemand}>
                    <defs>
                      <linearGradient id="colorExpl" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} fontSize={10} stroke="#94a3b8" />
                    <YAxis hide />
                    <Tooltip cursor={false} contentStyle={{ borderRadius: '10px', fontSize: '12px' }} />
                    <Area type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={2} fill="url(#colorExpl)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Top Industries</h4>
              <div className="space-y-3">
                {selectedSkill.topIndustries.map((ind, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-700 font-medium">{ind}</span>
                    <i className="fas fa-chevron-right text-slate-300 text-xs"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex justify-end">
            <button className="flex items-center space-x-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
              <span>View Full Whitepaper</span>
              <i className="fas fa-external-link-alt text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorerView;
