import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    console.log("Data Submitted: ", { email, password });

    if (email && password) {
      navigate("/products"); // Navigate to the products page
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f0f0f0"
      padding={2}
    >
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, width: '100%' }}>
        <Typography variant="h4" gutterBottom align="center">
          Trendy Treasures
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={submitHandler}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              fullWidth
              required
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: '25px' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Home;







