import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";


import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post("https://students-learning-api.onrender.com/api/auth",
        { firstName, lastName, email, password, phoneNumber, address }
      )
      console.log(data);
      navigate('/dash')
      localStorage.setItem('userToken', token);
      localStorage.setItem('firstName', firstName);
    } catch (error) {
      console.error(error?.response?.data?.error);
      setError(error?.response?.data?.error || "Registration failed");
      

    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(127deg, orangered, #f5c542ff)",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: { xs: "80vw", sm: 420 },
            borderRadius: "20px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            // background: "linear-gradient(150deg, #fff, #680e0eff)",
            // backdropFilter: "blur(10px)",
            // boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: "orangered", textAlign: "center" }}
          >
            {error ? (error):('Create Account')}
          </Typography>

          <form onSubmit={handleRegister}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              sx={{ mb: 2,
                "& .MuiOutlinedInput-root": { borderRadius: "30px" },
               }}
              required
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              sx={{ mb: 2,
                "& .MuiOutlinedInput-root": { borderRadius: "30px" },
               }}
              required
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ mb: 2 ,
                "& .MuiOutlinedInput-root": { borderRadius: "30px" },
              }}
              required
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              sx={{ mb: 2,
                "& .MuiOutlinedInput-root": { borderRadius: "30px" },
               }}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              sx={{ mb: 2 ,
                "& .MuiOutlinedInput-root": { borderRadius: "30px" },
              }}
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              sx={{ mb: 3,
                "& .MuiOutlinedInput-root": { borderRadius: "30px" },
               }}
            />

            <Button
              
              type="submit"
              variant="contained"
              
              sx={{
              width: '50%',
              marginRight: '25%',
              marginLeft: '25%',
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #2dce89 , #048b89ff)",
              boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #0b9e5eff , #26a5a3ff)",
              },
            }}
            >
              {loading ? (<CircularProgress size={24} color='inherit' />) : ('Sign Up')}
            </Button>
          </form>

          <Typography variant="body2"  sx={{ mt: 3, color: "secondary", textAlign: "center"  }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "orangered",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default RegistrationScreen;