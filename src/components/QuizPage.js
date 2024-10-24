import React, { useState } from 'react';

const questions = [
    { question: 'What is React?', options: ['Library', 'Framework', 'Language'], answer: 'Library' },
    { question: 'What is JSX?', options: ['JavaScript', 'XML', 'Syntax Extension'], answer: 'Syntax Extension' },
    { question: 'Which of these is used to manage state in a functional component?', options: ['setState', 'useState', 'this.state'], answer: 'useState' },
    { question: 'What does the "key" prop do in React?', options: ['Identifies elements uniquely', 'Triggers re-render', 'Binds data to components'], answer: 'Identifies elements uniquely' },
    { question: 'What hook would you use to run side effects in a component?', options: ['useEffect', 'useContext', 'useReducer'], answer: 'useEffect' },
    { question: 'Which method is used to render a React element to the DOM?', options: ['ReactDOM.render()', 'React.render()', 'render()'], answer: 'ReactDOM.render()' },
    { question: 'What is the default behavior of a form submit in React?', options: ['Page reload', 'Form validation', 'Data submission'], answer: 'Page reload' },
    { question: 'Which of the following is true about React props?', options: ['Props are immutable', 'Props are mutable', 'Props can only be strings'], answer: 'Props are immutable' },
    { question: 'What is the purpose of the React Context API?', options: ['To manage global state', 'To update DOM', 'To handle asynchronous data'], answer: 'To manage global state' },
    { question: 'What does the useRef hook return?', options: ['A mutable object', 'An array', 'A JSX element'], answer: 'A mutable object' },
    { question: 'Which of the following is not a React lifecycle method?', options: ['componentDidMount', 'componentDidUpdate', 'componentWillRender'], answer: 'componentWillRender' },
    { question: 'What is React Fiber?', options: ['A new reconciliation engine', 'A state management library', 'A CSS framework'], answer: 'A new reconciliation engine' }
  ];
  

const QuizPage = ({ selectedQuiz, setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (option) => {
    const nextAnswers = [...userAnswers, option];
    setUserAnswers(nextAnswers);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      const correctAnswers = questions.reduce((total, question, index) => {
        return total + (question.answer === nextAnswers[index] ? 1 : 0);
      }, 0);
      setScore(correctAnswers);
    }
  };

  return (
    <div  style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover', // makes sure the image covers the entire background
        backgroundPosition: 'center',
        minHeight: '100vh', // ensures the background image covers the full height of the viewport
        overflow:'hidden'
      }}>
      <h2 style={{textAlign: 'center',color:'white',backgroundColor:'#a79179',padding:'20px'}}>{selectedQuiz.title}</h2>
      <div style={{
       
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white background with some transparency
        padding: '20px',
        textAlign:'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
        <p>{questions[currentQuestionIndex].question}</p>
        {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} style={{ backgroundColor: '#a79179' ,marginRight:'10px'}}>{option}</button>
        ))}
      </div>
      
    </div>
  );
};

export default QuizPage;
