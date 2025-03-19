import React from 'react';
import { ArrowLeft, AlertTriangle, Scale, Ruler, MapPin, Leaf, Fish, Shield } from 'lucide-react';
import { Reptil } from '../types/reptile';
import Layout from './Layout';

interface ReptileDetailProps {
  reptile: Reptil;
  onBack: () => void;
}

const ReptileDetail: React.FC<ReptileDetailProps> = ({ reptile, onBack }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-800 hover:text-green-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar ao Glossário
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={reptile.imagemPrincipal}
              alt={reptile.nomePopular}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{reptile.nomePopular}</h1>
              <p className="text-xl text-gray-600 italic">{reptile.nomeCientifico}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Nível de Perigo</h3>
                  <p className="text-gray-600">{reptile.perigo??'Inofensivo'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div className="flex items-start gap-3">
                <Ruler className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Comprimento</h3>
                  <p className="text-gray-600">{reptile.length}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Habitat</h3>
                  <p className="text-gray-600">{reptile.habitat}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Fish className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Dieta</h3>
                  <p className="text-gray-600">{reptile.diet}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Estado de Conservação</h3>
                  <p className="text-gray-600">{reptile.conservation}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-6">Galeria de Imagens</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reptile.gallery?.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-64">
                    <img
                      src={image}
                      alt={`${reptile.name} - Imagem ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReptileDetail;