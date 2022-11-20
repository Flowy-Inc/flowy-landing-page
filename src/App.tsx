import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Assets
import Fonts from './assets/Fonts';
import Reset from './assets/Reset';
import Variables from './assets/Variables';

// Pages
import Home from './pages/Home/Home';
import FlowiderSignup from './pages/Flowider-Signup/FlowiderSignup';
import FlowitizenSignup from './pages/Flowitizen-Signup/FlowitizenSignup';

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <Fonts />
      <Variables />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowider-signup" element={<FlowiderSignup />} />
        <Route path="/flowitizen-signup" element={<FlowitizenSignup />} />
      </Routes>
    </>
  );
}
export default App;
