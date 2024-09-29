import axios from "axios";

// URL for the API
const URL = "https://fakestoreapi.com/products";
// Function to fetch all products
export const fetchProducts = async () => {
  const response = await axios.get(URL);
  return response.data; // return the product data
};
export const fetchProductById = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};









