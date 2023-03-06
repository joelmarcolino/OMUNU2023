import { Box, Typography, Grid, List, ListItem } from "@mui/material"

export const Footer = () => {
    return (
        <Box sx={{
            background: "#385A64",
            color: "white"
            }}
            >
                <Grid container alignItems="start" justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <List>
                            <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>Conteudo</ListItem>
                            <ListItem>Livros Novos</ListItem>
                            <ListItem>Livros Mais Populares</ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <List>
                            <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>Informação</ListItem>
                            <ListItem>Sobre Nós</ListItem>
                            <ListItem>Carreira</ListItem>
                            <ListItem>Nosso Conteúdo</ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <List>
                            <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>Suporte</ListItem>
                            <ListItem> Perguntas Frequentes</ListItem>
                            <ListItem>Contacto</ListItem>
                        </List>
                    </Grid>
                </Grid>
            <Typography sx={{textAlign: "center", fontSize: "12px", fontWeight: "bold", mt: "2rem"}}>OMUNU {new Date().getFullYear()} TODOS OS DIREITOS RESERVADOS AOS SEUS FILHOS</Typography>
        </Box>
    )
}