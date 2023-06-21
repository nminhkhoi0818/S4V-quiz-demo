import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Dashboard from './pages/Dashboard/Dashboard';
import Quiz from './pages/Quiz/Quiz';
import AddQuestion from './pages/Dashboard/AddQuestion';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="new" element={<AddQuestion />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App