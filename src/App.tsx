import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
