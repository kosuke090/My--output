import React from 'react'

export default function QuizList({ quizs, curenNum, doCheckAnswer }) {

  const quizlist = quizs[curenNum].c.map((quiz, index) => (

    <li className="question" key={index} onClick={()=>doCheckAnswer(index)} >{quiz}</li>
  ));


  return (
    <ul className="quizlist">
      {quizlist}
    </ul>
  )
}


