import L from "leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import Mark from "../images/icon-location.svg";
const Map = ({ IPDATA }) => {
  const position = [IPDATA.latitude, IPDATA.longitude];
  const myIcon = L.icon({
    iconUrl: Mark,
    iconSize: [50, 60],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={myIcon} position={position}>
      </Marker>
    </MapContainer>
  );
};

export default Map;
