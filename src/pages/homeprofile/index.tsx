import Head from "next/head"
import { useRouter } from "next/router";
import { Container, Typography, Box, Divider, Grid } from "@mui/material";
import { ImageComponent } from "../../components/Image/Image";
import { NavbarOn } from "../../components/NavbarOn";
import { Books } from "../../mock/books";
import { Footer } from "../../components/Footer";

export default function HomeProfile(){
    const router = useRouter()

    return (
        <>
        <Container maxWidth="lg">
            <Head>
                <title>Omunu | Home</title>
            </Head>
            <NavbarOn/>
            <Box sx={{mt:"4rem"}}>
                <Typography 
                    sx={{
                        fontSize: "30px", 
                        color: "#385A64"
                    }}>
                        Bem Vindo a Casa JoelmarcolinOfficial
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{mt: "4rem"}}>
                <Typography sx={{fontWeight: "bold", fontSize: "20px", color: "#385A64"}}>Livros com Conteudos Excelentes</Typography>
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