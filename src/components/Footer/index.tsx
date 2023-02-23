import { TableFooter, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <TableFooter sx={{display: "flex", justifyContent: "center"}}>
            <Typography sx={{textAlign: "center", fontSize: "12px", fontWeight: "bold", mt: "2rem"}}>OMUNU {new Date().getFullYear()}</Typography>
        </TableFooter>
    )
}