import {Container, Box, FormControl, Stack, Typography, Button, Divider } from "@mui/material"
import { Input } from "../../components/input"
import { ImageComponent } from "../../components/Image/Image"
import Link from "next/link"
import logo from "../../../public/omunu_logo.png"
import { Circle } from "../../components/Solids Effects/Circle"
import { Social } from "../../components/Social"

export default function Signup(){
  return (
      <Container maxWidth="lg">
        <Circle background="#385A64" left="70rem" top="-10rem"/>
        <Box sx={{m: "1rem"}}>
          <ImageComponent name={logo} height={800} width={100}/>
        </Box>
        <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "30px",
          color: "#385A64"
        }}>
          LOG <span>II</span> N
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", mt: "1rem"}}>
          <FormControl sx={{width: "20rem"}}>
            <Stack spacing="1rem" sx={{w: "2000px"}}>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
            </Stack>
            <Button 
              variant="contained" 
              sx={{
                mt: "1rem", 
                height: "50px",
                background: "#FFC704", 
                color: "white", 
                fontWeight: "bold"
                }}>
                  Entrar
            </Button>
            <Typography sx={{textAlign: "center", m: "1rem", fontWeight: "bold"}}><Link href="/change_password" style={{textDecoration: "none", color: "#385A64"}}>Recuperar Senha</Link></Typography>
            <Divider>
            ou
          </Divider>
          <Social/>
          </FormControl>
        </Box>
        <Circle background="#FFC704" left="-8rem"/>
      </Container>
  )
}