export interface Bueiro {
  id: string
  nome: string
  endereco: string
  latitude: number
  longitude: number
  status: 'normal' | 'alerta' | 'critico' | 'manutencao'
  nivelAgua: number // 0-100%
  ultimaLeitura: Date
  capacidadeTotal: number // em litros
  fluxoAtual: number // litros por minuto
}

export const statusConfig = {
  normal: {
    label: 'Normal',
    color: 'bg-green-500',
    textColor: 'text-green-700',
    bgColor: 'bg-green-50'
  },
  alerta: {
    label: 'Alerta',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-700',
    bgColor: 'bg-yellow-50'
  },
  critico: {
    label: 'Crítico',
    color: 'bg-red-500',
    textColor: 'text-red-700',
    bgColor: 'bg-red-50'
  },
  manutencao: {
    label: 'Manutenção',
    color: 'bg-gray-500',
    textColor: 'text-gray-700',
    bgColor: 'bg-gray-50'
  }
}