import { ReactNode } from "react"
import {Box, Typography} from "@mui/material"

interface ICardsProps {
  Icon: ReactNode,
  title: string,
  desc: string
}


export const Card = ({Icon, title, desc}: ICardsProps) => {
  return (
    <Box sx={{
      textAlign: "left", 
      height: "260px", 
      width: "230px", 
      border: "0.2px solid gray",
      borderRadius: "10px",
      margin: "auto",
      padding: "20px",
      cursor: "pointer",
      boxShadow: "1px 1px 3px gray"
      }}>
      {Icon}
      <Typography component="h1" sx={{mt: "1rem", fontSize: "20px", fontWeight: "bold"}}>{title}</Typography>
      <Typography component="p" sx={{fontSize: "15px", color: "gray", mt: "1rem"}}>{desc}</Typography>
    </Box>
  )
}