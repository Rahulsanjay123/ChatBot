
import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Report Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Technical Documentation & Project Report</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
          A comprehensive overview of the architecture, algorithms, and methodologies used in the SkillPulse Forecasting System.
        </p>
        <div className="flex justify-center space-x-2 pt-4">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">v2.1 Stable</span>
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Academic Review Ready</span>
        </div>
      </div>

      {/* 1. Abstract */}
      <section className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100">
        <div className="flex items-start space-x-6">
          <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-file-alt text-xl"></i>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">1. Project Abstract</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              SkillPulse is an advanced labor market simulation tool that utilizes <strong>Generative Artificial Intelligence</strong> 
              to predict the trajectory of professional skills. In a rapidly evolving digital economy, traditional 
              statistical models often fail to capture qualitative shifts like the "AI Revolution." This project 
              combines quantitative historical data with qualitative LLM reasoning to provide a 360-degree 
              view of skill demand.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[32px] p-10 text-white space-y-6">
          <h3 className="text-2xl font-bold">2. System Architecture</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <i className="fab fa-react text-indigo-400"></i>
              </div>
              <div>
                <h4 className="font-bold">Frontend Framework</h4>
                <p className="text-sm text-slate-400">React 19 + TypeScript for type-safe UI management.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <i className="fas fa-brain text-emerald-400"></i>
              </div>
              <div>
                <h4 className="font-bold">ML Reasoning Layer</h4>
                <p className="text-sm text-slate-400">Gemini 3 Flash API for predictive logic.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <i className="fas fa-database text-amber-400"></i>
              </div>
              <div>
                <h4 className="font-bold">Persistence Strategy</h4>
                <p className="text-sm text-slate-400">Browser LocalStorage for authentication & session states.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-[32px] p-10 space-y-6 border border-indigo-100">
          <h3 className="text-2xl font-bold text-indigo-900">3. Data Visualization</h3>
          <p className="text-indigo-800/70 leading-relaxed">
            We utilized <strong>Recharts</strong> to translate complex multi-dimensional datasets into 
            intuitive visual signals. The "Historical Demand" chart utilizes a Cubic Interpolation 
            Algorithm (Monotone) to smooth out volatility in skill adoption rates.
          </p>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-indigo-100 flex items-center justify-center">
            <i className="fas fa-chart-line text-4xl text-indigo-500"></i>
            <span className="ml-4 font-bold text-slate-700">Predictive Visualization Engine Active</span>
          </div>
        </div>
      </section>

      {/* 4. Methodology */}
      <section className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100 space-y-8">
        <h3 className="text-2xl font-bold text-slate-900">4. Research Methodology & Algorithm</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-black text-indigo-600 text-sm uppercase tracking-widest">Phase 1: Input</h4>
            <p className="text-slate-600 text-sm">Normalization of raw Kaggle CSV data into JSON objects containing demand scores and growth deltas.</p>
          </div>
          <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-black text-indigo-600 text-sm uppercase tracking-widest">Phase 2: Inference</h4>
            <p className="text-slate-600 text-sm">Execution of Zero-shot Chain-of-Thought prompting using Gemini 3's high-reasoning context window.</p>
          </div>
          <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-black text-indigo-600 text-sm uppercase tracking-widest">Phase 3: Validation</h4>
            <p className="text-slate-600 text-sm">JSON schema validation ensures the output adheres to business-ready forecasting structures.</p>
          </div>
        </div>

        <div className="p-8 bg-indigo-900 rounded-3xl text-white">
          <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <i className="fas fa-code"></i>
            <span>Algorithm Pseudo-code</span>
          </h4>
          <pre className="text-sm text-indigo-200 overflow-x-auto font-mono leading-relaxed">
{`Algorithm Forecast(SkillData S):
  1. Define Context = S.HistoricalData + S.MarketDescription
  2. Request Model(Gemini-3-Flash) 
     WITH Prompt(MarketReasoning, FutureTrendPrediction)
     CONSTRAINT(Schema: ForecastResponse)
  3. Parse Result -> Map(Trend, Roadmap, ConfidenceIndex)
  4. Return Object for UI Hydration`}
          </pre>
        </div>
      </section>

      {/* 5. Conclusion */}
      <section className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100 text-center space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">5. Conclusion & Future Work</h3>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          The SkillPulse project demonstrates that Generative AI can serve as a powerful alternative 
          to traditional static statistical models in highly dynamic domains like professional labor markets. 
          Future iterations will focus on integrating real-time job board APIs and multi-modal analysis of 
          educational curriculum trends.
        </p>
        <div className="pt-6">
          <button 
            onClick={() => window.print()}
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center space-x-2 mx-auto no-print"
          >
            <i className="fas fa-print"></i>
            <span>Download Report (Print to PDF)</span>
          </button>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          aside, nav, .no-print { display: none !important; }
          main { width: 100% !important; padding: 0 !important; }
          .max-w-5xl { max-width: 100% !important; }
        }
      `}} />
    </div>
  );
};

export default AboutView;
