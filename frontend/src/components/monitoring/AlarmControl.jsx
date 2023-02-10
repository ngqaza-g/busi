import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography  from '@mui/material/Typography';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOff  from '@mui/icons-material/VolumeOff';
import IconButton from '@mui/material/IconButton';

export default function AlarmControl({name, handleChange, state, disabled=false}){
    return <Box sx={{maxWidth: "200px", minWidth: "150px"}}>
    <Paper elevation={10} sx={{padding: "10px"}}>
        <Typography variant="p" component="p">{name}</Typography>
        <Box sx={{hieght: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems:"center"}}>
            {/* <Switch disabled = {disabled} checked={state} onChange={handleChange}/> */}
            <IconButton onClick={handleChange} disabled={disabled}>
                {state ? <VolumeUp color="primary" /> : <VolumeOff />}
            </IconButton>
        </Box>
    </Paper>
</Box> 
}