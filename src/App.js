import React, { useState, useEffect } from 'react';
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScoreSummaryPage from './components/ScoreSummaryPage';

function App() {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'JavaScript Basics', description: 'Test your knowledge of basic JavaScript.' },
    { id: 2, title: 'React Basics', description: 'Test your knowledge of React.' },
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(null);

  // Load state from localStorage
  useEffect(() => {
    const savedQuiz = localStorage.getItem('selectedQuiz');
    const savedScore = localStorage.getItem('score');
    if (savedQuiz) setSelectedQuiz(JSON.parse(savedQuiz));
    if (savedScore) setScore(JSON.parse(savedScore));
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('selectedQuiz', JSON.stringify(selectedQuiz));
    localStorage.setItem('score', JSON.stringify(score));
  }, [selectedQuiz, score]);

  return (
    <div className="container">
      {!selectedQuiz && !score && (
        <QuizList quizzes={quizzes} setSelectedQuiz={setSelectedQuiz} />
      )}
      {selectedQuiz && !score && (
        <QuizPage selectedQuiz={selectedQuiz} setScore={setScore} />
      )}
      {score && (
        <ScoreSummaryPage score={score} setSelectedQuiz={setSelectedQuiz} setScore={setScore} />
      )}
    </div>
  );
}

export default App;
