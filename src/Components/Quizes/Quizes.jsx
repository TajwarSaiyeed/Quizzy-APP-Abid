import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Quizes = () => {
  const quizes = useLoaderData()
  const { questions } = quizes.data
  console.log(questions)
  return (
    <div>
      {questions.map((question) => (
        <div>{question.question.slice(3, question.question.length - 4)}</div>
      ))}
    </div>
  )
}

export default Quizes
