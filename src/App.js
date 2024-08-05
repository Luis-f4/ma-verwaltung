import Home from './Home';
import MaDetails from './MaDetails';
import './index.css';
import './Luis.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar"
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ma-details/:id" element={<MaDetails />} />
            <Route path="/ma-marketing-details/:id" element={<MaDetails />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
