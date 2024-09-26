import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
  
  export default function BottomNav() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <BottomNavigation
         sx={{ width: '100%', position: 'fixed', bottom: 0 }}
         value={value}
         onChange={handleChange}
        >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="Products"
          value="products"
          icon={<ShoppingCartIcon />}
          onClick={() => navigate('/products')}
        />
        <BottomNavigationAction
          label="Product Details"
          value="product details"
          icon={<InfoIcon />}
          onClick={() => navigate('/productdetails')}
        />
      </BottomNavigation>
    </Box>
    );
  }






