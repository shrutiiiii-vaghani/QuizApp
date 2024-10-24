import React from 'react';

const ScoreSummaryPage = ({ score, setSelectedQuiz, setScore }) => {
  const handleRestart = () => {
    setSelectedQuiz(null);
    setScore(null);
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Makes the div take the full viewport height
        textAlign: 'center',
        backgroundImage: 'url("https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover', // makes sure the image covers the entire background
        backgroundPosition: 'center',
        minHeight: '100vh', // ensures the background image covers the full height of the viewport
        overflow:'hidden'
      }}
    >
        <div style={{
       
       backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white background with some transparency
       padding: '20px',
       textAlign:'center',
       borderRadius:'5px',
       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
            <h2>Quiz Completed!</h2>
        <p>Your Score: {score}/{12}</p>
        <button onClick={handleRestart} style={{ backgroundColor: '#a79179' }}
            >Back to Quiz List</button>
        </div>
     
    </div>
  );
};

export default ScoreSummaryPage;
