import './App.css';
import Header from './container/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './container/ProductDetails';
import ProductListing from './container/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = '/' exact element = {<ProductListing/>} />
          <Route path = '/product/:productId' exact element = {<ProductDetails/>} />
          <Route> 404 NOT FOUND!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
