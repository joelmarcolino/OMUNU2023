import { Box, Stack, Typography } from "@mui/material"
import {AppleOutlined, GoogleOutlined, FacebookOutlined} from "@ant-design/icons"

export const Social = () => {
    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Stack spacing="1rem" direction="row">
              <Typography sx={{fontSize: "30px", color: "blue"}}><FacebookOutlined /></Typography>
              <Typography sx={{fontSize: "30px", color: "red"}}><GoogleOutlined /></Typography>
              <Typography sx={{fontSize: "30px", color: "black"}}><AppleOutlined /></Typography>
            </Stack>
          </Box>
    )
}