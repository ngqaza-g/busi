import Navbar from '../components/Navbar';
import Monitor from '../components/monitoring/Monitor';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Dashboard() {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Navbar />

      <Box sx={{ flexGrow : 1}}>
            <Grid container sx={{ height: "100%"}}>
              <Grid item xs={5} sx={{
                padding: "20px"
              }}>
                <Monitor />
              </Grid>

              <Grid item xs={7}>
                Video Monitoring
              </Grid>
            </Grid>
      </Box>
    </Box>
  );
}
