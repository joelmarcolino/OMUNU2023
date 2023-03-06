import Link from "next/link"
import { useRouter } from "next/router";
import {Button as MuiButton, ButtonProps} from "@mui/material"
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { Container, Button, Box, Typography, Divider, Grid } from "@mui/material"
import { Navbar } from "../../components/Navbar"
import { ImageComponent } from "../../components/Image/Image"
import person from "../../../public/new_page.png"
import { Footer } from "../../components/Footer"
import { Books } from "../../mock/books";

export default function Home() {
  const router = useRouter()

  const BlueToYellow = styled(MuiButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[400]),
    backgroundColor: "#385A64",
    '&:hover': {
      backgroundColor: "#FFC704",
    },
  }));

  const YellowToBlue = styled(MuiButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[400]),
    backgroundColor: "#FFC704",
    '&:hover': {
      backgroundColor: "#385A64",
    },
  }));

  return (
    <>
    <Container maxWidth="lg">
      <Navbar />
      <Divider sx={{width: "100%"}}/>
      <Box sx={{textAlign: "left"}}>
        <ImageComponent name={person} height={700} width={500}/>
        <Box>
            <BlueToYellow
              variant="contained"
              sx={{
                mt: "1rem",
                height: "50px",
                color: "white",
                fontWeight: "bold",
                m: ".2rem",
                borderRadius: "20px"
              }}>
                  <Link href="/login" style={{textDecoration: "none", color: "white"}}>Entrar</Link>
            </BlueToYellow>
            <YellowToBlue
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
            </YellowToBlue>
        </Box>
      </Box>
      <Box sx={{mt: "5rem", width: "40px"}}>
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
      <Box sx={{mt: "2rem"}}>
      <Typography
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "30px",
          color: "#385A64"
        }}>
          Livros
        </Typography>
        <Grid container>
            {
              Books.map((book, index) => (
                <Grid item xs={12} md={3} key={index}>
                    <Box sx={{m: "1rem"}} onClick={() => router.push(`/book/?book_id=${index}`)}>
                      <ImageComponent name={book.image} height={600} width={500}/>
                          <Typography sx={{fontWeight: "bold", color: "#385A64"}}>{book.name}</Typography>
                          <Typography sx={{color: "gray", fontSize: "12px"}}>{book.descricao}</Typography>
                    </Box>
                </Grid>
                ))
              }
          </Grid>
      </Box>
    </Container>
    <Footer />
    </>
  )
}