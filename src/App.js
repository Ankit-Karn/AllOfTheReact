import { useState } from 'react';
import './App.css';
import Section from './components/section/section';
import Timer from './components/section/timer';

function App() {
  const questions = [
    {
      question : 'Where is Gir National Park located?',
      options : ['Assam', 'Gujrat', 'Uttarakhand', 'Goa'],
      correctAns : 'Gujrat',
      id : 1
    },
    {
      question : 'Name the brightest planet in the Solar system?',
      options : ['venus', 'Saturn', 'Jupiter', 'Mars'],
      correctAns : 'Venus',
      id : 2
    },
    {
      question : 'Name the origin source of the Brahmaputra river?',
      options : ['India', 'Nepal', 'Tibet', 'Bhutan'],
      correctAns : 'Tibet',
      id : 3
    },
    {
      question : 'How many seconds are there in an hour?',
      options : [3600, 3200, 3800, 4000],
      correctAns : 3600,
      id : 4
    },
    {
      question : 'Who wrote the book ‘Wings of Fire’?',
      options : ['APJ Abdul Kalam', 'Ruskin Bond', 'Khushwant Singh', 'RK Narayan'],
      correctAns : 'APJ Abdul Kalam',
      id : 5
    }
  ]

  const[currentIndex, setCurrentIndex] = useState(0);

  function changeQuestion(){
    setCurrentIndex(currentIndex+1)
  }

  function handleSubmit(){
    alert('Quiz-Submitted!');
  }

  const isLastQuestion = currentIndex+1 === questions.length

  return (
    <div className="App">
      <Section 
      questionData = {questions[currentIndex]} 
      changeQuestion = {changeQuestion}
      isLastQuestion = {isLastQuestion}
      handleSubmit = {handleSubmit}
      />
      <Timer handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
