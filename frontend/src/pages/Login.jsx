import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import wallpaper from '../assets/data_center1.jpg';
import { Form, useActionData } from 'react-router-dom';
import axios from 'axios';



export default function Login(){
    const response = useActionData();


    const [ showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = ()=>{
        setShowPassword(prev => !prev);
    }

    return(
        <Box sx={{
            height: "100vh",
            justifyContent: "center",
            backgroundImage: `url(${wallpaper})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}
        >
            <Backdrop
            sx={{ color: '#fff',
                zIndex: (theme) => {
                    theme.zIndex.drawer + 1
                },
                flexDirection: "column" 
            }}
            open={true}
            >
                <Typography 
                    variant="h3" 
                    component="h3"
                >
                    Server Room Monitoring System
                </Typography>

                <Box sx={{
                    marginTop: "10px",
                    maxWidth: "500px",
                    maxHight: "500px",

                }}>
                    <Paper variant="outlined" sx={{ padding: "20px 50px",}}>

                        <Typography variant= "h4" component="h4" sx={{
                            marginBottom : "20px",
                            textAlign: "center"
                        }}>Sign In</Typography>
                        
                        <Form method="post">
                            <TextField 
                                error ={response ? (response.status === 404 ? true : false) : false}
                                helperText={response ? (response.status === 404 ? response.data.error : "") : ""}
                                id ="username" 
                                label="Username"
                                name="username" 
                                variant="outlined"
                                required 
                                fullWidth
                            />

                            <p />

                            <TextField 
                                error ={response ? (response.status === 400 ? true : false) : false}
                                helperText={response ? (response.status === 400 ? response.data.error : "") : ""}
                                id ="password" 
                                label="Password"
                                name="password"
                                type = { showPassword ? 'text' : 'password'}
                                variant="outlined"
                                required 
                                InputProps ={{
                                    endAdornment :(
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                )

                            }}
                            />

                            <p />

                            <Box>
                                <Button variant="contained" type="submit" sx={{width: "100%", display: "block"}} >Login</Button>
                                <Button variant="text">Forgot Passowrd ?</Button>
                            </Box>
                        </Form>

                    </Paper>
                </Box>
            </Backdrop>
        </Box>


        );
}



export async function action( { request, params }){ 


    const formData = await request.formData();
    const user = Object.fromEntries(formData);
    try{
        const response = await axios.post('/api/auth/login', user);
        return response;

    }catch (err){
        console.log(err);
        const { response } = err;
        return response;
    }
}