import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix default marker icon issue */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const position = [20.679528, 77.019648];

const LocMap = () => {
  return (
    <div className="w-[200px] h-[200px] rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* Map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker */}
        <Marker position={position}>
          <Popup>
            📍 MedArc Location <br />
            Lat: 20.679528 <br />
            Lng: 77.019648
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocMap;
