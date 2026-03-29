import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const Key = import.meta.env.VITE_GOOGLE_MAPS_API;

const PinPoint = {
  lat: 20.679528,
  lng: 77.019648,
};

const containerStyle = {
  width: "100%",
  height: "160px",
};

// 🌞 Light theme (default)
const lightMapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

// 🌙 Dark theme (footer)
const darkMapOptions = {
  disableDefaultUI: true,
  zoomControl: false,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#1e293b" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#334155" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#020617" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
  ],
};

function LocMap({ theme = "light" }) {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: Key });

  const openInMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${PinPoint.lat},${PinPoint.lng}`,
      "_blank",
    );
  };

  const mapOptions = theme === "dark" ? darkMapOptions : lightMapOptions;

  return (
    <div
      className={`w-full rounded-xl overflow-hidden shadow-sm ${
        theme === "dark"
          ? "border border-white/10 bg-black/20"
          : "border border-stone-200"
      }`}
    >
      <div className="relative">
        {!isLoaded ? (
          <div
            className={`w-full flex items-center justify-center text-xs ${
              theme === "dark"
                ? "bg-black/40 text-white/40"
                : "bg-stone-100 text-stone-400"
            }`}
            style={{ height: "160px" }}
          >
            Loading map…
          </div>
        ) : (
          <>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={PinPoint}
              zoom={15}
              options={mapOptions}
            >
              <MarkerF position={PinPoint} />
            </GoogleMap>

            {/* Optional dark overlay */}
            {theme === "dark" && (
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            )}
          </>
        )}
      </div>

      <button
        onClick={openInMaps}
        className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors group ${
          theme === "dark"
            ? "bg-white/5 hover:bg-white/10 border-t border-white/10"
            : "bg-stone-50 hover:bg-stone-100 border-t border-stone-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span
            className={`text-xs font-medium ${
              theme === "dark"
                ? "text-white/60 group-hover:text-white"
                : "text-stone-500 group-hover:text-stone-800"
            }`}
          >
            Open in Google Maps
          </span>
        </div>
      </button>
    </div>
  );
}

export default React.memo(LocMap);
