import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@mui/material";
import L from "leaflet";

// Custom Icon
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

export default function ContactMap() {
    const position = [45.4642, 9.1900]; // Milano, Italia

    return (
        <Box sx={{ width: "100%", height: "400px", borderRadius: "1rem", overflow: "hidden" }}>
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                {/* Livello base della mappa */}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* Marker con popup */}
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        <strong>Ufficio Principale</strong> <br />
                        Via Roma 123, Milano, Italia
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
}