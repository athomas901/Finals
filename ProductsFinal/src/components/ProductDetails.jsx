import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "./apis"; // Import your API function
import { Box, Typography, Button, CircularProgress, Card, CardMedia, CardContent } from '@mui/material';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id); // Fetch product details
        setProduct(data);
      } catch (error) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="#f0f0f0"
    >
      <Card sx={{ maxWidth: 600, margin: 'auto', boxShadow: 3 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" padding={2}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="h6" color="error" align="center">
            {error}
          </Typography>
        ) : (
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ borderRadius: 2 }}
            />
            <Typography variant="body1" sx={{ marginY: 2 }}>
              {product.description}
            </Typography>
            <Typography variant="h6">
              Price: ${product.price}
            </Typography>
            <Typography variant="body2">
              Rating: {product.rating.rate} ★
            </Typography>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => window.history.back()}
              >
                Back
              </Button>
            </Box>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

export default ProductDetails;

