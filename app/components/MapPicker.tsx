"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

// 📍 Manejar clicks
function LocationMarker({ setLocation, setCoords }: any) {
  const [position, setPosition] = useState<any>(null);

  useMapEvents({
    click(e: any) {
      const { lat, lng } = e.latlng;

      setPosition([lat, lng]);
      setCoords({ lat, lng });

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          setLocation(
            data.display_name || `Lat: ${lat}, Lng: ${lng}`
          );
        })
        .catch(() => {
          setLocation(`Lat: ${lat}, Lng: ${lng}`);
        });
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function MapPicker({
  mapCenter,
  coords,
  setCoords,
  setLocation,
}: any) {

  // 🔧 Fix iconos
  useEffect(() => {
    import("leaflet").then((L) => {
      const icon = L.icon({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      (L.Marker.prototype as any).options.icon = icon;
    });
  }, []);

  return (
    <MapContainer
      center={mapCenter}
      zoom={15}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <LocationMarker
        setLocation={setLocation}
        setCoords={setCoords}
      />

      {coords && (
        <Marker position={[coords.lat, coords.lng]} />
      )}
    </MapContainer>
  );
}