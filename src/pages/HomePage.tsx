import React, { useState } from 'react';
import { MapPin, Activity } from 'lucide-react';
import { ExplorationMode } from '../types';

const HomePage: React.FC = () => {
  const [mode, setMode] = useState<ExplorationMode>('place');

  return (
    <div className="flex flex-col">
      {/* Mode Selection */}
      <div className="container mx-auto px-4 py-6 flex justify-center space-x-4">
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'place' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('place')}
        >
          <MapPin size={20} className="mr-2" />
          <span>Explore Places</span>
        </button>
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'activity' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('activity')}
        >
          <Activity size={20} className="mr-2" />
          <span>Find Activities</span>
        </button>
      </div>

      {/* Featured Places */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Featured Places</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Cards */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg"
                alt="Eiffel Tower"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Eiffel Tower</h3>
                <p className="text-white/90 text-sm">Paris, France</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm mb-3">
                Iconic iron lattice tower on the Champ de Mars, symbol of Paris and France.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Landmark</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Architecture</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Tourism</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg"
                alt="Louvre Museum"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Louvre Museum</h3>
                <p className="text-white/90 text-sm">Paris, France</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm mb-3">
                World's largest art museum and home to many famous works including the Mona Lisa.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Art</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Museum</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Culture</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg"
                alt="Colosseum"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Colosseum</h3>
                <p className="text-white/90 text-sm">Rome, Italy</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm mb-3">
                Ancient amphitheater in the heart of Rome, an iconic symbol of the Roman Empire.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Historical</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Architecture</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Tourism</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;