import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Humidity from './Humidity';
import Container from '@mui/material/Container';
import Temperature from './Temperature';
import AlarmControl from './AlarmControl';
import Alert from './Alert';
import Control from './Control'; 
import { useState } from 'react';

export default function Monitor(){

    const [ alarmState, setAlarmState ] = useState( false );



    return <Box sx ={{maxWidth: "600px"}}>
        <Grid container spacing={2}>

            <Grid container item spacing={2}>
                <Grid item xs = {6}>
                    <Container>
                        <Humidity />
                    </Container>
                </Grid>
                <Grid item xs = {6}>
                    <Container>
                        <Temperature />
                    </Container>
                </Grid>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item xs={4} >
                    <Alert name="Temperature" state={false}/>
                </Grid>
                <Grid item xs={4} >
                    <Alert name="Humidity" />
                </Grid>
                <Grid item xs={4} >
                    <Alert name="Smoke & Fire" state={true}/>
                </Grid>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item xs={4} >
                    <Control name="Manual Control" handleChange={()=>{}} />
                </Grid>
                <Grid item xs={4} >
                <Control name="Fan" handleChange={()=>{}} />
                </Grid>
                <Grid item xs={4} >
                <AlarmControl name="Alarm" handleChange={()=> setAlarmState(prev => !prev)}  state={alarmState}/>
                </Grid>
            </Grid>

        </Grid>
    </Box>
}