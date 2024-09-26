import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardPage from 'page/BoardPage/BoardPage';
import RegistraionPage from 'page/RegistraionPage/RegistraionPage';
import ParticipantsPage from 'page/ParticipantsPage/ParticipantsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BoardPage />} />
      <Route path="register" element={<RegistraionPage />} />
      <Route path="view" element={<ParticipantsPage />} />
    </Routes>
  );
};

export default App;
