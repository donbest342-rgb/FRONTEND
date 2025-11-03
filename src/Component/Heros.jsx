import { Box, Button, Typography } from '@mui/material'
import './Heros.css'
import image from '../assets/lobby.avif'

const Heros = () => {
  return (
    
        <Box  className= 'name'
        
        sx={{
          height: '90vh',
          }}>
          <Typography className='type tp' variant='h3' sx={{
            fontSize: 'bold',
            fontFamily: 'caption',
            width: '80%',

          }}>
            The Simpler Way to Invest
          </Typography >
          <Typography className='type ty' variant='body1' 
          sx={{
            width: '70%'
          }}>
            Initiate and execute trades, view portfolio performances,
            and access in-depth equity research.
          </Typography>
          <Button 
          href='/register'
          variant="contained"
          color='success'
          >
            GET STARTED
          </Button>
        </Box>
    
  )
}

export default Heros
