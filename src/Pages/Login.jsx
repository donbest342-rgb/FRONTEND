import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,} 
from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate ()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let handlelogin = async () => {
    setLoading(true)
    setError('')
   try {
    const res = await
        axios.post('https://students-learning-api.onrender.com/api/auth/login',
            {email, password, firstName})
        console.log(res)
        navigate('/dash')
      localStorage.setItem('userToken', token);
      localStorage.setItem('firstName', firstName);
        
   } catch (error) {
    console.error(error)
    setError(error?.response?.data?.error)
   } finally {
        setLoading(false)
   }
   }
        
  return (
    <Box
      sx={{
        minHeight: "100vh",
        // width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(270deg, orangered, #f5c542ff)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 5 },
            width: { xs: "90%", sm: 400 },
            borderRadius: "20px",
            textAlign: "center",
            // background: "linear-gradient(200deg, #fff, #680e0eff)",
            // backdropFilter: "blur(10px)",
            // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2dce89 , #2dcecc)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 4px 20px rgba(173, 236, 113, 0.5)",
            }}
          >
            <LockOutlined sx={{ fontSize: 40, color: "#000000ff" }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: "orangered" }}
          >
            {error ? error : 'Welcome Back'}
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            
            label="Email"
            type="email"
            variant="outlined"
            value = {email}
            onChange ={(event) => setEmail (event.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "30px" },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value = {password}
            onChange ={(event) => setPassword (event.target.value)}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": { borderRadius: "30px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            
            variant="contained"
            size="large"
            onClick={handlelogin}
            sx={{
              width: '50%',
              marginRight: 'auto',
              marginLeft: 'auto',
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #2dce89 , #048b89ff)",
              boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #0b9e5eff , #26a5a3ff)",
              },
            }}
          >
            {loading ? <CircularProgress size = {24} color='secondary'/> : 'Login'}
          </Button>

          {/* Footer Text */}
          <Typography
            variant="body2"
            sx={{ mt: 3, color: "secondary", textAlign: "center" }}
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "orangered",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;