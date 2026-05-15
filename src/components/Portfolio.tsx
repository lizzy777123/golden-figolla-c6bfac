import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'villas' | 'tropical' | 'lawn'>('all');

  const projects = [
    {
      title: 'Star Island Modern Waterfront Estate',
      category: 'villas',
      location: 'Miami Beach',
      image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=1000&q=80',
      scope: 'Full Hardscaping & Royal Palms',
    },
    {
      title: 'Coral Gables Tropical Courtyard',
      category: 'tropical',
      location: 'Coral Gables',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      scope: 'Native Flora Redesign',
    },
    {
      title: 'Key Biscayne Pristine Golf Turf',
      category: 'lawn',
      location: 'Key Biscayne',
      image: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1000&q=80',
      scope: 'Sodding & Automated Drainage',
    },
    {
      title: 'Coconut Grove Architectural Oasis',
      category: 'villas',
      location: 'Coconut Grove',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      scope: 'Travertine Deck & LED Lighting',
    },
    {
      title: 'Pinecrest Luxury Estate Lawn',
      category: 'lawn',
      location: 'Pinecrest',
      image: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=1000&q=80',
      scope: 'Weekly Premium Groundskeeping',
    },
    {
      title: 'Brickell Penthouse Terrace Garden',
      category: 'tropical',
      location: 'Brickell',
      image: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1000&q=80',
      scope: 'Container Planting & Irrigation',
    },
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>South Florida Portfolio</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Recent Miami Masterpieces
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'villas', label: 'Modern Villas' },
              { id: 'tropical', label: 'Tropical Design' },
              { id: 'lawn', label: 'Pristine Lawns' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-4 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg shadow-slate-100 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  <span>{project.location}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400 block mb-1">
                    {project.scope}
                  </span>
                  <h3 className="font-heading font-bold text-lg leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
