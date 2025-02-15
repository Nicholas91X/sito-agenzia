import { Avatar, Box, Typography } from "@mui/material";

export default function TeamMember({ name, role, img }) {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Avatar
                src={img}
                sx={{ width: 80, height: 80, margin: "auto", marginBottom: "1rem" }}
            />
            <Typography variant="body1" fontWeight="bold">{name}</Typography>
            <Typography variant="body2" color="text.primary">{role}</Typography>
        </Box>
    );
}