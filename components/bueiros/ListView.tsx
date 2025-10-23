'use client'

import { Bueiro, statusConfig } from '@/types/bueiros'
import { Droplets, AlertTriangle, Wrench, Activity } from 'lucide-react'

interface ListViewProps {
  bueiros: Bueiro[]
  onBueiroClick: (bueiro: Bueiro) => void
}

export default function ListView({ bueiros, onBueiroClick }: ListViewProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bueiro
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nível de Água
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fluxo Atual
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Última Leitura
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {bueiros.map((bueiro) => {
            const status = statusConfig[bueiro.status]
            return (
              <tr 
                key={bueiro.id} 
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onBueiroClick(bueiro)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{bueiro.nome}</div>
                    <div className="text-sm text-gray-500">{bueiro.endereco}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bgColor} ${status.textColor}`}>
                    {status.label}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          bueiro.nivelAgua > 80 ? 'bg-red-500' : 
                          bueiro.nivelAgua > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${bueiro.nivelAgua}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{bueiro.nivelAgua}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bueiro.fluxoAtual} L/min
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(bueiro.ultimaLeitura).toLocaleString('pt-BR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button 
                      className="text-blue-600 hover:text-blue-900"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log('Ver detalhes', bueiro.id)
                      }}
                    >
                      <Activity className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-yellow-600 hover:text-yellow-900"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log('Manutenção', bueiro.id)
                      }}
                    >
                      <Wrench className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log('Alerta', bueiro.id)
                      }}
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}