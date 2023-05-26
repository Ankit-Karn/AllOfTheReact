import React, { useState } from 'react'
import styles from './section.module.css'

const Section = ({ questionData, changeQuestion, isLastQuestion, handleSubmit }) => {

  const {
    question,
    options,
    correctAns,
    id
  } = questionData || {}

  const [finalScore, setFinalScore] = useState(0)
 
  function saveQuizResponse(selectedOption){
    const isAnswerCorrect = selectedOption === correctAns
    if(isAnswerCorrect){
      setFinalScore(finalScore+1)
    }
    localStorage.setItem('score',finalScore)
  }

  return (
   <>
    <div className={styles.outer}>
    <div className={styles.container}>
      <p>Score : {finalScore}</p>
      <p>{question}</p>
      <div className={styles.options} >
        {
          options.map(option => (
            <div key={option}>
              <input
                type='radio'
                name='quizOptions'
                onChange={() => saveQuizResponse(option)}
              />
              <span>{option}</span>
            </div>
          ))
        }
      </div>
      <div className={styles.btn}>
        <button onClick={isLastQuestion ? handleSubmit : changeQuestion}>{ isLastQuestion? 'Submit' : 'Next' }</button>
      </div>
    </div>
    </div>
   </>
  )
}

export default Section
