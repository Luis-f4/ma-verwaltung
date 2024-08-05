import Home from './Home';
import MaDetails from './MaDetails';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ma-details/:id" element={<MaDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
