import React from 'react'
import { Typography, Box, Container, Paper, Button } from '@mui/material'
import image from '../assets/lobby.avif'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'

const Hero = () => {
  return (
    <div>
        <Container 
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: 'linear-gradient(209deg, rgba(93, 97, 105, 0.57), rgba(201, 137, 178, 0.36), rgba(91, 145, 98, 0.57))',
            paddingTop: '1em',
            paddingBottom: '1.5em'

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                gap: 2
            }}>
                <Paper
                    elevation={2}
                    sx={{
                    p: { xs: 4, sm: 5 },
                    width: { xs: "30%", sm: 250 },
                    minWidth: '200px',
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: 'transparent',
                    backgroundColor: '#ffffff86'
                    }}
                        >
                            <img src={image} alt="image"
                            style={{
                                width: '100%',
                                position: 'relative',
                                top: 0,
                            }} />
                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#4caf50'}}>
                                Click to Purchase
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#fa0909ff'}}>
                                View Market
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#080cddff'}}>
                                Contact For Info
                            </Button>

                        </Paper>               
                        
                <Paper
                    elevation={2}
                    sx={{
                    p: { xs: 4, sm: 5 },
                    width: { xs: "30%", sm: 250 },
                    minWidth: '200px',
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: 'transparent',
                    backgroundColor: '#ffffff86'
                    }}
                        >
                            <img src={one} alt="image"
                            style={{
                                width: '100%',
                                position: 'relative',
                                top: 0,
                            }} />
                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#4caf50'}}>
                                Buy Now
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#fa0909ff'}}>
                                View Prices
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#080cddff'}}>
                                Contact Seller
                            </Button>

                        </Paper> 
                        <Paper
                    elevation={2}
                    sx={{
                    p: { xs: 4, sm: 5 },
                    width: { xs: "30%", sm: 250 },
                    minWidth: '200px',
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: 'transparent',
                    backgroundColor: '#ffffff86'
                    }}
                        >
                            <img src={two} alt="image"
                            style={{
                                width: '100%',
                                position: 'relative',
                                top: 0,
                            }} />
                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#4caf50'}}>
                                Stuck Market
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#fa0909ff'}}>
                                View Chart
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#080cddff'}}>
                                Contact Support
                            </Button>

                        </Paper> 
                        <Paper
                    elevation={2}
                    sx={{
                    p: { xs: 4, sm: 5 },
                    width: { xs: "30%", sm: 250 },
                    minWidth: '200px',
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: 'transparent',
                    backgroundColor: '#ffffff86'
                    }}
                        >
                            <img src={three} alt="image"
                            style={{
                                width: '100%',
                                position: 'relative',
                                top: 0,
                            }} />
                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#4caf50'}}>
                                Buy Crypto
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#fa0909ff'}}>
                                View Rates
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#080cddff'}}>
                                Contact Broker
                            </Button>

                        </Paper> 
                        <Paper
                    elevation={2}
                    sx={{
                    p: { xs: 4, sm: 5 },
                    width: { xs: "30%", sm: 250 },
                    minWidth: '200px',
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: 'transparent',
                    backgroundColor: '#ffffff86'
                    }}
                        >
                            <img src={four} alt="image"
                            style={{
                                width: '100%',
                                position: 'relative',
                                top: 0,
                            }} />
                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#4caf50'}}>
                                Forex Market
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#fa0909ff'}}>
                                View Trends
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#080cddff'}}>
                                Contact Analyst
                            </Button>

                        </Paper> 
                        <Paper
                    elevation={2}
                    sx={{
                    p: { xs: 4, sm: 5 },
                    width: { xs: "30%", sm: 250 },
                    minWidth: '200px',
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: 'transparent',
                    backgroundColor: '#ffffff86'
                    }}
                        >
                            <img src={five} alt="image"
                            style={{
                                width: '100%',
                                position: 'relative',
                                top: 0,
                            }} />
                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#4caf50'}}>
                                Oil Market
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#fa0909ff'}}>
                                View Analysis
                            </Button>                            <Button variant='contained'
                            sx={{
                                mt: 2,
                                backgroundColor: '#080cddff'}}>
                                Contact Expert
                            </Button>

                        </Paper> 
            </Box>

        </Container>
      
    </div>
  )
}

export default Hero
