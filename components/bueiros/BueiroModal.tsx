'use client'

import { X, Droplets, Activity, MapPin, Clock } from 'lucide-react'
import { Bueiro, statusConfig } from '@/types/bueiros'

interface BueiroModalProps {
  bueiro: Bueiro
  onClose: () => void
}

export default function BueiroModal({ bueiro, onClose }: BueiroModalProps) {
  if (!bueiro) return null

  const status = statusConfig[bueiro.status]

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={onClose} // Fechar ao clicar no overlay
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Impede que clique no modal feche
      >
        {/* Cabeçalho */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{bueiro.nome}</h2>
            <p className="text-gray-500 flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4" />
              {bueiro.endereco}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6 space-y-6">
          {/* Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700 font-medium">Status Atual</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${status.bgColor} ${status.textColor}`}
            >
              {status.label}
            </span>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Droplets className="w-5 h-5" />
                <span className="font-medium">Nível de Água</span>
              </div>
              <div className="text-2xl font-bold text-blue-900">{bueiro.nivelAgua}%</div>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${bueiro.nivelAgua}%` }}
                />
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <Activity className="w-5 h-5" />
                <span className="font-medium">Fluxo Atual</span>
              </div>
              <div className="text-2xl font-bold text-green-900">{bueiro.fluxoAtual} L/min</div>
              <div className="text-sm text-green-600 mt-1">
                Capacidade: {bueiro.capacidadeTotal}L
              </div>
            </div>
          </div>

          {/* Última leitura */}
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              Última leitura: {new Date(bueiro.ultimaLeitura).toLocaleString('pt-BR')}
            </span>
          </div>

          {/* Ações */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Ver Histórico
            </button>
            <button className="flex-1 bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
              Solicitar Manutenção
            </button>
            <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
              Reportar Problema
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
