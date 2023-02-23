import {Container,  Box, Typography} from "@mui/material"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"

export default function Sobre(){
  return (
    <Container maxWidth="lg">
      <Navbar/>
      <Box sx={{mt: "5rem"}}>
            <Typography
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "30px",
                color: "#385A64"
              }}>
                Sobre
              </Typography>
              <Typography sx={{width: "800px", color: "#385A64"}}>
              Entra na onda e descobre a magia infantil com frases e livros para alunos vinculado no âmbito da educação para o desenvolvimento de escrituras dando assim aberturas para leitores infantis no contexto e nos exercícios propostos na educação infantil, com a finalmente de criar crianças com incentivo de inovação no processo da educação.
              </Typography>
      </Box>
      <Footer />
    </Container>
  )
}