// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexScreen from './screens/IndexScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <div>
        <h1>Lettuce Sustain</h1>
        <Routes>
          <Route path="/" element={<IndexScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
