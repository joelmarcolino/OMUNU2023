import { Box } from "@mui/material"

interface CircleProps {
  background: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  text?: string;
}

export const Circle = ({background, left, right, top, bottom, text}: CircleProps) => {
  return (
    <Box 
      sx={{
        backgroundColor: {background}, 
        width: "400px", 
        height: "400px",
        borderRadius: "100%", 
        position: "fixed", 
        left: {left},
        right: {right},
        top: {top},
        bottom: {bottom}
      }}
      >
       {text}
      </Box>
  )
}