
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Impact visuel, <br />résultats réels.</h3>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold text-sm">Tous</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-bold text-sm border border-slate-200">Branding</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-bold text-sm border border-slate-200">Digital</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-indigo-400 text-sm font-bold mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-black">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
