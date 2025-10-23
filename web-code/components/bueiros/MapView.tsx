'use client'

import dynamic from 'next/dynamic'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Bueiro, statusConfig } from '@/types/bueiros'

// Importa componentes do react-leaflet apenas no cliente
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

interface MapViewProps {
  bueiros: Bueiro[]
  onBueiroClick: (bueiro: Bueiro) => void
}

export default function MapView({ bueiros, onBueiroClick }: MapViewProps) {
  const center: [number, number] = [-15.793889, -47.882778] // Brasília

  const getIcon = (status: Bueiro['status']) => {
    const config = statusConfig[status]
    return L.divIcon({
      className: '',
      html: `<div class="w-4 h-4 ${config.color} rounded-full border-2 border-white shadow-md animate-pulse"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    })
  }

  return (
    <div className="relative w-full h-full">
      {/* Legenda acima do mapa */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-3 flex flex-wrap justify-center gap-4 z-[1000]">
        {Object.entries(statusConfig).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full border border-gray-300 ${config.color}`} />
            <span className={`text-xs font-medium ${config.textColor}`}>
              {config.label}
            </span>
          </div>
        ))}
      </div>

      <MapContainer center={center} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url={`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=696f3447fb024e66b996aa6c87ca8e91`}
          attribution='&copy; OpenStreetMap | © Geoapify'
        />

        {bueiros.map(bueiro => (
          <Marker
            key={bueiro.id}
            position={[bueiro.latitude, bueiro.longitude]}
            icon={getIcon(bueiro.status)}
            eventHandlers={{ click: () => onBueiroClick(bueiro) }}
          >
            <Popup>
              <div className="text-sm">
                <strong>{bueiro.nome}</strong><br />
                {bueiro.endereco}<br />
                <span className="text-gray-600">Nível: {bueiro.nivelAgua}%</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
