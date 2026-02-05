
import React from 'react';
import { SKILL_DATASET } from '../constants';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

const DashboardView: React.FC = () => {
  const topGrowth = [...SKILL_DATASET].sort((a, b) => b.growthRate - a.growthRate).slice(0, 4);

  // Aggregated data for the main chart (Average of all skills over time)
  const years = [2020, 2021, 2022, 2023, 2024];
  const chartData = years.map(year => {
    const scores = SKILL_DATASET.map(s => s.historicalDemand.find(h => h.year === year)?.score || 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return { year, score: Math.round(avg) };
  });

  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm font-medium">Global Skill Index</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">87.4</h3>
          <div className="flex items-center mt-2 text-emerald-600 text-sm">
            <i className="fas fa-arrow-up mr-1"></i>
            <span>4.2% since 2023</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm font-medium">Active Skills Monitored</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{SKILL_DATASET.length}</h3>
          <p className="text-slate-400 text-sm mt-2">Source: LinkedIn API + Kaggle</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm font-medium">Avg Growth Rate</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">28.4%</h3>
          <div className="flex items-center mt-2 text-emerald-600 text-sm">
            <i className="fas fa-bolt mr-1"></i>
            <span>High Volatility</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm font-medium">Market Readiness</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">High</h3>
          <div className="flex items-center mt-2 text-slate-400 text-sm">
            <span>Stable Supply</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Aggregate Demand Trend (2020-2024)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={12} dy={10} />
                <YAxis axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={12} dx={-10} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: '600' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Growth Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Hot Skills Growth (%)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topGrowth} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} stroke="#475569" fontSize={12} width={100} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px' }} />
                <Bar dataKey="growthRate" radius={[0, 4, 4, 0]} barSize={24}>
                  {topGrowth.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Industry Distribution */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Trending Skills by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_DATASET.map(skill => (
            <div key={skill.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 shadow-sm text-indigo-600 font-bold">
                  {skill.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{skill.name}</p>
                  <p className="text-xs text-slate-500">{skill.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{skill.currentDemand}/100</p>
                <p className={`text-xs ${skill.growthRate > 20 ? 'text-emerald-600' : 'text-indigo-600'} font-medium`}>
                  +{skill.growthRate}% YoY
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
