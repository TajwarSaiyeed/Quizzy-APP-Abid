import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SIngleQuiz from '../SingleQuiz/SIngleQuiz'

const Quizes = () => {
  const quizes = useLoaderData()
  console.log(quizes)
  const { questions, name } = quizes.data
  return (
    <div className="px-4 py-5 sm:px-5 md:px-10">
      <h2 className="text-4xl font-bold text-teal-400 mb-3">Quiz of {name}</h2>
      <div className="grid grid-cols-1 gap-2">
        {questions.map((question, index) => (
          <SIngleQuiz key={question.id} num={index} question={question} />
        ))}
      </div>
    </div>
  )
}

export default Quizes
