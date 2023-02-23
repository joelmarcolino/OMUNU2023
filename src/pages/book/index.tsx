import Head from "next/head"
import { useRouter } from "next/router"
import { Container, Box, Typography, Divider } from "@mui/material"
import { NavbarOn } from "../../components/NavbarOn"
import { ImageComponent } from "../../components/Image/Image"
import {EyeOutlined, StarOutlined, SortAscendingOutlined} from "@ant-design/icons"
import { Button } from "../../components/Button"
import book from "../../../public/book1.png"
import { Footer } from "../../components/Footer"

export default function Book(){
    const router = useRouter()
    const {query} = router

    console.log(query, "aqui")
    return (
        <Container maxWidth="lg">
            <Head>
                <title>Omunu | Book</title>
            </Head>
            <NavbarOn/>
            <Box>
                <Box sx={{display: "flex", justifyContent: "center", mt:"4rem", alignItems: "normal"}}>
                    <Box>
                        <ImageComponent name={book} width={230} height={190}/>
                    </Box>
                    <Box sx={{mt: "2rem", ml: "1rem"}}>
                        <Typography sx={{fontSize: "20px", fontWeight: "bold", color: "#385A64"}}>Rita e a Aventura no Parque</Typography>
                        <Box sx={{display: "flex", justifyContent: "space-around", mt: ".6rem", mb: "1rem", cursor: "pointer", color: "gray"}}>
                        <Typography sx={{fontSize: "15px"}}><EyeOutlined /> Leituras <span>0</span></Typography>
                        <Typography sx={{fontSize: "15px"}}> <StarOutlined />Vitorias <span>0</span></Typography>
                        <Typography sx={{fontSize: "15px"}}><SortAscendingOutlined />Metas <span>0</span></Typography>
                    </Box>
                    <Box>
                        <Button text="Começar a Ler"/>
                        <Button sx={{fontSize: "22px", color: "white"}}/>
                    </Box>
                    </Box>
                </Box>
                <Divider sx={{m: "1rem"}}/>
                <Box>
                    <Typography sx={{width: "800px", color: "#385A64"}}>
                        Entra na onda e descobre a magia infantil com frases e livros para alunos vinculado no âmbito da educação para o desenvolvimento de escrituras dando assim aberturas para leitores infantis no contexto e nos exercícios propostos na educação infantil, com a finalmente de criar crianças com incentivo de inovação no processo da educação.
                    </Typography>
                </Box>
            </Box>
            <Footer/>
        </Container>
    )
}