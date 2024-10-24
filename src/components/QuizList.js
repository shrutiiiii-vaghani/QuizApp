import React from 'react';

const QuizList = ({ quizzes, setSelectedQuiz }) => {
  return (
    <div 
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover', // makes sure the image covers the entire background
        backgroundPosition: 'center',
        minHeight: '100vh', // ensures the background image covers the full height of the viewport
        overflow:'hidden'
      }}
    >
        <h2 style={{textAlign: 'center',color:'white',backgroundColor:'#a79179',padding:'20px'}}>Select a Quiz</h2>
     <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        height: '80vh', // Makes the div take the full viewport height
        textAlign: 'center',
      }}>
      
      <ul>
  {quizzes.map((quiz) => (
    <li key={quiz.id} style={{ listStyle: 'none', margin: '20px 0' }}>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white background with some transparency
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a slight shadow for a card effect
        }}
      >
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
        <button
          onClick={() => setSelectedQuiz(quiz)}
          style={{ backgroundColor: '#a79179' }}
        >
          Start Quiz
        </button>
      </div>
    </li>
  ))}
</ul>

     </div>
    </div>
  );
};

export default QuizList;
