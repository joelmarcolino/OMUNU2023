import Link from "next/link"
import { Box, List, ListItem,  Avatar, Typography } from "@mui/material"
import { ImageComponent } from "../Image/Image"
import logo from "../../../public/omunu_logo.png"
import { Input } from "../input"

export const NavbarOn = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Box sx={{m: "1rem"}}>
        <ImageComponent name={logo} height={900} width={100}/>
      </Box>
      <List sx={{display: "flex", cursor: "pointer"}}>

        <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>
        <Link href="/" style={{textDecoration: "none", color: "#385A64"}}>Home</Link>
        </ListItem>

        <ListItem sx={{fontSize: "20px", fontWeight: "bold"}}>
        <Link href="/homeprofile" style={{textDecoration: "none", color: "#385A64"}}>Livros</Link>
        </ListItem>

        <ListItem>
            <Input placeholder="Buscar" type="text" sx={{width: "400px"}} size="small"/>
        </ListItem>

        <ListItem>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Avatar
                    alt="avatar"
                    src="https://github.com/joelmarcolino.png"
                    sx={{ width: 40, height: 40 }}
                />
                <Typography sx={{color: "#385A64", fontWeight: "bold", fontSize: "18px", m:".3rem"}}>
                  <Link href="/perfil" style={{textDecoration: "none", color: "#385A64"}}>JoelmarcolinoOfficial</Link>
                </Typography>
            </Box>
        </ListItem>

      </List>
    </Box>
  )
}