'use client'

import { useState } from 'react'
import { Map, List, Filter, RefreshCw } from 'lucide-react'
import dynamic from 'next/dynamic'

// Importa MapView só no cliente
const MapView = dynamic(() => import('@/components/bueiros/MapView'), {
  ssr: false,
})
import ListView from '@/components/bueiros/ListView'
import BueiroModal from '@/components/bueiros/BueiroModal'
import { Bueiro } from '@/types/bueiros'

// --- Geração de Dados Mockados ---
// Em um projeto real, isso seria uma chamada de API.
const generateMockBueiros = (): Bueiro[] => {
  const statuses: Bueiro['status'][] = ['normal', 'alerta', 'critico', 'manutencao'];
  const bueiros: Bueiro[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const nivelAgua = Math.floor(Math.random() * 101);

    bueiros.push({
      id: `B${1000 + i}`,
      nome: `Bueiro ${1000 + i}`,
      endereco: `Rua das Águas, ${i * 15}`,
      // Coordenadas em torno de uma área central para simulação
      latitude: -15.793889 + (Math.random() - 0.5) * 0.1,
      longitude: -47.882778 + (Math.random() - 0.5) * 0.1,
      status: randomStatus,
      nivelAgua: nivelAgua,
      ultimaLeitura: new Date(Date.now() - Math.random() * 1000 * 60 * 60), // Última hora
      capacidadeTotal: 5000,
      fluxoAtual: Math.floor(Math.random() * 200),
    });
  }
  return bueiros; 
};

const mockBueiros = generateMockBueiros();
// --- Fim dos Dados Mockados ---


export default function BueirosPage() {
  const [view, setView] = useState<'map' | 'list'>('map');
  const [bueiros, setBueiros] = useState<Bueiro[]>(mockBueiros);
  const [selectedBueiro, setSelectedBueiro] = useState<Bueiro | null>(null);

  const handleBueiroClick = (bueiro: Bueiro) => {
    setSelectedBueiro(bueiro);
  };

  const handleCloseModal = () => {
    setSelectedBueiro(null);
  };

  const handleRefresh = () => {
    // Simula uma atualização de dados
    setBueiros(generateMockBueiros());
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow-sm p-4 sticky top-0 z-40">
          <div className="container mx-auto flex justify-between items-center">
            {/* Título */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Dashboard de Bueiros
              </h1>
              <p className="text-sm text-gray-500">
                Monitoramento em tempo real
              </p>
            </div>

            {/* Controles */}
            <div className="flex items-center gap-4">
              {/* Botões de Ação */}
              <div className="hidden sm:flex items-center gap-2">
                <button 
                  onClick={handleRefresh}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors" 
                  title="Atualizar Dados"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors" title="Filtrar">
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              {/* Seletor de Visão */}
              <div className="flex items-center bg-gray-200 p-1 rounded-full">
                <button
                  onClick={() => setView('map')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                    view === 'map' ? 'bg-white shadow text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <Map className="w-5 h-5 sm:hidden" />
                  <span className="hidden sm:inline">Mapa</span>
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                    view === 'list' ? 'bg-white shadow text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5 sm:hidden" />
                  <span className="hidden sm:inline">Lista</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-md h-[calc(100vh-150px)]">
            {view === 'map' ? (
              <MapView bueiros={bueiros} onBueiroClick={handleBueiroClick} />
            ) : (
              <ListView bueiros={bueiros} onBueiroClick={handleBueiroClick} />
            )}
          </div>
        </main>
      </div>

      {selectedBueiro && (
    <BueiroModal bueiro={selectedBueiro} onClose={handleCloseModal} />
  )}

    </>
  );
}