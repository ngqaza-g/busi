import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Gauge from './Gauge';

export default function Humidity(){
    
    return <Box sx={{ border: "1px solid black", borderRadius: "10px", maxWidth: "250px", padding : "10px"}}>
        <Typography component="h6" variant="h6">Humidity</Typography>
        <Gauge
            dialStartAngle = {-90}
            dialEndAngle = {-90.001}
            value={20} 
        />
    </Box>
}