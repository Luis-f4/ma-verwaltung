import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MaDetails from './MaDetails';
import Create from './Create';
import Register from './Register';
import Login from './Login';
import PrivateRoutes from './PrivateRoutes';

// Die Fetch-Funktion von create, update und Delete müssen erweitert werden, damit der JWT-Token immer mitgesendet wird


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Geschützte Routen */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/ma-details/:id/:typeOfMitarbeiter" element={<MaDetails />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
