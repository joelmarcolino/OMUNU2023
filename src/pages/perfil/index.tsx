import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import { 
    Container, 
    Box, 
    Typography, 
    Button, 
    ButtonProps, 
    Divider,
    Tab, 
    Tabs,
    Avatar,
    Grid
 } from "@mui/material";
import {
    CheckCircleFilled, 
    BookOutlined, 
    CheckSquareOutlined,
    EyeOutlined,
    StarOutlined, 
    SortAscendingOutlined }
from "@ant-design/icons"
import { Books } from "../../mock/books";
import { styled } from '@mui/material/styles';
import { ImageComponent } from "../../components/Image/Image";
import { yellow } from '@mui/material/colors';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

export default function Perfil(){
    const [value, setValue] = React.useState<any>(0);

    const router =  useRouter()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    const NewButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
          backgroundColor: yellow[700],
        },
      }));

      function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    return (
        <Container maxWidth="lg">
            <Head>
                <title>Omunu | Perfil</title>
            </Head>
            <Box sx={{display: "flex", justifyContent: "center", mt: "5rem"}}>
                <Box sx={{margin: "1rem"}}>
                <Avatar
                    alt="avatar"
                    src="https://github.com/joelmarcolino.png"
                    sx={{ width: 100, height: 100 }}
                />
                </Box>

                <Box sx={{margin: "1rem", color: "gray"}}>
                    <Typography sx={{fontSize: "22px", fontWeight:"bold", color: "#385A64"}}>JoelmarcolinoOfficial <CheckCircleFilled /></Typography>
                    <Box sx={{display: "flex", justifyContent: "space-around", mt: ".6rem", mb: "1rem", cursor: "pointer"}}>
                        <Typography sx={{fontSize: "15px"}}><EyeOutlined /> Leituras <span>0</span></Typography>
                        <Typography sx={{fontSize: "15px"}}> <StarOutlined />Vitorias <span>0</span></Typography>
                        <Typography sx={{fontSize: "15px"}}><SortAscendingOutlined />Metas <span>0</span></Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", color: "gray"}}>
                        <Typography sx={{fontSize: "15px", mr: ".5rem"}}>Gerenciado Por</Typography>
                        <Typography sx={{fontSize: "15px"}}>Elisio Mualumene</Typography>
                    </Box>
                </Box>
                <Box sx={{margin: "1rem"}}>
                    <NewButton variant="contained" sx={{width: "140px", mr: "1rem", ml: ".5rem", color: "white", fontWeight: "bold"}}> <BookOutlined/>Ver</NewButton>
                    <NewButton variant="contained" sx={{fontSize: "22px", color: "white"}}><CheckSquareOutlined /></NewButton>
                </Box>
            </Box>
            <Divider sx={{mt: "4rem"}}/>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Livros Lidos" sx={{fontWeight: "bold"}} {...a11yProps(0)} />
                    <Tab label="Salvos" sx={{fontWeight: "bold"}} {...a11yProps(1)} />
                    <Tab label="Guardados" sx={{fontWeight: "bold"}} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container>
                        {
                            Books.map((book, index) => (
                                <Grid item xs={12} md={3}>
                                        <Box sx={{m: "1rem"}} onClick={() => router.push(`/book/?book_id=${index}`)}>
                                            <ImageComponent name={book.image} height={600} width={500}/>
                                            <Typography sx={{fontWeight: "bold", color: "#385A64"}}>{book.name}</Typography>
                                            <Typography sx={{color: "gray", fontSize: "12px"}}>{book.descricao}</Typography>
                                        </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Não Existem Livros Salvos
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Não Existem Livros Guardados
                </TabPanel>
            </Box>
        </Container>
    )
}