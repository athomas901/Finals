import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "./apis"; // Import API function
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import TopNav from "./TopNav";
 


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products
        setProducts(data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
        <TopNav />
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
       Trendy Treasures
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" padding={2}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {products.map((product) => (
            <Box key={product.id} width={{ xs: '100%', sm: '48%', md: '30%' }} marginBottom={2}>
              <Card>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 140 }} // Adjust height as needed
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ${product.price}
                  </Typography>
                  <Typography variant="body2">
                    {product.description.substring(0, 50)}...
                  </Typography>
                  <Link to={`/product-details/${product.id}`} style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="primary">
                      View Details
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
       )}
    </Box>
    </div>
  );
}
export default Products;