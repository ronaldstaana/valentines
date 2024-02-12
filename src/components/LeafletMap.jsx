import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const LeafletMap = () => {
  const ayalaMallsManilaBayCoords = [14.52332, 120.98837];

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="mt-3">
            <h1>See you on February 18, 2024!</h1>
          </div>
          <br/>
          <MapContainer
            center={ayalaMallsManilaBayCoords}
            zoom={15}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={ayalaMallsManilaBayCoords} icon={markerIcon}>
              <Popup>Ayala Malls Manila Bay</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default LeafletMap;
