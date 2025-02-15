import { Box, Typography } from "@mui/material";
import { ContattiCardContainer } from "./ContattiContainer.styles";

export default function ContactCard({ icon: Icon, title, info }) {
    return (
        <ContattiCardContainer elevation={3}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <Icon size={40} color="white" />
            </Box>
            <Typography variant="h6" fontWeight="bold">
                {title}
            </Typography>
            <Typography variant="body2">
                {info}
            </Typography>
        </ContattiCardContainer>
    );
}