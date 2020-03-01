import React from 'react'

export default function QuizFinish({length,correct}) {
  return (
    <div className="result-toggle">
      <p>{`${correct}/${length}`}</p>
      <a href="">RESET</a>
    </div>
  )
}
