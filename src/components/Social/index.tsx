import { Box, Stack } from "@mui/material"
import {AppleOutlined, GoogleOutlined, FacebookOutlined} from "@ant-design/icons"

export const Social = () => {
    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Stack spacing="1rem" direction="row">
              <FacebookOutlined style={{fontSize: "30px", color: "blue"}}/>
              <GoogleOutlined style={{fontSize: "30px", color: "red"}}/>
              <AppleOutlined style={{fontSize: "30px", color: "black"}}/>
            </Stack>
          </Box>
    )
}