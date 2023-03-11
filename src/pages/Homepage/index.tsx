import { useRouter } from "next/router";
import { Container, Box, Typography, Divider, Grid } from "@mui/material"
import { Navbar } from "../../components/Navbar"
import { ImageComponent } from "../../components/Image/Image"
import person from "../../../public/new_page.png"
import { Footer } from "../../components/Footer"
import {Card} from "../../components/Card"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <Divider sx={{width: "100%"}}/>
      </Container>
    <Container>
      <Grid container alignItems="center" sx={{mb: "8rem"}}>
        <Grid item xs={12} md={6}>
          <Typography 
          component="h1" 
          sx={{
            fontSize: "50px", 
            fontWeight: "bold", 
            color: "#385A64"
            }}>
              Livro Digital Infantil
            </Typography>
            <Typography 
            component="p"
            sx={{
              fontSize: "18px",
              color: "gray"
            }}>
              Melhor site para estimular o cerebro do seu filho
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageComponent name={person} height={700} width={500}/>
        </Grid>
      </Grid>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
      <Box sx={{mb: "2rem"}}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            color: "#385A64"
          }}>
            Sobre Nós
          </Typography>
          <Typography sx={{width: "500px", color: "gray", fontSize: "12px"}}>
          Entra na onda e descobre a magia infantil com frases e livros para alunos vinculado no âmbito da educação para o desenvolvimento de escrituras dando assim aberturas para leitores infantis no contexto e nos exercícios propostos na educação infantil, com a finalmente de criar crianças com incentivo de inovação no processo da educação.
          </Typography>
      </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card 
              Icon={<SettingsIcon sx={{color:"green"}} fontSize="large"/>} 
              title="Conecte com a nossa experiencia" 
              desc="okokokokoeeasaxaxxxadfdf"
              />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
                Icon={<EmojiObjectsIcon sx={{color:"orange"}} fontSize="large"/>} 
                title="Costrua suas Ideias" 
                desc="okokokokoeedfdfddftfrgtyfff"
                />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
                Icon={<VpnKeyIcon sx={{color:"blue"}} fontSize="large"/>} 
                title="Continue a desenvolver" 
                desc="okokokokoeedfdfdffdfddddd"
                />
          </Grid>
        </Grid>
      </Box>
      {/**OTHER */}
      <Grid container alignItems="center" sx={{mb: "8rem"}}>
        <Grid item xs={12} md={6}>
          <Typography 
          component="h1" 
          sx={{
            fontSize: "50px", 
            fontWeight: "bold", 
            color: "#385A64"
            }}>
              Livro Digital Infantil
            </Typography>
            <Typography 
            component="p"
            sx={{
              fontSize: "18px",
              color: "gray"
            }}>
              Melhor site para estimular o cerebro do seu filho
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageComponent name={person} height={700} width={500}/>
        </Grid>
      </Grid>
       {/**OTHER */}
       <Grid container alignItems="center" sx={{mb: "8rem"}}>
        <Grid item xs={12} md={6}>
          <Typography 
          component="h1" 
          sx={{
            fontSize: "50px", 
            fontWeight: "bold", 
            color: "#385A64"
            }}>
              Livro Digital Infantil
            </Typography>
            <Typography 
            component="p"
            sx={{
              fontSize: "18px",
              color: "gray"
            }}>
              Melhor site para estimular o cerebro do seu filho
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageComponent name={person} height={700} width={500}/>
        </Grid>
      </Grid>
    </Container>
    <Footer />
    </>
  )
}