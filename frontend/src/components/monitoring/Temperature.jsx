import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Gauge from './Gauge';

export default function Temperature(){

    return <Box sx={{ border: "1px solid black", borderRadius: "10px", maxWidth: "250px", padding : "10px"}}>
        <Typography component="h6" variant="h6">Temperature</Typography>
        <Gauge
            value={20} 
        />
    </Box>
}