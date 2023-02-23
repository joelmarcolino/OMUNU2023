import {Button as MuiButton, ButtonProps} from "@mui/material"
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { BookOutlined } from "@ant-design/icons";

interface IButtonProps extends ButtonProps{
    text?: string;
}

export const Button = ({text, ...rest}: IButtonProps) => {

    const NewButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(yellow[400]),
        backgroundColor: yellow[500],
        '&:hover': {
          backgroundColor: yellow[500],
        },
      }));

    return (
        <NewButton 
            variant="contained" 
            sx={{
                mr: "1rem", 
                ml: ".5rem", 
                color: "white", 
                fontWeight: "bold"
            }}
            {...rest}
            > 
            <BookOutlined/>
            {text}
        </NewButton>
    )
}