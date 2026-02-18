
import React from 'react';
import { Instagram, Linkedin, Twitter, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 pb-20 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">LUMINA</span>
            </div>
            <p className="text-slate-400 text-xl max-w-md leading-relaxed mb-10">
              Une agence nouvelle génération pour des marques qui n'ont pas peur de briller.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div id="contact" className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Nos Services</a></li>
                <li><a href="#portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#ai-consultant" className="text-slate-400 hover:text-white transition-colors">Consultant IA</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4">
                <li className="text-slate-400">75 Rue de Rivoli, Paris</li>
                <li className="text-slate-400">+33 (0)1 23 45 67 89</li>
                <li><a href="mailto:hello@lumina.com" className="text-indigo-400 font-bold underline">hello@lumina.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-medium">
          <p>© 2024 Lumina Stratégie. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
