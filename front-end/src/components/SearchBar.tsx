import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { reptiles } from '../data/reptiles';

interface SearchBarProps {
  onFilterChange: (filteredReptiles: typeof reptiles) => void;
  onFilterTypeChange: (filterType: string | null) => void;
  activeFilter: string | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFilterChange, onFilterTypeChange, activeFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const applyFilter = (filterType: string) => {
    const newFilter = activeFilter === filterType ? null : filterType;
    onFilterTypeChange(newFilter);
    
    let filtered = [...reptiles];
    
    if (searchTerm) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    onFilterChange(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    let filtered = [...reptiles];
    
    if (value) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(value.toLowerCase()) ||
        r.scientificName.toLowerCase().includes(value.toLowerCase())
      );
    }

    onFilterChange(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Busque por nome, região ou características..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      <div className="flex gap-4 mt-4 flex-wrap">
        <button
          onClick={() => applyFilter('Região Geográfica')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'Região Geográfica'
              ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          Região Geográfica
        </button>
        <button
          onClick={() => applyFilter('Dieta')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'Dieta'
              ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          Dieta
        </button>
        <button
          onClick={() => applyFilter('Habitat')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'Habitat'
              ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          Habitat
        </button>
        <button
          onClick={() => applyFilter('Estado de Conservação')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'Estado de Conservação'
              ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          Estado de Conservação
        </button>
      </div>
    </div>
  );
};

export default SearchBar;