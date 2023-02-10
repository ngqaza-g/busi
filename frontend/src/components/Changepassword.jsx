import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Changepassword(){

    const [ passwords, setPasswords ] = useState({});

    const [ errors, setErrors ] = useState({
        same_as_old : false,
        new_password_not_matching: false
    });


    useEffect(()=>{
        const { oldPassword, newPassword, repeatPassword } = passwords;
        if(oldPassword !== '' && newPassword !== '' && oldPassword !== undefined && newPassword !== undefined && oldPassword === newPassword){
            setErrors(prev =>{
                const current = {...prev};
                current.same_as_old = true;
                return current;   
            });
        }else{
            setErrors(prev =>{
                const current = {...prev};
                current.same_as_old = false;
                return current;   
            });
        }

        if(repeatPassword !== '' && newPassword !== '' && repeatPassword !== undefined && newPassword !== undefined && repeatPassword !== newPassword){
            setErrors(prev =>{
                const current = {...prev};
                current.new_password_not_matching = true;
                return current;   
            });
        }else{
            setErrors(prev =>{
                const current = {...prev};
                current.new_password_not_matching = false;
                return current;   
            });
        }
    }, [passwords]);

    function handleChange(e){
        const { name, value } = e.target;
        setPasswords(prev =>{
            const current = {...prev};
            current[name] = value;
            return current;
        });
    }


    console.log(passwords);

    return (
        <Container>
        <Box sx={{maxWidth:"350px", minWidth: "250px"}}>
            <TextField sx={{width:"100%"}} id="oldPassword" name='oldPassword' label="Old password"
            onChange={handleChange}
            value = {passwords.oldPassword ? passwords.oldPassword : ''}
            variant='outlined'/>
            
            <p />
            <TextField 
                sx={{width:"100%"}} 
                id="newPassword" 
                name='newPassword' 
                label="New password" 
                onChange={handleChange}
                value = {passwords.newPassword ? passwords.newPassword : ''}
                variant='outlined'
                error = {errors.same_as_old}
                helperText = {errors.same_as_old ? "New Password Cannot be the same as the Old one" : ""}
            />
            <p />
            <TextField 
                sx={{width:"100%"}} 
                id="repeatPassword" 
                name='repeatPassword' 
                label="Repeat password" 
                onChange={handleChange}
                value = {passwords.repeatPassword ? passwords.repeatPassword : ''}
                variant='outlined'
                error = {errors.new_password_not_matching}
                helperText = {errors.new_password_not_matching ? "Repeat password does not match with New password" : ""}
            />
            <p />
            <Button 
                sx={{width:"100%"}} 
                size="large" 
                variant="contained"
                disabled = { errors.new_password_not_matching || errors.same_as_old}
            >
                Change Password
            </Button>
            <p />
            <Button sx={{width:"100%"}} size="large" variant="contained">Cancel</Button>
        </Box>
        </Container>
    )
}