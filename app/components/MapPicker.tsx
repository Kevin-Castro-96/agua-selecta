"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

// 🔥 Fix icono leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// 👉 Recentrar mapa automáticamente
function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 15);
    }
  }, [center, map]);

  return null;
}

// 👉 Click en mapa
function LocationMarker({ setCoords, setLocation }: any) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;

      setCoords({ lat, lng });

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const data = await res.json();
        setLocation(data.display_name);
      } catch {
        setLocation(`Lat: ${lat}, Lng: ${lng}`);
      }
    },
  });

  return null;
}

export default function MapPicker({
  mapCenter,
  coords,
  setCoords,
  setLocation,
}: any) {
  return (
    <MapContainer
      center={mapCenter}
      zoom={15}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <RecenterMap center={mapCenter} />

      {coords && <Marker position={[coords.lat, coords.lng]} />}

      <LocationMarker setCoords={setCoords} setLocation={setLocation} />
    </MapContainer>
  );
}