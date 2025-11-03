import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 ,
      position: 'fixed',
      width: '100%', 
      top: 0,
      zIndex: 9999
    }}>
      <AppBar position="static"
      sx={{background: "linear-gradient(170deg, #2dce89, #2dcecc)"}}
      >
        <Toolbar>

         
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button href='/' color='inherit' size='big'>
            D.Q. DIGITALS
            </Button>
          </Typography>
          

          <Stack spacing={2} direction="row" justifyContent="center">
          <Button href='/login'
          // variant="contained"
          color="success"
          size="big"
          >LOGIN</Button>
          <Button href='/register' 
          // variant="contained"
          color="error"
          size="big"
          >REGISTER</Button>
          {/* <Button href='/login' color="inherit">Login</Button>
          <Button href='/users' color="inherit">Users</Button> */}
          </Stack>
            
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}