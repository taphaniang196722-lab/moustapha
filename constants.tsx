
import React from 'react';
import { Megaphone, Monitor, Palette, BarChart3, Users, Globe } from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'L\'Agence', href: '#agency' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Consultant IA', href: '#ai-consultant' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Stratégie de Marque',
    description: 'Nous définissons l\'identité unique de votre entreprise pour captiver votre audience cible.',
    icon: 'palette'
  },
  {
    id: '2',
    title: 'Digital & Social Media',
    description: 'Une présence en ligne percutante pour transformer vos abonnés en ambassadeurs dévoués.',
    icon: 'monitor'
  },
  {
    id: '3',
    title: 'Relations Publiques',
    description: 'Gérer votre réputation et amplifier votre voix auprès des médias et influenceurs.',
    icon: 'megaphone'
  },
  {
    id: '4',
    title: 'Analyse & Data',
    description: 'Des décisions basées sur des données réelles pour maximiser votre retour sur investissement.',
    icon: 'bar-chart'
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Campagne Éclat', category: 'Branding', image: 'https://picsum.photos/seed/agency1/600/400' },
  { id: '2', title: 'Nexus Digital', category: 'Social Media', image: 'https://picsum.photos/seed/agency2/600/400' },
  { id: '3', title: 'Horizon PR', category: 'Relations Presse', image: 'https://picsum.photos/seed/agency3/600/400' },
  { id: '4', title: 'Lumina Web', category: 'Web Design', image: 'https://picsum.photos/seed/agency4/600/400' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Laurent',
    role: 'CEO de TechFlow',
    content: 'Lumina a transformé notre vision en une marque forte. Leur approche stratégique est inégalée.',
    avatar: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    id: '2',
    name: 'Jean-Pierre Dubois',
    role: 'Directeur Marketing',
    content: 'Une créativité sans limites alliée à une rigueur opérationnelle. Un partenaire de confiance.',
    avatar: 'https://picsum.photos/seed/person2/100/100'
  }
];

export const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'palette': return <Palette className="w-8 h-8 text-indigo-600" />;
    case 'monitor': return <Monitor className="w-8 h-8 text-indigo-600" />;
    case 'megaphone': return <Megaphone className="w-8 h-8 text-indigo-600" />;
    case 'bar-chart': return <BarChart3 className="w-8 h-8 text-indigo-600" />;
    case 'users': return <Users className="w-8 h-8 text-indigo-600" />;
    case 'globe': return <Globe className="w-8 h-8 text-indigo-600" />;
    default: return <Megaphone className="w-8 h-8 text-indigo-600" />;
  }
};
