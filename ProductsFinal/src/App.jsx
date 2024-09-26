import './App.css';
import {Route, Routes} from 'react-router-dom'; //Necessary router components
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details" element={<ProductDetails />} />
            </Routes>
        </main>
      <BottomNav />
    </div>
  );
}
export default App;






