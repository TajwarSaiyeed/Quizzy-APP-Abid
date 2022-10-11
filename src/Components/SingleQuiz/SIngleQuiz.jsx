import React from 'react'

const SIngleQuiz = ({ question, num }) => {
  const { options, correctAnswer } = question

  const handleSelect = (e) => {
    if (e !== correctAnswer) {
      alert(correctAnswer)
    } else {
      alert(e)
    }
  }

  return (
    <div className="px-4 py-5 sm:px-5 md:px-10 bg-slate-200 rounded-md">
      <h1 className="text-2xl">
        Quiz {num + 1}
        {' : '}
        {question.question.slice(3, question.question.length - 4)}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-2">
        {options.map((option, idx) => (
          <div key={idx}>
            <p className="text-xl bg-gradient-to-r font-medium p-3 rounded-md text-left h-full flex gap-5 items-center from-cyan-600 to-teal-300">
              <input
                onChange={(e) => handleSelect(e.target.value)}
                type="radio"
                name="q"
                value={option}
                id={idx}
              />
              <span> {option}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SIngleQuiz
