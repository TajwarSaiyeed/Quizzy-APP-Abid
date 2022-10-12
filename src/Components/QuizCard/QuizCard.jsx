import React from 'react'
import { Link } from 'react-router-dom'

const QuizCard = ({ q }) => {
  const { id, name, logo, total } = q
  return (
    <div className="rounded-md p-3 bg-gray-200 dark:bg-gray-700 shadow-lg dark:shadow-slate-100">
      <img
        src={logo}
        alt=""
        className="bg-gray-300 dark:bg-gray-400 rounded-md"
      />
      <div className="flex py-4 text-gray-800 justify-between px-1 items-center">
        <h2 className="text-lg font-bold dark:text-gray-200">{name}</h2>
        <p className="dark:text-white">Total : {total}</p>
        <button className="shadow-md font-medium text-white dark:text-black bg-teal-500 dark:bg-teal-300 hover:bg-teal-600 dark:hover:bg-teal-400 px-2 py-2 rounded-md">
          <Link to={`/quiz/${id}`}>Start Quiz</Link>
        </button>
      </div>
    </div>
  )
}

export default QuizCard
