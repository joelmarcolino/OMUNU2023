import Link from "next/link"
import { Container, Button, Box, Typography } from "@mui/material"
import { Navbar } from "../../components/Navbar"
import { ImageComponent } from "../../components/Image/Image"
import person from "../../../public/personReading.png"
import { Footer } from "../../components/Footer"

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box sx={{textAlign: "left"}}>
        <ImageComponent name={person} height={700} width={500}/>
        <Box>
            <Button
              variant="contained"
              sx={{
                mt: "1rem",
                height: "50px",
                background: "#FFC704",
                color: "white",
                fontWeight: "bold",
                m: ".2rem",
                borderRadius: "20px"
              }}>
                  <Link href="/login" style={{textDecoration: "none", color: "white"}}>Entrar</Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: "1rem",
                height: "50px",
                background: "#FFC704",
                color: "white",
                fontWeight: "bold",
                m: ".2rem",
                borderRadius: "20px"
                }}>
                  <Link href="/signup" style={{textDecoration: "none", color: "white"}}>Criar Conta</Link>
            </Button>
        </Box>
      </Box>
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