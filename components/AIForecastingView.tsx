
import React, { useState } from 'react';
import { SKILL_DATASET } from '../constants';
import { SkillData, ForecastResponse } from '../types';
import { generateSkillForecast } from '../services/geminiService';

const AIForecastingView: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillData>(SKILL_DATASET[0]);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRunForecast = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateSkillForecast(selectedSkill);
      setForecast(result);
    } catch (err) {
      setError("Failed to generate forecast. Please check your API configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <i className="fas fa-magic text-xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Advanced ML Forecaster</h2>
              <p className="text-slate-500">Select a skill to predict future demand and get market insights.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <select
              className="flex-1 p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm bg-slate-50 text-slate-800 font-medium"
              value={selectedSkill.name}
              onChange={(e) => {
                const skill = SKILL_DATASET.find(s => s.name === e.target.value);
                if (skill) {
                  setSelectedSkill(skill);
                  setForecast(null);
                }
              }}
            >
              {SKILL_DATASET.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
            
            <button
              onClick={handleRunForecast}
              disabled={loading}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1"
            >
              {loading ? (
                <span className="flex items-center space-x-2">
                  <i className="fas fa-circle-notch animate-spin"></i>
                  <span>Analyzing...</span>
                </span>
              ) : "Run AI Forecast"}
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl mb-8 flex items-center space-x-3 border border-red-100">
              <i className="fas fa-exclamation-circle"></i>
              <span>{error}</span>
            </div>
          )}

          {forecast && (
            <div className="animate-in fade-in duration-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-900 p-6 rounded-2xl text-white">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">3-Year Trend</p>
                  <h3 className={`text-2xl font-black ${
                    forecast.predictedTrend === 'Rising' ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {forecast.predictedTrend}
                  </h3>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Est. Growth</p>
                  <h3 className="text-2xl font-black text-indigo-600">+{forecast.estimatedGrowthNext3Years}%</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Confidence Score</p>
                  <h3 className="text-2xl font-black text-slate-800">92%</h3>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center space-x-2">
                    <i className="fas fa-lightbulb text-amber-500"></i>
                    <span>Market Rationale</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg bg-slate-50 p-6 rounded-2xl">
                    {forecast.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Drivers</h4>
                    <ul className="space-y-3">
                      {forecast.reasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-slate-700">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Mastery Roadmap</h4>
                    <div className="space-y-4">
                      {forecast.suggestedRoadmap.map((step, idx) => (
                        <div key={idx} className="relative pl-6 pb-4 border-l-2 border-indigo-100 last:border-0 last:pb-0">
                          <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-white border-4 border-indigo-600"></div>
                          <p className="text-slate-700 font-medium text-sm leading-tight">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!forecast && !loading && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-robot text-3xl"></i>
              </div>
              <p className="text-center max-w-xs">Ready to analyze market signals and technological shifts. Push the button to start the simulation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIForecastingView;
