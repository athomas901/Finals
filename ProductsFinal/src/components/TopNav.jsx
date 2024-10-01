import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom"; 
import Box from "@mui/material/Box";

export default function TopNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FF00FF" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={() => navigate("/")}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Trendy Treasures
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => navigate("/products")}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => navigate("/productdetails")}
          >
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
