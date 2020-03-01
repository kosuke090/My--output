import React from 'react'


export default function QuizButton({curenNum,doNext,quizs}) {


  return (
    <div className="quiz-button">
      
    <button onClick={doNext}>{curenNum === quizs.length-1 ?"FINISH・CLICK":"NEXT"}</button>
    
      
    </div>
  )
}
