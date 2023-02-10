import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography  from '@mui/material/Typography';
import Led from './Led';


export default function Alert({state = false, name}){
    return <Box sx={{maxWidth: "200px"}}>
        <Paper elevation={10} sx={{padding: "10px"}}>
            <Typography variant="p" component="p">{name}</Typography>
            <Box sx={{hieght: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems:"center"}}>
                <Led state={state} />
            </Box>
        </Paper>
    </Box> 
}