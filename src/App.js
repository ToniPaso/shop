import './App.css';
import Header from "./Header"
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';




function App() {
  return (
    <div className="App">
        <div className="App">
      <Router>
        <Routes>
          <Route path="/login"   />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
