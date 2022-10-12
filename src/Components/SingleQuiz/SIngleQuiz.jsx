import React, { useContext } from 'react'
import { worngRightCounter } from '../Quizes/Quizes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiFillEye } from 'react-icons/ai'

const SIngleQuiz = ({ question, num }) => {
  const { options, correctAnswer } = question
  const [wrong, setWrong, correct, setCorrect] = useContext(worngRightCounter)

  const handleSelect = (e) => {
    if (e !== correctAnswer) {
      toast("Oop's wrong answer, Try Again")
      setWrong(wrong + 1)
    } else {
      toast('Correct')
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="px-4 py-5 sm:px-5 md:px-10 shadow-md dark:shadow-slate-200 bg-slate-200 dark:bg-slate-500 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-left dark:text-white">
          Quiz {num + 1}
          {' : '}
          {question.question.slice(3, question.question.length - 4)}
        </h1>
        <button
          className="w-10 h-10 cursor-pointer"
          onClick={() => toast(correctAnswer)}
        >
          <AiFillEye />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 my-2">
        {options.map((option, idx) => (
          <label
            key={idx}
            className=" cursor-pointer text-xl font-medium p-3 rounded-md text-left h-full w-full flex gap-5 items-center bg-teal-500"
          >
            <input
              onChange={(e) => handleSelect(e.target.value)}
              type="radio"
              name="q"
              id={options.id}
              value={option}
            />
            <span className="dark:text-white"> {option}</span>
          </label>
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default SIngleQuiz
