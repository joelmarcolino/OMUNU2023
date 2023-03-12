import Link from "next/link"
import { Box, List, ListItem, Typography } from "@mui/material"
import { ImageComponent } from "../Image/Image"
import logo from "../../../public/omunu_logo.png"
import {Button as MuiButton, ButtonProps} from "@mui/material"
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Navbar = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const YellowToBlue = styled(MuiButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[400]),
    backgroundColor: "#385A64",
    '&:hover': {
      backgroundColor: "#385A65",
    },
  }));

  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Box>
        <ImageComponent name={logo} height={900} width={150}/>
      </Box>
      {!matches ? <Typography>Menu</Typography> : (
        <>
        <List sx={{display: "flex", cursor: "pointer"}}>
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
      <Box>
      <YellowToBlue
          variant="contained"
          sx={{
            height: "40px",
            color: "white",
            fontWeight: "bold",
            m: ".2rem",
            borderRadius: "10px"
          }}>
              <Link
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "white"
          }}>
            Entrar
              </Link>
        </YellowToBlue>
        <YellowToBlue
          variant="contained"
          sx={{
            height: "40px",
            color: "white",
            fontWeight: "bold",
            m: ".2rem",
            borderRadius: "10px"
          }}>
              <Link
                href="/signup"
                style={{
                  textDecoration: "none",
                  color: "white"
          }}>
            Criar Conta
              </Link>
        </YellowToBlue>
      </Box>
      </>
      )}
      
    </Box>
  )
}