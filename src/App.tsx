import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import UserPage from './pages/UserPage';
import CommitPage from "./pages/CommitPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='user' element={<UserPage />} />
        <Route path='repos' element={<CommitPage />} />
      </Routes>
    </div>
  );
}

export default App;
