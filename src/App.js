import React from 'react';
import Home from './screens/Home';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
