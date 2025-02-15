import { useState } from "react";
import { ContattiFormContainer, StyledButton, StyledTextField, StyledTypography } from "./ContattiContainer.styles";
import { Snackbar, Alert } from "@mui/material";

export default function ContattiForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        messaggio: "",
    });

    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("https://tuo-dominio-strapi.it/api/contatti", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: formData }), // Strapi richiede che i dati siano sotto la chiave "data"
            });

            if (response.ok) {
                setSnackbar({ open: true, message: "Messaggio inviato con successo!", severity: "success" });
                setFormData({ nome: "", email: "", messaggio: "" }); // Reset form
            } else {
                setSnackbar({ open: true, message: "Errore nell'invio del messaggio", severity: "error" });
            }
        } catch (error) {
            console.error("Errore:", error);
            setSnackbar({ open: true, message: "Errore di connessione al server", severity: "error" });
        }
    };

    return (
        <ContattiFormContainer elevation={3} component="form" onSubmit={handleSubmit}>
            <StyledTypography fontWeight="bold" mb={2}>Scrivici un messaggio</StyledTypography>
            <StyledTextField
                fullWidth
                label="Nome"
                variant="outlined"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
            />
            <StyledTextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
            <StyledTextField
                fullWidth
                label="Messaggio"
                variant="outlined"
                name="messaggio"
                multiline
                rows={4}
                value={formData.messaggio}
                onChange={handleChange}
            />
            <StyledButton fullWidth variant="contained" type="submit">
                Invia
            </StyledButton>

            {/* Snackbar per feedback all'utente */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </ContattiFormContainer>
    );
}