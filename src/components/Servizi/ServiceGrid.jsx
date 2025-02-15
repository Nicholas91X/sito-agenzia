import ServiceCard from "./ServiceCard";
import { FaCode, FaMobileAlt, FaCloud, FaRocket } from "react-icons/fa";
import { Fade } from "@mui/material";
import { PaperServizi, ServicesGridContainer } from "./ServiziContainer.styles";

const services = [
    { title: "Sviluppo Web", description: "Creiamo siti web moderni e performanti.", icon: FaCode },
    { title: "App Mobile", description: "Sviluppiamo app per iOS e Android.", icon: FaMobileAlt },
    { title: "Cloud Solutions", description: "Soluzioni scalabili su cloud.", icon: FaCloud },
    { title: "Marketing Digitale", description: "Strategie avanzate per il tuo business.", icon: FaRocket },
];

export default function ServicesGrid() {
    return (
        <Fade in={true} timeout={1500}>
            <PaperServizi elevation={3}>
                <ServicesGridContainer>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </ServicesGridContainer>
            </PaperServizi>
        </Fade>
    );
}