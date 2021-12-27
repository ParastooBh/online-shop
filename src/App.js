import Header from './containers/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import {Switch} from "react-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header/> */}
        <Routes> {/*new version of reacr-router-dom replaced Switch with Routes*/}
          <Route  path="/" element={<ProductListing />}/>
          <Route  path="/product/:productId" element={<ProductDetails />}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
