import Link from "next/link"
import { Box, List, ListItem } from "@mui/material"
import { ImageComponent } from "../Image/Image"
import logo from "../../../public/omunu_logo.png"
import { Circle } from "../Solids Effects/Circle"

export const Navbar = () => {
  return (
    <Box sx={{display: "flex"}}>
      <Circle background="#385A64" right="-8rem" top="-4rem"/>
      <Circle background="#FFC704" right="-15rem" top="10rem"/>
      <Box sx={{m: "1rem"}}>
        <ImageComponent name={logo} height={900} width={150}/>
      </Box>
      <List sx={{display: "flex", cursor: "pointer", ml: "18rem"}}>
        <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>
        <Link href="/" style={{textDecoration: "none", color: "#385A64"}}>Home</Link>
        </ListItem>
        <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>
        <Link href="/homeprofile" style={{textDecoration: "none", color: "#385A64"}}>Livros</Link>
        </ListItem>
        <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>
        <Link href="/about" style={{textDecoration: "none", color: "#385A64"}}>sobre</Link>
        </ListItem>
      </List>
    </Box>
  )
}