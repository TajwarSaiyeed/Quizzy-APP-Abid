import React, { createContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SIngleQuiz from '../SingleQuiz/SIngleQuiz'

export const worngRightCounter = createContext()

const Quizes = () => {
  const [wrong, setWrong] = useState(0)
  const [correct, setCorrect] = useState(0)
  const quizes = useLoaderData()

  const { questions, name } = quizes.data
  return (
    <div className="px-4 py-5 sm:px-5 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <h2 className="text-4xl font-bold text-teal-400 mb-3">
            Quiz of {name}
          </h2>
          <worngRightCounter.Provider
            value={[wrong, setWrong, correct, setCorrect]}
          >
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
              {questions.map((question, index) => (
                <SIngleQuiz key={question.id} num={index} question={question} />
              ))}
            </div>
          </worngRightCounter.Provider>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-teal-400 mb-3">
            Quiz Answer Statictis
          </h2>
          <h2 className="my-2 p-2 rounded-md bg-slate-400">
            You made mistake : {wrong}
          </h2>
          <h2 className="my-2 p-2 rounded-md bg-slate-400">
            Right Answer : {correct}
          </h2>
          <Link
            to="/"
            className="bg-teal-900 p-2 text-white rounded-md cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Quizes
