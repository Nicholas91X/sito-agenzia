import ContattiCard from "./ContattiCard";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { ContattiGridContainer, PaperContatti } from "./ContattiContainer.styles";
import { Box, Fade } from "@mui/material";
import ContattiForm from "./ContattiForm";
import ContattiMap from "./ContattiMap";

const contacts = [
    { title: "Telefono", info: "+39 123 456 7890", icon: FaPhone },
    { title: "Email", info: "info@azienda.com", icon: FaEnvelope },
    { title: "Indirizzo", info: "Via Roma 123, Milano", icon: FaMapMarkerAlt },
    { title: "LinkedIn", info: "/azienda", icon: FaLinkedin },
];

export default function ContactGrid() {
    return (
        <Fade in={true} timeout={1500}>
            <PaperContatti elevation={3}>
                <ContattiGridContainer>
                    {contacts.map((contact, index) => (
                        <ContattiCard key={index} {...contact} />
                    ))}
                </ContattiGridContainer>
                <Box sx={{ width: "100%", display: "flex", flexDirection: {xs: "column", sm: "column", md: "row"}, justifyContent: "center", alignItems: "center", padding: {xs: 0, sm: "2rem"}, gap: "2rem" }}>
                    <ContattiForm />
                    <ContattiMap />
                </Box>
            </PaperContatti>
        </Fade>
    );
}