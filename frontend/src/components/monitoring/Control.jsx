import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography  from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

export default function Control({name, handleChange, state, disabled=false}){
    return <Box sx={{maxWidth: "200px", minWidth: "150px"}}>
    <Paper elevation={10} sx={{padding: "10px"}}>
        <Typography variant="p" component="p">{name}</Typography>
        <Box sx={{hieght: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <Switch disabled = {disabled} checked={state} onChange={handleChange}/>
        </Box>
    </Paper>
</Box> 
}