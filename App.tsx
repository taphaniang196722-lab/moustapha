
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIConsultant />
        <Portfolio />
        
        {/* About Agency Section - Inline for simplicity but high impact */}
        <section id="agency" className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" alt="Meeting" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full flex items-center justify-center p-6 text-white text-center font-bold text-sm rotate-12 shadow-2xl">
                L'audace au service de votre image
              </div>
            </div>
            <div>
              <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">L'Agence</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Pourquoi Lumina ?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-indigo-600">01</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Approche Hybridée</h4>
                    <p className="text-slate-600">Nous fusionnons intuition créative humaine et puissance analytique de l'IA pour des stratégies redoutablement efficaces.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-indigo-600">02</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Engagement Total</h4>
                    <p className="text-slate-600">Votre succès est notre seule métrique. Nous devenons une extension de votre équipe.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-indigo-600">03</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Vision Globale</h4>
                    <p className="text-slate-600">Du design visuel à la stratégie média, nous maîtrisons l'intégralité de la chaîne de valeur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/20 blur-[100px] pointer-events-none"></div>
            <h2 className="text-4xl lg:text-7xl font-black mb-10 max-w-4xl mx-auto leading-tight">Prêt à transformer votre présence ?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Rejoignez les marques qui osent sortir du lot. Parlons de votre prochain grand projet dès aujourd'hui.
            </p>
            <a href="mailto:hello@lumina.com" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all shadow-2xl inline-block">
              Réserver une consultation gratuite
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
