import { Box, Fade, Grid, Typography } from "@mui/material";
import { BoxChiSiamo, PaperChiSiamo, StyledTypography } from "./ChiSiamoContainer.styles";
import TeamMember from "../TeamMember/TeamMember";

export default function ChiSiamoContent() {
    const teamMembers = [
        { name: "Alessandro Rossi", role: "CEO & Founder", img: "/assets/images/team1.jpg" },
        { name: "Giulia Bianchi", role: "CTO", img: "/assets/images/team2.jpg" },
        { name: "Luca Verdi", role: "Project Manager", img: "/assets/images/team3.jpg" },
    ];

    return (
        <BoxChiSiamo
        >
            <Fade in={true} timeout={1500}>
                <PaperChiSiamo elevation={3} >
                    <StyledTypography variant={"body1"} >
                        Siamo un team di professionisti appassionati di innovazione, tecnologia e crescita aziendale.
                        Il nostro obiettivo è fornire soluzioni di alta qualità per soddisfare le esigenze dei nostri clienti.
                    </StyledTypography>

                    {/* MISSION E VALORI */}
                    <Box sx={{ marginBottom: "2rem" }}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>La nostra mission</Typography>
                        <StyledTypography variant="body1">
                            Fornire valore attraverso soluzioni digitali innovative e sostenibili.
                        </StyledTypography>
                    </Box>

                    {/* TEAM */}
                    <Grid container spacing={2} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <TeamMember {...member} />
                            </Grid>
                        ))}
                    </Grid>
                </PaperChiSiamo>
            </Fade>
        </BoxChiSiamo>
    )
}