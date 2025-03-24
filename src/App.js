import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';;
import Sidebar from './components/Sidebar/Sidebar';
import SnapView from './components/SnapView/SnapView';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/snap" element={<SnapView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
