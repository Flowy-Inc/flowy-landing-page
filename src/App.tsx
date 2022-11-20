import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Assets
import Fonts from './assets/styles/Fonts';
import Reset from './assets/styles/Reset';
import Variables from './assets/styles/Variables';

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
        <Route path="/flowider-sign-up" element={<FlowiderSignup />} />
        <Route path="/flowitizen-sign-up" element={<FlowitizenSignup />} />
      </Routes>
    </>
  );
}
export default App;
