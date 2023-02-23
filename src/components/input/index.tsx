import { FormControl, OutlinedInputProps, OutlinedInput } from "@mui/material";

interface IInputProps extends OutlinedInputProps{
  type: string;
  placeholder: string;
}

export const Input = ({type, placeholder, ...rest}:IInputProps) => {
  return (
    <FormControl sx={{w: "100%"}}>
      <OutlinedInput type={type} placeholder={placeholder} fullWidth {...rest}/>
    </FormControl>
  )
}