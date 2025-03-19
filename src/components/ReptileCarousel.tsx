import React from 'react';
import { Reptile } from '../types/reptile';

interface ReptileCarouselProps {
  title: string;
  reptiles: Reptile[];
  onReptileClick: (reptile: Reptile) => void;
}

const ReptileCarousel: React.FC<ReptileCarouselProps> = ({ title, reptiles, onReptileClick }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div className="flex overflow-x-auto space-x-6 py-4">
        {reptiles.map((reptile) => (
          <div
            key={reptile.id}
            className="flex-none w-60 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105"
            onClick={() => onReptileClick(reptile)}
            role="button"
            tabIndex={0}
            aria-label={`Veja mais sobre o réptil ${reptile.name}`}
          >
            <div className="relative h-48">
              <img
                src={reptile.image}
                alt={reptile.name}
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{reptile.name}</h3>
              <p className="text-sm text-gray-600 italic">{reptile.scientificName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReptileCarousel;
