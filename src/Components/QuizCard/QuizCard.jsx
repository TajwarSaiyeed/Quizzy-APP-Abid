import React from 'react'

const QuizCard = ({ q }) => {
  const { name, logo, total } = q
  return (
    <div className="shadow-lg rounded-md p-3 bg-gray-200">
      <img src={logo} alt="" className="bg-gray-300 rounded-md" />
      <div className="flex py-4 text-gray-800 justify-between px-1 items-center">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>Total : {total}</p>
        <button className="shadow-md font-medium text-white bg-teal-500 hover:bg-teal-600 px-2 py-2 rounded-md">
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default QuizCard
