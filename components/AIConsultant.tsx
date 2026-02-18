
import React, { useState } from 'react';
import { BrainCircuit, Loader2, CheckCircle2, Send } from 'lucide-react';
import { analyzeProject } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    try {
      const analysis = await analyzeProject(input);
      setResult(analysis);
    } catch (error) {
      alert("Erreur lors de l'analyse. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 px-6 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-indigo-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-500 rounded-lg">
            <BrainCircuit className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-black tracking-tight">Consultant Stratégique IA</h2>
        </div>
        
        <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
          Décrivez brièvement votre projet ou votre problématique de communication. Notre IA Lumina, entraînée sur les meilleures stratégies mondiales, vous donnera un premier aperçu stratégique instantané.
        </p>

        <form onSubmit={handleAnalyze} className="mb-12">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Je lance une marque de vêtements éco-responsables et je veux toucher les 18-25 ans..."
              className="w-full bg-white/10 border border-indigo-400/30 rounded-2xl p-6 text-lg text-white placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all min-h-[150px]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute bottom-4 right-4 bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-50 disabled:opacity-50 transition-all shadow-lg"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Analyser</>}
            </button>
          </div>
        </form>

        {result && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 animate-fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-2">01. Audit Flash</h4>
                  <p className="text-indigo-50 leading-relaxed">{result.audit}</p>
                </div>
                <div>
                  <h4 className="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-2">02. Concept Créatif</h4>
                  <p className="text-indigo-50 leading-relaxed">{result.creation}</p>
                </div>
                <div>
                  <h4 className="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-2">03. Diffusion</h4>
                  <p className="text-indigo-50 leading-relaxed">{result.diffusion}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-indigo-500/20 rounded-2xl p-8 text-center border border-indigo-500/30">
                <div className="text-sm font-bold text-indigo-300 uppercase mb-4">Potentiel d'Impact</div>
                <div className="text-7xl font-black text-white mb-4">{result.potentialScore}/10</div>
                <div className="flex items-center gap-2 text-indigo-100 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Stratégie viable détectée
                </div>
                <button className="mt-8 bg-white text-indigo-900 w-full py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                  Discuter avec un expert Lumina
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConsultant;
