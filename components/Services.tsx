
import React from 'react';
import { SERVICES, renderIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Nos Expertises</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">Des solutions sur-mesure pour <br />votre croissance.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 bg-white p-4 rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {renderIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <a href="#contact" className="text-indigo-600 font-bold text-sm inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
