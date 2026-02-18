
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-slate-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Nouveau : Consultant Stratégique IA intégré</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight mb-8">
            Illuminez votre <br />
            <span className="text-indigo-600">influence</span> digitale.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Nous ne nous contentons pas de communiquer. Nous créons des connexions émotionnelles qui propulsent votre marque au-devant de la scène.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-100">
              Découvrir nos expertises <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:border-indigo-600 hover:text-indigo-600 transition-all">
              Voir nos réalisations
            </a>
          </div>
        </div>
        
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 scale-95 transition-transform hover:rotate-0 hover:scale-100 duration-500">
            <img 
              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000" 
              alt="Team working" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-slate-100 hidden sm:block">
            <div className="text-3xl font-bold text-indigo-600">150+</div>
            <div className="text-sm font-semibold text-slate-500">Marques accompagnées avec succès</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
