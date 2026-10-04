import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  return (
    <MapContainer center={[51.38, 0.535]} zoom={14} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.37839612767821, 0.5357665576437021]}>
        <Popup>Chatham Hill Mosque</Popup>
      </Marker>
    </MapContainer>
  );
}
