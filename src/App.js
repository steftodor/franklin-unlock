import * as React from 'react';
import { Container, Typography, Box, hr } from '@mui/material';
import UnlockGenerator from './UnlockGenerator';
import Guide from './Guide';



export default function App() {


  //  alert(crypto.createHash('sha1').update(JSON.stringify("helloworld")).digest('hex'))


  return ( 

    <Container maxWidth="sm">

    <Box sx={{ my: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
          Franklin T9 Unlock Code Generator
        </Typography>
    </Box>

      <Box sx={{ my: 4 }}>
        
        <UnlockGenerator />

      </Box>
  
      <Box sx={{ my: 4 }}>
        
        <Guide />

      </Box>

    </Container>
    
  );
}
