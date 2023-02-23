import { Box, Typography } from "@mui/material"

export default function Custom404(){
    return (
        <Box sx={{display: "flex", mt:"8rem", justifyContent: "center"}}>
            <Typography sx={{color: "red", fontWeight: "bold", fontSize: "50px", cursor: "pointer"}}>NOT FOUND</Typography>
        </Box>
    )
}