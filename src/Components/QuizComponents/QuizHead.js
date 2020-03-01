import React from 'react'

export default function QuizHead({ quizs, curenNum }) {

  const quizTitle = quizs[curenNum].q
  return (
    <div className ="quizHead">
      <h1>{quizTitle}</h1>
      <p>{curenNum + 1}/{quizs.length}</p>
    </div>
  )
}
