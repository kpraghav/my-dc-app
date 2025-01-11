// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MapChart from './MapChart';
import DatabaseDetail from './DatabaseDetail';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<MapChart />} />
        <Route path="/database/:dbName" element={<DatabaseDetail />} />
        {/* Add more routes as needed */}
      </Routes>
    </Layout>
  </Router>
);

export default App;

// Ensure this line exists in your entry point file (e.g., index.js)
ReactDOM.render(<App />, document.getElementById('root'));