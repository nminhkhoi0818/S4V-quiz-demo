import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Dashboard from './pages/Dashboard/Dashboard';
import Quiz from './pages/Quiz/Quiz';
import Questions from './pages/QuestionQuiz/Questions';
import AddQuestion from './pages/QuestionQuiz/AddQuestion';
import Chat from './pages/Chat/Chat';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="questions" element={<Questions />}/>
        <Route path="new" element={<AddQuestion />}/>
        <Route path="quiz" element={<Quiz />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App