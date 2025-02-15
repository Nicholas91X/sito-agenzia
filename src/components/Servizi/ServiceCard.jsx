import { Box, Typography } from "@mui/material";
import { ServiceCardContainer, StyledTypography } from "./ServiziContainer.styles";

export default function ServiceCard({ icon: Icon, title, description }) {
    return (
        <ServiceCardContainer elevation={3}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <Icon size={50} color="white" /> {/* Passiamo l'icona */}
            </Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
                {title}
            </Typography>
            <StyledTypography>
                {description}
            </StyledTypography>
        </ServiceCardContainer>
    );
}